
export const setGoogleAuthConfig = () =>  {

  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: "",
        secret:   ""
      }
    }
  );

}

export const setFacebookAuthConfig = () =>  {

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId:  "",
        secret: "",
      }
    }
  );

}