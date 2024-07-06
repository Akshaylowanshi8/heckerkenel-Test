import { useEffect, useState } from "react";

const DisplayProduct=()=>{
    const [myproducts, setmyProducts] = useState([]);
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          setmyProducts(JSON.parse(storedProducts));
        }
      }, []);

     let data = myproducts.map((key,i) => {
     return(<>
<tr className="p-3 border-2  hover:bg-slate-200">
<td className="p-3  border-2 ">{i+1}</td>
<td className="p-3   border-2">{key.ProductName}</td>
<td className="p-3  border-2" >{key.Price}</td></tr>
     </>)
     
      })


return(<>
<div className="flex flex-col justify-center h-auto mt-10 m-9 ">
<table className="text-center   border-black w-auto h-auto">
<tr className="p-2  border-2 hover:bg-slate-200">
<th className="p-4 border-2" >
  S.No
</th>
<th className="p-4  border-2">
    ProductName
</th>
<th className="p-4  border-2">
    ProductPrice
</th>
</tr>
{data}
</table>
</div>
</>)
}

export default DisplayProduct;