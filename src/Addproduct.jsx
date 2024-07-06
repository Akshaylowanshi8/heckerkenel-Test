import { useEffect, useState } from "react";

const Addproduct=()=>{

    const [prodata,setprodata]=useState({
        ProductName:"",
        Price:""
    })
    const [products, setProducts] = useState([]);

    const setvalue=(e)=>{
        const { name, value }=e.target;
            setprodata({
              ...prodata,
              [name]: value
            });
            // console.log(prodata)
        }

        console.log(products);


        const Adddata=(e)=>{
            e.preventDefault();
            const isDuplicate = products.some(product => product.ProductName === prodata.ProductName);
            if (isDuplicate) {
              alert('Product with this name already exists!');
              return;
            }
            const newProduct = {
                id: new Date().getTime(), 
                ...prodata
              };
              // Add new product to the products array
              const updatedProducts = [...products, newProduct];
              setProducts(updatedProducts);
              // Save products array to localStorage
              localStorage.setItem('products', JSON.stringify(updatedProducts));
      
              setprodata({
              ProductName:"",
              Price:""
            })

        }

        useEffect(() => {
            const storedProducts = localStorage.getItem('products');
            if (storedProducts) {
              setProducts(JSON.parse(storedProducts));
            }
          }, []);
return(<>

<div className="justify-center flex align-middle pt-10">
<form className="h-72 w-96 shadow p-11"  onSubmit={Adddata} >
    <div className="mb-4">
      <label class="block  text-sm font-bold mb-2" for="ProductName">
      ProductName
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required id="ProductName" type="text" placeholder="ProductName" name="ProductName" value={prodata.ProductName} onChange={setvalue}/>
    </div>
    <div class="mb-6">
      <label className="block text-black text-sm font-bold mb-2" for="Price">
      Price
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Price" type="text" placeholder="Price" name="Price" value={prodata.Price} onChange={setvalue}/>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit" >
        Add Product
      </button>
    </form>
    </div>

</>)

}

export default Addproduct;