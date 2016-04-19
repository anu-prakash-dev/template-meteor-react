
     
    


export const googleAuth = {
  
 getRedirectUrl : () =>  {
    const isLocalhost = ( Meteor.absoluteUrl() === 'http://localhost:3000/' );

    const redirectUrl = isLocalhost ? 'http://localhost:3000/_oauth/google' : 'http://www.madeinmoon.io/_oauth/google';

    return redirectUrl;
 }
  
}    

export const facebookAuth = {
  
 getRedirectUrl : () =>  {
    const isLocalhost = ( Meteor.absoluteUrl() === 'http://localhost:3000/' );

    const redirectUrl = isLocalhost ? 'http://localhost:3000/_oauth/facebook' : 'http://www.madeinmoon.io/_oauth/facebook';

    return redirectUrl;
 }
  
}