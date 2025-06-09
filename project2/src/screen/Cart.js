import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../component/ContextReducer';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index: index });
  };

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/orderData`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  if (data.length === 0) {
    return (
      <div className='m-5 w-100 text-center fs-3'>
        The Cart is Empty!
      </div>
    );
  }
 

  return (
    <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
      <table className='table table-hover'>
        <thead className='text-success fs-4'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Option</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>₹{food.price}</td>
              <td>
                <button type="button" className="btn p-0">
                  <DeleteIcon
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleRemove(index)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div><h1 className='fs-2'>Total Price: ₹{totalPrice}/-</h1></div>
      <div>
        <button className='btn bg-success mt-3' onClick={handleCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
}

