'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
const page = () => {
  const route = useRouter()
  const [fromValues, setFromValues] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setFromValues({...fromValues , [e.target.name]:e.target.value})
  }

  const onSubmit= async (e)=>{
    e.preventDefault()
    console.log(fromValues)
    const config = {
      method : "POST" , 
      body : JSON.stringify(fromValues)
    }
    const response = await fetch('/api/login' , config)
    const json= await response.json()
    if(json['status']===true){
      route.replace('/dashboard')

    }else{
      alert(json['msg'])
    }

  }
  return (
    <div className="m-10">

      <h1>login</h1>

      <form onSubmit={onSubmit} >
        <input onChange={handleChange } name="email" value={ fromValues.email } placeholder="email" />
        <br></br>
        <input onChange={ handleChange } name="password" value={fromValues.password} placeholder="password" />
        <br></br>
        <button type="submit">Login</button>
      </form>

    </div>

  )
}


export default page 