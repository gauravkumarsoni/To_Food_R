import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel " style={{objectFit:"contain !important"}}>
                    <div className="carousel-inner " id='carousal'>
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div class="form-inline justify-content-center ">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success  bg-info my-2 my-sm-0" type="submit">Search</button>
                            </div>

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
        </div>
    )
}
