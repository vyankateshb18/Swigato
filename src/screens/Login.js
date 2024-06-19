import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { BASE_URL } from './helperUrl'

export default function Login() {
  const [credentials,setcredentials] = useState({email:"",password:""})
  let navigate  = useNavigate()
//     //e->parameter where submit is handled
const handleSubmit= async(e)=>{
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/loginuser`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const j = await response.json()
    console.log(j);
    if(!j.success){
      alert("Enter Valid Credentials")
      console.log(j);
    }
    if(j.success){
      
      localStorage.setItem("authToken",j.authToken)
      localStorage.setItem("userEmail",credentials.email)
      console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
}
const onChange = (events)=>{
    setcredentials({...credentials,[events.target.name]:events.target.value})
}
  return (
//     <div>
//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange}/>
//   </div>
//   <button type="submit" className="m-3 btn btn-primary">Submit</button>
//   <Link to="/createuser" className='m-3 btn btn-danger'>I'm a New User</Link>
// </form>
// </div>
//     </div>
//   )
// {
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#00000' }}>
<div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Login</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label"  backgroundColor='#6c757d' style={{ color: '#000', fontWeight: 'bold' }}>Email address </label >
      <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} style={{ borderColor: '#ced4da' }} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#000', fontWeight: 'bold' }}>Password</label>
      <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange} style={{ borderColor: '#ced4da' }} />
    </div>
    <button type="submit" className="m-3 btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Submit</button>
    <Link to="/createuser" className='m-3 btn btn-danger' style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>I'm a New User</Link>
  </form>
</div>
</div>
); }

