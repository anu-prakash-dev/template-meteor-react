import { Accounts } from 'meteor/accounts-base';


export const onCreateUser = () => {
  
  Accounts.onCreateUser(function(options, user) {

    if (user.services.google != null){

      console.log('Accounts.onCreateUser: Google User'); 

      const profileGoogle = user.services.google;  

      user.username = profileGoogle.given_name;
      user.service  = "google";
      user.emails = {
        0:{
          address:  profileGoogle.email,
          verified: profileGoogle.verified_email
        }
      };
      user.profile = { 
        avatar:       profileGoogle.picture,
        name:         profileGoogle.name,
        gender: '',
        age:    profileGoogle.age,
        city:   '',
        country: '' 
      };
    }
    else if (user.services.facebook != null){
      user.service  = "facebook";
      console.log('Accounts.onCreateUser: Facebook User TODO'); 
    }
    else{
      console.log('Accounts.onCreateUser: Intern User');    
      if (options.profile){
        user.service  = "intern";
        user.profile = options.profile;
      }
    }

    //  console.log(options);
    //  console.log(user);
    
    return user;
  });

  
}
