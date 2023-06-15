/* eslint-disable*/
import { Log } from '@microsoft/sp-core-library';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseApplicationCustomizer, PlaceholderName,PlaceholderContent, ApplicationCustomizerContext, } from '@microsoft/sp-application-base';
import * as strings from 'NewHeaderApplicationCustomizerStrings';
import Headercomponent from './Components/Headercomponent';
import { SPFI } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/profiles";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { getSP } from './Components/pnpConfig';
import "@pnp/sp/navigation"
// import SpService from '../newsTicker/service/SpService';
const LOG_SOURCE: string = 'NewHeaderApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface INewHeaderApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  Top:string;
  Bottom:string;
  context:ApplicationCustomizerContext
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class NewHeaderApplicationCustomizer
  extends BaseApplicationCustomizer<INewHeaderApplicationCustomizerProperties> {
  [x: string]: any;
    private _topPlaceholder: PlaceholderContent | undefined;
    public userPicUrl:string;
    public userName:string;
    public headerGreeting:string;
    public qlItems = new Array
    // private _spService: SpService;
  public onInit(): Promise<void> {

//     this.footerPlaceholder
//      if (window.performance != undefined && window.performance != null) {
//        if (window.performance.mark != undefined && window.performance.mark != null) {
//          window.performance.mark('Method-Begin');
//        }
//      }


    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);


   // Added to handle possible changes on the existence of placeholders.  
   this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders); 
   this.context.application.navigatedEvent.add(this, this._renderPlaceHolders); 
  //  const sp:SPFI = getSP(this.context);
  //  this._spService = new SpService(sp);
   // Call render method for generating the HTML elements.  
 // var x=  this.getData();
 // console.log(x);
   this._renderPlaceHolders();  

    return Promise.resolve();
  }

  private async _renderPlaceHolders(): Promise<void> { 
    
    
    // if (window.performance != undefined && window.performance != null) {
    //          if (window.performance.mark != undefined && window.performance.mark != null) {
    //            window.performance.mark('Method-Start');
    //          }
    const _sp:SPFI = getSP(this.context);
  
   const  navItems =await  _sp.web.navigation.quicklaunch();
  

   navItems.map((y=>{
    this.qlItems.push({title:y.Title,url:y.Url});
    
    
  }))
  
      // console.log(this.qlItems);
   
    
  const user = (await _sp.web.currentUser()).Title
this.userName = user
// console.log(this.userName)
 const tenantUri = window.location.protocol + "//" + window.location.host;
//  console.log(tenantUri)

 this.userPicUrl = `${this.context.pageContext.web.absoluteUrl}${"/_layouts/15/userphoto.aspx?size=L&accountname="+this.context.pageContext.user.email+""}`
 
 const d = new Date()
 const hour = d.getHours()
 const greeting = hour>12?(hour>17?"Good Evening":"Good Afternoon"):"Good Morning"
 this.headerGreeting = greeting
//  console.log(this.headerGreeting);
    // console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');  
    // console.log('Available placeholders: ',  
    this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', ');  
    //  try{
    // Handling the top placeholder  
    if (!this._topPlaceholder) {  
      this._topPlaceholder =  
        this.context.placeholderProvider.tryCreateContent(  
          PlaceholderName.Top,  
          { onDispose: this._onDispose });  
      
      // The extension should not assume that the expected placeholder is available.  
      if (!this._topPlaceholder) {  
        console.error('The expected placeholder (Top) was not found.');  
        return;  
      }  
      
      if (this.properties) {  
        let topString: string = this.properties.Top;  
        if (!topString) {  
          topString = '(Top property was not defined.)';  
        }  
      
       
      
    }
    
  }
//   catch (ex) {
//        }
//        finally {
//          if (window.performance != undefined && window.performance != null) {
//            if (window.performance.mark != undefined && window.performance.mark != null) {
//              window.performance.mark('Method-End');
//            }
// }}
    const ele = React.createElement(Headercomponent,{user:this.userName,greet:this.headerGreeting,url:this.userPicUrl,uri:tenantUri,sitename:this.context.pageContext.web.title,items:this.qlItems,siteabsUrl:this.context.pageContext.web.absoluteUrl})
    ReactDOM.render(ele,this._topPlaceholder.domElement)
}
    
private _onDispose(): void {
  // console.log('[AlertApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
}  
  
}