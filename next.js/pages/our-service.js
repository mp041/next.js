import React from 'react'
import dynamic from 'next/dynamic'

const OurTeam = dynamic(() => import('../components/Layout/components/OurTeam/OurTeam.container'),{ loading: () => <p>...</p>,ssr: false })


export default function OurService() {
  return (
    <>
  {  <div className="all-title-box">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h2>Services</h2>
                  <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Services</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
}{
  <div className="services-box-main">
        <div className="container">
            <div className="row my-5">
                <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                        <h3>OUR MISSION</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                        <h3>OUR VISION</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                        <h3>OUR PHILOSOPHY</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                        <h3>We are Trusted</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                        <h3>We are Professional</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                        <h3>OUR STORIES</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                
                <OurTeam />

            </div>

        </div>
    </div>
}


    </>
  )
}
