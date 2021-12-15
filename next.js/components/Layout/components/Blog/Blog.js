import React from 'react'
import OneBlog from '../Blog/OneBlog/OneBlog';

export default function Blog({oneBlog = []}) {
  return (
    <>
    <div className="latest-blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>latest blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                  {
                    oneBlog.map((detail,index) => (
                      <div className="col-md-6 col-lg-4 col-xl-4">
                      <OneBlog {...detail} />
                      </div>

                    ))

                  }


                
            </div>
        </div>
    </div>
    </>
  )
}
