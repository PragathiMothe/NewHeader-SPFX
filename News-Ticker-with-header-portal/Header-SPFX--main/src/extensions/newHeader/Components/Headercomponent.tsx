


// import React, { Suspense } from 'react'
import React from 'react'
import Banner from './Banner'
import MenuBar from './NavBar'
// import News from './News'
// import News from './News'
import Updates from './Updates/Updates'
// const MenuBar = React.lazy(()=>import ('./NavBar'))
//import News from './News'
// const Banner = React.lazy(()=>import ('./Banner'))
// const News = React.lazy(()=>import ('./News'))
const Headercomponent = (props:any) => {

  return (
    <>
    <div>
   
      <Banner user={props.user}
      greet={props.greet}
      url={props.url}
      uri={props.uri}
      sitename={props.sitename}
      items={props.items}
      siteabsUrl={props.siteabsUrl}/>
      <MenuBar user={props.user}
      greet={props.greet}
      url={props.url}
      uri={props.uri}
      sitename={props.sitename}
      items={props.items}
      siteabsUrl={props.siteabsUrl}/>
       {/* <News/>  */}
       
     <Updates
      sitename={props.sitename}
     
     />
      
    </div>
    </>
    
  )
  
}


export default Headercomponent

