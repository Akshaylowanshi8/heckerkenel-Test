import { useState } from "react";

  import axios from "axios";
import { useNavigate } from "react-router-dom";
  
  const Landingpage=()=>{

    const nav=useNavigate()
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
const setvalue=(e)=>{
const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value
    });
    console.log(formdata);
}
const Loginuser =async()=>{
    try {
        await axios.post("https://reqres.in/api/login",formdata)
        .then(res =>{
        console.log(res.data)
        let token=res.data.token
        localStorage.setItem('token', token)
        nav("home")
        formdata({
        email:"",
        password:""
        })

    }
    )
    }
     catch (error) {
        console.error(error);
        alert(error.response.data.error)
        return
    }
}

return(<>

<div className="flex h-96 justify-center items-center">
<div className="w-60 h-64 shadow-2xl p-5 ">
<form className="" >
    <div className="mb-4">
      <label class="block  text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required id="username" type="text" placeholder="email" name="email" value={formdata.email} onChange={setvalue}/>
    </div>
    <div class="mb-6">
      <label className="block text-black text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" name="password" value={formdata.password} onChange={setvalue}/>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit" onClick={Loginuser}  >
        Login
      </button>
    </form>
</div>

</div>

</>)
  }

  export default Landingpage;