import React from 'react'
import OneProduct from '../FeatureProducts/OneProduct.js/OneProduct'


export default function FeatureProdct({oneProduct = []}) {
  return (
    <>
    <div className="products-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>Featured Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="special-menu text-center">
                        <div className="button-group filter-button-group">
                            <button className="active" data-filter="*">All</button>
                            <button data-filter=".top-featured">Top featured</button>
                            <button data-filter=".best-seller">Best seller</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row special-list">


                  {
                    oneProduct.map((detail,index) => (
                      <div className="col-lg-3 col-md-6 special-grid best-seller">
                      <OneProduct {...detail} />
                      </div>
                      
                    ))
                  }

            </div>
        </div>
    </div>
    </>
  )
}
