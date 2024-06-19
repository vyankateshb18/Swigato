// import React,{useState,useRef,useEffect} from "react";
// import { useDispatchCart,useCart } from "./ContextReducer";
// export default function Card(props) {
 
//   const priceRef = useRef();
//   let data = useCart()
//   let dispatch = useDispatchCart();
//  let options = props.options;
//  let priceOptions = Object.keys(options)
//  const [qty,setQty] = useState(1);
//  const [size,setSize] = useState("");
//   const handleAddToCart = async()=>{
//     await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
//     console.log(data);
//   }
//   let finalPrice = qty*parseInt(options[size])
//   useEffect(()=>{
//     setSize(priceRef.current.value)
//   },[])
//   return (
//     <div>
//       <div>
//         <div
//           className="card mt-3"
//           style={{ width: "18rem", maxHeight: "360px" }}>
//           <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}}/>
//           <div className="card-body">
//             <h5 className="card-title">{props.foodItem.name}</h5>
//             <div className="container w-100">
//               <select className="m-2 h-100 bg-success" onChange={(e)=>setQty(e.target.value)}>
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   );
//                 })}
//               </select>
//               <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
//                 {priceOptions.map((data)=>{
//                   return <option key={data} value={data}>{data}</option> 
//                 })}
//               </select>
//               <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
//             </div>
//             <hr/>
//             <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import { useDispatchCart, useCart } from "./ContextReducer";

// export default function Card(props) {
//   const priceRef = useRef();
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");
//   const data = useCart();
//   const dispatch = useDispatchCart();
//   const options = props.options;
//   const priceOptions = Object.keys(options);
//   const [finalPrice, setFinalPrice] = useState(qty * parseInt(options[size]));

//   const handleAddToCart = async () => {
//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem.name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//     });
//     console.log(data);
//   };

//   useEffect(() => {
//     setSize(priceRef.current.value);
//     setFinalPrice(qty * parseInt(options[size]));
//   }, [qty, size, options]);

//   return (
//     <div className="container mt-3">
//       <div className="card shadow" style={{ maxWidth: "18rem" }}>
//         <img src={props.foodItem.img} className="card-img-top" alt="Food Item" style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
//         <div className="card-body">
//           <h5 className="card-title">{props.foodItem.name}</h5>
//           <div className="d-flex align-items-center justify-content-between mb-3">
//             <select className="form-select bg-success text-white" value={qty} onChange={(e) => setQty(parseInt(e.target.value))}>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select className="form-select bg-success text-white" ref={priceRef} value={size} onChange={(e) => setSize(e.target.value)}>
//               {priceOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//             <div className="fs-5">₹{finalPrice}/-</div>
//           </div>
//           <hr />
//           <button className="btn btn-success w-100" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const data = useCart();
  const dispatch = useDispatchCart();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [finalPrice, setFinalPrice] = useState(qty * parseInt(options[size]));

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  useEffect(() => {
    setSize(priceRef.current.value);
    setFinalPrice(qty * parseInt(options[size]));
  }, [qty, size, options]);

  return (
    <div className="container mt-3">
      <div className="card shadow border-0" style={{ maxWidth: "18rem", borderRadius: "15px", overflow: "hidden" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="Food Item" style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <select className="form-select bg-success text-white" value={qty} onChange={(e) => setQty(parseInt(e.target.value))}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="form-select bg-success text-white" ref={priceRef} value={size} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="fs-5 text-success">₹{finalPrice}/-</div>
          </div>
          <hr />
          <button className="btn btn-success w-100 py-2" onClick={handleAddToCart} style={{ borderRadius: "10px" }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
