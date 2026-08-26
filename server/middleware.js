const url = require("url");
const fs = require('fs');
const path = require('path');

const LOW_STOCK_THRESHOLD = 10; // Match your LOWSTOCKTHRESHOLD

module.exports = (req, res, next) => {
    if (req.method === 'GET' && (req.path === '/products/stats' || req.url === '/products/stats')) {
    try {
      const dbPath = path.join(__dirname, 'products.json');
      const { products = [] } = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

      const stats = products.reduce(
        (acc, item) => {
          const stock = Number(item.stock) || 0;
          acc.total += 1;

          if (stock === 0) {
            acc.outOfStock += 1;
          } else if (stock < LOW_STOCK_THRESHOLD) {
            acc.lowStock += 1;
          } else {
            acc.inStock += 1;
          }

          return acc;
        },
        { total: 0, inStock: 0, lowStock: 0, outOfStock: 0 }
      );

      return res.status(200).json(stats);
    } catch (e) {
      //return res.status(500).json({ error: 'Failed to calculate stats' });
    }
  }
    // if the request method is POST
    if (req.method === 'POST') {
        const requiredFields = ['title', 'price', 'description', 'thumbnail', 'categoryId', 'brand'];
        const missingFields = requiredFields.filter(field => !req?.body?.[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                error: `Missing required fields: ${missingFields.join(', ')}`
            });
        }


        // add meta data to the request/new post
        const now = new Date().toISOString();
        req.body.meta = {
            ...req.body.meta,
            createdAt: now,
            updatedAt: now,
        };

        // Generate ID and SKU
        try {

            const dbPath = path.join(__dirname, 'products.json');
            const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
            const { products, categories } = dbData;

            // Generate ID
            const lastId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
            const newId = lastId + 1;
            req.body.id = newId;

            // Find Category Code
            const category = categories.find(c => c.id === parseInt(req.body.categoryId, 10));
            const catCode = category ? (category.slug || category.name).slice(0, 3).toUpperCase() : 'CAT';

            // Generate Bra Code
            const braCode = (req.body.brand || 'BRD').slice(0, 3).toUpperCase();

            // Generate Title Code
            const titleCode = (req.body.title || 'UNK').slice(0, 3).toUpperCase();

            // SKU Pattern: CAT-BRA-TIT-ID
            req.body.sku = `${catCode}-${braCode}-${titleCode}-${newId}`;

        } catch (error) {
            console.error("Error generating SKU:", error);
            // Fallback unique SKU if generation fails
            req.body.sku = `CAT-BRD-UNK-${Date.now()}`;
        }
    }

    if (req.method === 'PUT' || req.method === 'PATCH') {
        if (req.body) {
            try {
                const dbPath = path.join(__dirname, 'products.json');
                const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

                const productId = Number(req.url.split('/').pop());
                const product = dbData.products.find((product) => product.id === productId);

                req.body.meta = {
                    ...product?.meta,
                    ...req.body.meta,
                    updatedAt: new Date().toISOString(),
                };
            } catch (error) {
                console.error("Error updating product metadata:", error);
            }
        }
    }

    // we override the res.send() method to add some pagination logic to the response
    const _send = res.send;
    res.send = function (data) {
        // only do this if we use GET and the status code is 200, that is if the response is successful
        if (req.method === "GET" && res.statusCode === 200 && req.url.includes('products')) {
            try {
                // we use the JSON.parse() method to parse the data from the response
                const parsedData = JSON.parse(data);

                // we check if the parsed data is an array (to avoid pagination on non-array data)
                if (Array.isArray(parsedData)) {
                    const query = url.parse(req.url, true).query;
                    const totalCountHeader = this.getHeader("X-Total-Count");

                    // we use the parseInt() method to parse the total count header and add this, limit and page to the data
                    const total = totalCountHeader ? parseInt(totalCountHeader, 10) : parsedData.length;
                    const limit = query._limit ? parseInt(query._limit, 10) : 0;
                    const page = query._page ? parseInt(query._page, 10) : 1;

                    // total divided by the requested limit or 1
                    const pages = limit > 0 ? Math.ceil(total / limit) : 1;

                    // we use the JSON.stringify() method to convert the data to a string again and return it
                    data = JSON.stringify({
                        products: parsedData,
                        total,
                        limit,
                        page,
                        pages
                    });
                }
            } catch (e) {
                // fail silently = just ignore the whole thing and just return the original data
            }
        }

        _send.call(this, data);
    };

    next();
};