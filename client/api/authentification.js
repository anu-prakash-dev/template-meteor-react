
     
    


export const googleAuth = {
  
 getRedirectUrl : () =>  {
    const isLocalhost = ( Meteor.absoluteUrl() === 'http://localhost:3000/' );

    const redirectUrl = isLocalhost ? 'http://localhost:3000/_oauth/google' : 'http://template-meteor-react.meteorapp.com/_oauth/google';

    return redirectUrl;
 }
  
}