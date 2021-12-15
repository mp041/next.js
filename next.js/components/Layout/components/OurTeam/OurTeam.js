import React from "react"
import TeamMember from '../OurTeam/components/TeamMember/TeamMember'
//
// const teamMembers = [{
//    name : "john patel",
//    designation : "Manager",
//    image : "images/img-1.jpg",
//    about : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
// },
// {
//    name : "Kristiana",
//    designation : "Web Developer",
//    image : "images/img-2.jpg",
//    about : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
// },{
//    name : "Steve Thomas",
//    designation : "Web Developer",
//    image : "images/img-3.jpg",
//    about : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
// },{
//    name : "Williamson",
//    designation : "Web Developer",
//    image : "images/img-1.jpg",
//    about : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
// },
//
// ]



export default function OurTeam({teamMembers = []}) {


  return (
    <>
      <div className="row my-4">
        <div className="col-12">
          <h2 className="noo-sh-title">Meet Our Team</h2>
        </div>
        {
          teamMembers.map((detail,index) => (
            <div className="col-sm-6 col-lg-3">
            <TeamMember {...detail} />
            </div>

          ))
        }



      </div>
    </>
  );
}
