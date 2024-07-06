import { useEffect, useState } from "react";


const Search =()=>{

    const[val ,setval] = useState("")
    const[valdata ,setvaldata] = useState([])

    const [myallproducts, setmyallProducts] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          setmyallProducts(JSON.parse(storedProducts));
        }
      }, []);
// console.log(myallproducts);

    const finddata=(e)=>{
      e.preventDefault();
         const filteredProducts = myallproducts.filter(product =>
            product.ProductName.toLowerCase().includes(val.toLowerCase())
          );
          setvaldata(filteredProducts)
    }



      const data = valdata.map((key,i) => {
        return(<>
   <tr className="p-2 border-2  hover:bg-slate-200">
   <td className="p-2 ">{i+1}</td>
   <td className="p-2 ">{key.ProductName}</td>
   <td className="p-2" >{key.Price}</td></tr>
        </>)
   
   
         })
return(<>
<form className="" onSubmit={finddata}>
<div className="flex text-center justify-center  mt-10">
<h1 className="w-80" >Search Product by Name <input  onChange={(event) => setval(event.target.value)} className="shadow appearance-none border rounded w-full py-2 m-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded " type="submit">Search</button></h1>
</div>
</form>


<div className="text-center flex justify-center mt-2  w-auto">

{data.length>0?(
  
<>

<table className="text-center p-28  border-black ">
<tr className="p-2  border-2 hover:bg-slate-200">
<th className="p-4">
  S.No
</th>
<th className="p-4">
    ProductName
</th>
<th className="p-4">
    ProductPrice
</th>
</tr>
{data}
</table>

</>

  
):(<h1 className="text-red-600 p-4 text-xl ">"No Product found"</h1>)}
</div>
</>)


}


export default Search;
