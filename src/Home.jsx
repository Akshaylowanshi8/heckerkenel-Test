import { Link, Outlet, useNavigate } from "react-router-dom"

const Home=()=>{


    let nav=useNavigate()

    const Logout=()=>{
        
        nav("/")
    }
return(
    <>
<div className="justify-center flex  shadow-sm  gap-8 text-center text-xl mt-3 ">
    <ul className="flex gap-8 mt-5">
    <li className=""> <Link to="DisplayProduct" >Display Product</Link></li>
    <li className=""> <Link to="addproduct"> Addproduct</Link></li>
    <li className=""> <Link to="search">  Search</Link></li>
    </ul>
    <button className="bg-blue-500 hover:bg-blue-900  text-white font-bold py-2 px-5 m-3 rounded "  onClick={Logout}>Logout </button>
    </div>



    <div className=""><Outlet /></div>
    
    </>
)
}

export default Home;