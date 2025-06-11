import React, { useState, useEffect } from 'react';
import Navbar1 from '../component/Navbar1'
import Footer from '../component/Footer'

export default function MyOrder() {
       const BACKEND_URL = process.env.REACT_APP_URL;
    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        try {
            const response = await fetch(`${BACKEND_URL}/myorderData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setorderData(data);
        } catch (error) {
            console.error("Error fetching order data:", error);
        }


        


    };

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar1 />
            </div>


            <div className='container'>
                <div className='row'>
                    {orderData && orderData.orderData && orderData.orderData.order_data
                        ? orderData.orderData.order_data
                            .slice(0)
                            .reverse()
                            .map((itemArray, index) => (
                                <div key={index}>
                                    {itemArray.map((arrayData, i) => (
                                        arrayData.order_date ? (
                                            <div className='m-auto mt-5' key={i}>
                                                <strong>{arrayData.order_date}</strong>
                                                <hr />
                                            </div>
                                        ) :

                                           ( <div className='col-12 col-md-6 col-lg-3' >
                                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                    <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{arrayData.name}</h5>
                                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                            <span className='m-1'>{arrayData.qty}</span>
                                                            <span className='m-1'>{arrayData.size}</span>
                                                            {/* <span className='m-1'>{data1}</span> */}
                                                            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                ₹{arrayData.price}/-
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                           )

                                    ))}
                                </div>
                            ))
                        : <div className="text-center">No orders found or still loading...</div>}
                </div>
            </div>

            <Footer />
        </div>
    );
}

