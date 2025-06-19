import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import '../App.css';



export default function Card1(props) {
  let dispatch = useDispatchCart();
  let datas = useCart()
  let options = props.options;
  let PriceOption = Object.keys(options);
  const priceRef = useRef();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const handleAddToCart = async () => {
    let food = []
    for (const item of datas) {
      if (item.id === props.foodItem._id) {
        food = item;
        //  alert("Add to cart successful");
        break;
      }
    }
    alert("Add to cart successful");
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {

        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
        return
      }
      return
    }
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
    // console.log("Cart updated:", datas);
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])



  return (
    <div className="flex-body container">
      <div className="card mt-3" style={{ width: "18.5rem", maxHeight: "4000px" }}>
        <img className="card-img-top img-fluid" src={props.foodItem.img} style={{ height: "150px", objectFit: "fill" }} alt="Nature" />
        <div className="card-body">
          <h5 className='card-title'>{props.foodItem.name} </h5>
          {/* <p className="card-text">This is </p> */}
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" onChange={(e) => { setQty(e.target.value) }}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}> {i + 1}</option>
              ))}
            </select>
            <select className={"m-2 h-100 bg-success rounded"} ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
              {PriceOption.map((data) => {
                return <option key={data} value={data}> {data} </option>
              })}

            </select>
            <div className="fs-8 m-2 d-inline">
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className='btn btn-success justify-center ms-2 ' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}






