/*  Consoles
    google   : https://console.developers.google.com/apis/credentials/oauthclient/[....]
    facebook : https://developers.facebook.com/sa/apps/[...id...]/settings/
*/     
    


export const setGoogleAuthConfig = () =>  {

  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: "your_key",
        secret:   "your_secret"
      }
    }
  );

}

export const setFacebookAuthConfig = () =>  {

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId:  "your_key",
        secret: "your_secret",
      }
    }
  );

}