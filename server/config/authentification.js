
export const setGoogleAuthConfig = () =>  {

  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: "596443200401-gbfcu4m338a7jr9me3lp57tr4lra1dj6.apps.googleusercontent.com",
        secret:   "k-sdC14cjRoH8aQhn3nVJrUO"
      }
    }
  );

}

export const setFacebookAuthConfig = () =>  {

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId:  "527109410805279",
        secret: "5edadf9f160338d928444a6b5cac0993",
      }
    }
  );

}