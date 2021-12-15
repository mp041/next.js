import React from 'react'

export default function OneProduct({images,intro,price}) {
  return (
    <>
    <div className="products-single fix">

        <div className="box-img-hover">
            <div className="type-lb">
                <p className="sale">Sale</p>
            </div>
            <img src={images} className="img-fluid" alt="Image" />
            <div className="mask-icon">
                <ul>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                </ul>
                <a className="cart" href="#">Add to Cart</a>
            </div>
        </div>
        <div className="why-text">
            <h4>{intro}</h4>
            <h5> {price} </h5>
        </div>
        </div>
      
      </>
  )
}
