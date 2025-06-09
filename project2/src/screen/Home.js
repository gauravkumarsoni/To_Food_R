import React, { useEffect, useState } from 'react'
import Navbar1 from '../component/Navbar1'
import Footer from '../component/Footer'
import Card1 from '../component/Card1'




export default function Home() {
  const [search, setsearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])







  return (
    <div>
      <div>
        <Navbar1 />
      </div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel " style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner " id='carousal'>
            <div className='carousel-caption' style={{ zIndex: "10" }}>
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) =>{setsearch(e.target.value)}} />
                {/* <button class="btn btn-outline-success  bg-info my-2 my-sm-0" type="submit">Search</button> */}
              </form>

            </div>
            <div className="carousel-item active ">
              <img src="https://t4.ftcdn.net/jpg/04/36/36/55/240_F_436365522_DIAObZGkRo3yoRCKcRGsf2Wf43kJn3iq.jpg" className="d-block w-100" alt="..2" />
            </div>
            <div className="carousel-item">
              <img src="https://as2.ftcdn.net/jpg/10/76/33/75/1000_F_1076337504_NNcAHDbQAm0Qn9Yl5AP1z3ynlGKsRdnM.jpg" className="d-block w-100" alt="." />
            </div>
            <div className="carousel-item">
              <img src="https://t3.ftcdn.net/jpg/06/08/84/24/240_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg" className="d-block w-100" alt="404" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className='container'>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className=" fs-3 m-3" > {data.CategoryName} </div>
                <hr />
                {foodItem !== [] ?
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map(filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 '>
                        {/* <Card1 foodName = {filterItems.name} */}
                        <Card1 foodItem = {filterItems}
                          options={filterItems.options[0]}
                          // imgSrc = {filterItems.img}
                        ></Card1>
                      </div>
                    )

                  }) : <div>no data find </div>}
              </div>
              )
            }) : <div>"""""""</div>
        }

      </div>


      <div>
        <Footer />
      </div>
    </div>


  )
}
