

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