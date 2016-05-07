/*  Consoles
    google   : https://console.developers.google.com/apis/credentials/oauthclient/[....]
    facebook : https://developers.facebook.com/sa/apps/[...id...]/settings/
*/     
    


export const googleAuth = {
  
 getRedirectUrl : () =>  {
    const isDev  = ( Meteor.absoluteUrl() === 'http://localhost:3000/' );

    const urlDev  = 'http://localhost:3000/_oauth/google';
    const urlProd = 'http://meteor-react-template-app.madeinmoon.io/account/_oauth/google?close';
     
    const redirectUrl = isDev ? urlDev : urlProd;
    return redirectUrl;
 }
  
}    

export const facebookAuth = {
  
 getRedirectUrl : () =>  {
    const isDev  = ( Meteor.absoluteUrl() === 'http://localhost:3000/' );

    const urlDev  = 'http://localhost:3000/_oauth/facebook';
    const urlProd = 'http://meteor-react-template-app.madeinmoon.io/account/_oauth/facebook?close';
     
    const redirectUrl = isDev ? urlDev : urlProd;
    return redirectUrl;
 }
  
}