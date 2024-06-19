import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { BASE_URL } from './helperUrl'


export default function Signup() {
  let navigate  = useNavigate()
    const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

    //     //e->parameter where submit is handled
    const handleSubmit= async(e)=>{
      
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/api/createuser`,{
          mode: 'no-cors',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        });
        const j = await response.json()
        console.log(j);
        if(!j.success){
          alert("Enter Valid Credentials")
          console.log(j);
        }
        navigate("/login")
    }
    const onChange = (events)=>{
        setcredentials({...credentials,[events.target.name]:events.target.value})
    }

  return (
//     <>
//     <div className='container'>
//         <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//   <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
//   </div>
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="geolocation" className="form-label">Address</label>
//     <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
//   </div>
//   <button type="submit" className="m-3 btn btn-primary" onClick={handleSubmit}>Submit</button>
//   <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
// </form>
// </div>
//     </>
//   )
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#999999' }}>
<div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Signup</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label" style={{ color: '#000', fontWeight: 'bold' }}>Name</label>
      <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} style={{ borderColor: '#ced4da' }}  />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: '#000', fontWeight: 'bold' }}>Email address</label>
      <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} style={{ borderColor: '#ced4da' }} />
      {/* <div id="emailHelp" className="form-text" style={{ color: '#6c757d' }}>We'll never share your email with anyone else.</div> */}
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#000', fontWeight: 'bold' }}>Password</label>
      <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange} style={{ borderColor: '#ced4da' }} />
    </div>
    <div className="mb-3">
      <label htmlFor="geolocation" className="form-label" style={{ color: '#000', fontWeight: 'bold' }}>Address</label>
      <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} style={{ borderColor: '#ced4da' }} />
    </div>
    <button type="submit" className="m-3 btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Submit</button>
    <Link to="/login" className='m-3 btn btn-danger' style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>Already a User</Link>
  </form>
</div>
</div>
);
}
