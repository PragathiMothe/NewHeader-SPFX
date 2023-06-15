/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { navItems } from './helper';
import { AiOutlineSearch } from 'react-icons/ai';
import '../Headercomponent.scss'

interface MenuBarProps{
  siteabsUrl:any,
  sitename:any
  uri:any
  user:any
  url:any
  items:any
  greet:any
}
// const MenuBar =React.memo (props) => {
  const MenuBar: React.FC<MenuBarProps> = React.memo((props) => {

    // console.log(props.siteabsUrl);
    const url = props.siteabsUrl.split("/");
    const mainsite = url[4];
   
    // console.log(mainsite);
  

    const renderSwitch = (param: any) => {
        // console.log(param);
    
        switch (props.sitename) {
          case param.site:
            return param.realsitename === mainsite ? (
              // <a href= {`${props.uri}/sites/${param.realsitename}`} >
              <div
                className="navItemActive"
                
                onClick={() =>
                  window.open(`${props.uri}/sites/${param.realsitename}`, "_self")
                }
              >
                <a href= {`${props.uri}/sites/${param.realsitename}`} >{param.title}</a>
                
                {/* {param.title} */}
              </div>
              // </a>
            ) : (
              // <a href= {`${props.uri}/sites/${mainsite}/${param.realsitename}`} >
              <div
                className="navItemActive"
                onClick={() =>
                  window.open(
                    `${props.uri}/sites/${mainsite}/${param.realsitename}`,
                    "_self"
                  )
                }
              >
                {/* <a href= {`${props.uri}/sites/${mainsite}/${param.realsitename}`} >{param.title}</a> */}
                {param.title}
              </div>
              // </a>
            );
  
          default:
            return param.site === mainsite ? (
              // <a href={`${props.uri}/sites/${param.realsitename}`}>
                <div
                  className="navItem"
                  onClick={() =>
                    window.open(`${props.uri}/sites/${param.realsitename}`, "_self")
                  }
                >
                  {param.title}
                </div>
              /* </a> */
            ) : (
              <div>
              {/* <a href= {`${props.uri}/sites/${mainsite}/${param.realsitename}`}  > */}
              <div
                className="navItem"
                onClick={() =>
                  window.open(`${props.uri}/sites/${mainsite}/${param.realsitename}`, "_self")
                }
              >
                {param.title}
              </div>
              {/* </a> */}
              </div>
          );
        }
      };

  return (
    <div className="topnav">
        <ul>
          <li>
            <div className="navList">
              {navItems.map((x: any) => {
                return renderSwitch(x);
              })}
            </div>
          </li>
        </ul>
        <div className="searchBardiv">
          <form
            action={`/sites/${mainsite}/_layouts/search.aspx/All`}
            method="get"
          >
            <input type="text" placeholder="Search.." name="q" />
          </form>
          <button className="submitbtn" type="submit">
            <a target="_blank">
              <AiOutlineSearch size={15} />
            </a>
          </button>
        </div>
      </div>
  )
})

export default MenuBar