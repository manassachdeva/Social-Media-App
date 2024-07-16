import React from 'react'
import "./topbar.css"
import {Notifications, Search} from "@mui/icons-material"
import {Person,Chat} from "@mui/icons-material"
const Topbar = () => {
  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
        <span className="logo">Socail</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
        <Search className='searchicon'/>
        <input placeholder="Search for friend,post or video " className="searchinput" />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <Person/>
            <span className="topbariconbadge">2</span>
          </div>
          <div className="topbariconitem">
            <Chat/>
            <span className="topbariconbadge">3</span>
          </div>
          <div className="topbariconitem">
            <Notifications/>
            <span className="topbariconbadge">5</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
      </div>
    </div>
  )
}
export default Topbar
