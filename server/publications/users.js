import {Meteor} from 'meteor/meteor';



// Publish fields not shared by default (=>Meteor.subscribe() in client/app/App.jsx)
Meteor.publish("Meteor.users.initials", function () {
  if (this.userId) {
    
    return Meteor.users.find(
      {_id: this.userId},
      {fields: 
       {
         'username': 1,        
         'profile': 1,
         'emails': 1,
         'service': 1
       }
      }
    );
  } 
  else {
    this.ready();
  }
});

/*
// Publish google profil info 
Meteor.publish("Meteor.users.initials", function () {
  if (this.userId) {
    
    return Meteor.users.find(
      {_id: this.userId},
      {fields: 
       {
         'profile': 1,                      // Just contains the field 'name' 
         'services.google.given_name': 1,
         'services.google.email': 1,
         'services.google.verified_email': 1,
         'services.google.name': 1,
         'services.google.family_name': 1,
         'services.google.picture': 1,
         'services.google.gender': 1,
         'services.google.locale': 1
       }
      }
    );
  } 
  else {
    this.ready();
  }
});

*/