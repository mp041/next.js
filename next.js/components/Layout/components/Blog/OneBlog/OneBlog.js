import React from 'react'

export default function OneBlog({image,name,about}) {
  return (
    <>
    <div className="blog-box">
        <div className="blog-img">
            <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="blog-content">
            <div className="title-blog">
                <h3>{name}</h3>
                <p>{about}</p>
            </div>
            <ul className="option-blog">
                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart"></i></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye"></i></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments"></i></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}
