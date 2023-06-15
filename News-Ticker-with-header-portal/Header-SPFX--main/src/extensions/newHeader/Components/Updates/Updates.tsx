import * as React from 'react'
import Marquee from 'react-fast-marquee'
// import { ImageNames } from './helper'
import '../Headercomponent.scss'
import { getSP } from '../pnpConfig'
import { SPFI } from '@pnp/sp'
import './Update.scss'
const Updates = (props:any) => {
    const [updates, setUpdates] = React.useState<any>()
    const getData=async ()=>{
        const sp:SPFI=getSP(props.context);
        const list = await sp.web.lists.getByTitle("HighlightNews").items.select()()
        // console.log(list);
        setUpdates(list)   
    }
    React.useEffect(()=>{
        getData().catch((e)=>{console.log("wy bro");})
    },[])
  return (
    <div>
    {/* <div className="profile">
      <img src={props.url} alt="Profilepic" />
      <div className="profiledetails">
        <p>{props.greet},</p>
        <p>{props.user}...</p>
      </div> */}
    {/* </div> */}
    <div className={props.sitename==="Zelardemo"?"updates-main-container":"hide-updates-main-container"}>
      <Marquee>
        <div className={"updates-main-container-news-container"}>

          {updates?.map((x:any)=>{
            return(
              <div className="updates-main">
                {/* <img src={`${props.siteabsUrl}/SiteAssets/${x.Content}`}/> */}
                <span className='updateContent'><p>{x.Content}</p></span>
              </div>
            )
          })}
         </div>
      </Marquee>
    </div>
  </div>
  )
}

export default Updates;