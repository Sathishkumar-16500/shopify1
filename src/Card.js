import React from 'react'

function Card(props) {
    console.log(props)
  return <>
    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem","right":"0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{props.data.itemName}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through"></span>
                                    {props.data.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            {
                              props.toggle?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  <a className="btn btn-outline-dark mt-auto" href="#!"onClick={()=>{
                                  props.setCart((prev)=>prev-1)
                                  props.setToggle(prev=>!prev)}}>Remove</a></div>
                              </div>:
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center">
                                <a className="btn btn-outline-dark mt-auto" href="#!"onClick={()=>{
                                  props.setCart((prev)=>prev+1)
                                  props.setToggle(prev=>!prev)}}>Add to cart</a>
                              </div>
                            </div>
                            }
                        </div>
                    </div>
  </>
}

export default Card