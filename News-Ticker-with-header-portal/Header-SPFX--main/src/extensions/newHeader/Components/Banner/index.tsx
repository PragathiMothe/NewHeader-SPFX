import * as React from 'react'
import Marquee from 'react-fast-marquee'
import { ImageNames } from './helper'
import '../Headercomponent.scss'
const Banner = (props:any) => {
  return (
    <div
    className="Navbars"
    style={{
      backgroundImage: `url(${props.siteabsUrl}/SiteAssets/New%20Project.png)`,
    }}
  >
    <div className="profile">
      <img src={props.url} alt="Profilepic" />
      <div className="profiledetails">
        <p>{props.greet},</p>
        <p>{props.user}...</p>
      </div>
    </div>
    <div className="imgscroll">
      <Marquee>
        <div className="container">

          {ImageNames?.map((x:any)=>{
            return(
              <div className="img2">
                <img src={`${props.siteabsUrl}/SiteAssets/${x}`}/>
              </div>
            )
          })}
         </div>
      </Marquee>
    </div>

    <a href="https://zelarsoft.com/" target="_blank">
      {" "}
      <img
        className="img1"
        src={`${props.siteabsUrl}/SiteAssets/Zelarlogo.png`}
        alt="Logo"
      ></img>
    </a>
  </div>
  )
}

export default Banner;