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
        avatar:     profileGoogle.picture,
        first_name: profileGoogle.family_name,
        last_name:  profileGoogle.given_name,
        gender:     '',
        local:      '',
        age:        profileGoogle.age,
        city:       '',
        country:    '',
      };
      
    }
    
    
    else if (user.services.facebook != null){
      console.log('Accounts.onCreateUser: Facebook User'); 

      const profileFacebook = user.services.facebook;  
      
      const picture = "http://graph.facebook.com/" + profileFacebook.id + "/picture/?type=large";
      
      user.username = profileFacebook.name;
      user.service  = "facebook";
      user.emails = {
        0:{
          address:  profileFacebook.email,
          verified: true
        }
      };
      user.profile = { 
        avatar:     picture,
        last_name:  profileFacebook.last_name,
        first_name: profileFacebook.first_name,
        gender:     profileFacebook.gender,
        local:      '',
        age:        '',
        city:       '',
        country:    '',
      };
      
      
      
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
