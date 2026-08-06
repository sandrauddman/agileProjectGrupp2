import { Funnel } from "lucide-react";
import { Category } from "@/app/types";

export default function SearchForm() {


const exampleCategories : Category[] =[

{
  id: 1,
  name: "Shoes",
  slug: "shoes",
  image: "img",
} ,
{
  id: 2,
  name: "Sunglasses",
  slug: "sunglasses",
  image: "img",
} ,
{
  id: 3,
  name: "Watches",
  slug: "shoes",
  image: "img",
} ]   



  return ( <>
    <form action="submit" className="bg-white border-1 border-zinc-200 rounded-sm flex p-4 gap-4 m-10">
        <input type="text" name="search" id="search" placeholder="Search products..." className="border-1 border-zinc-200 rounded-sm p-2 grow-7"/>
        <select name="category" id="category" defaultValue={"0"} className="border-1 border-zinc-200 rounded-sm p-2 grow-2">
            <option value="0" disabled >All Categories</option>
             {exampleCategories.map((category)=>(
                <option value={category.id} key={category.id}>{category.name}</option>

            ) )}
            
        </select>
        <select name="stock" id="stock" defaultValue={"0"} className="border-1 border-zinc-200 rounded-sm p-2 grow-2" >
            <option value="0" disabled  >All Stock</option>
            <option value="2">In stock</option>
            <option value="3">Low stock</option>
            <option value="4">Out of Stock</option>
        </select>
        <button className="border-1 border-zinc-200 rounded-sm flex gap-2 p-2  justify-center"> <Funnel size={18} fill="black"/>Filter</button>
         


    </form>








  
  </>);
}