# Inventory Management

Group 2 project for the Agile Methods course. A Next.js inventory catalogue where you can browse, search, filter, add, edit, and delete products against a mocked REST API.

## Features

- Product catalogue with pagination
- Search plus filters for category and stock (in stock, low stock, out of stock)
- Add / edit product in a modal (info, pricing, media)
- Delete product
- Inventory statistic cards
- Loading spinner, custom 404, and custom error pages
- Zod validation; form values are kept after a failed submit
- Toast notifications (Sonner)

## Tech stack

| Layer | Tool |
| --- | --- |
| App | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, lucide-react |
| Validation | Zod |
| Mock API | json-server 0.17 on port 4000 |
| Tooling | ESLint, Prettier |

## Getting started

Requires **Node.js** (current LTS is fine).

```bash
npm install
npm run dev:full
```

Then open:

- App: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:4000](http://localhost:4000)

`dev:full` starts Next.js and json-server together. To run them separately:

```bash
npm run dev          # Next.js only (port 3000)
npm run mock-server  # json-server only (port 4000)
```

If the UI loads but products are empty, the mock server is not running.

```bash
npm run lint
npm run build
```

## Project structure

```
app/            Pages, layout, loading, error, 404, types
actions/        Server actions (create, update, delete)
components/     UI (header, list, modal, forms, search, stats)
services/       Fetch layer for products and categories
schemas/        Zod validation
server/         json-server data + middleware
utils/          Shared helpers (error responses)
```

Product data lives in `server/products.json` (based on [dummyjson](https://dummyjson.com/docs/products), adapted for this app). Custom behaviour is in `server/middleware.js`.

## Git workflow

`dev` is protected: **do not push to `dev`**. Work on a feature branch and open a pull request **into `dev`**.

```bash
git checkout dev
git pull origin dev
git checkout -b feat-short-description
# ...commit...
git push -u origin feat-short-description
```

On GitHub: **New pull request** → base **`dev`** → compare your branch.

Commit style used in this repo:

```
feat: add custom error, 404, and global error pages
fix: preserve product form values on validation failure
```

## Definition of done

- Feature tested by 2 people on the PR branch
- Acceptance criteria met
- Code is finished and readable
- TypeScript compiles with no errors
- ESLint has no relevant errors
- Works with the rest of the app
- Merged into the shared `dev` branch
- No known serious bugs
- GitHub issue updated

## Mock API (port 4000)

### Resources

- `GET /products` — all products
- `GET /products/:id` — one product
- `GET /categories` — all categories
- `GET /categories/:id` — one category
- `GET /categories?slug=:slug` — category by slug
- `POST /products` — create
- `PATCH /products/:id` — update
- `DELETE /products/:id` — delete

**Create required fields:** `title`, `price`, `description`, `thumbnail`, `categoryId`, `brand`

**Auto-generated:** `id`, `sku` (`CAT-BRA-TIT-ID`), `meta` timestamps

### Pagination, sort, filter

```
GET /products?_page=1&_limit=10
GET /products?_sort=price&_order=asc
GET /products?price_gte=10&price_lte=50
GET /products?q=mascara
```

Middleware adds `X-Total-Count` and wraps list responses with `total`, `limit`, `page`, and `pages`. See [json-server 0.17.4](https://github.com/typicode/json-server/tree/v0.17.4).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev:full` | Next.js + json-server |
| `npm run dev` | Next.js only |
| `npm run mock-server` | json-server only |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Course notes

This is course start code (`projekt-agila-metoder-startkod`) extended by the group. Sprint notes live in `GroupRetrospective.md`.
