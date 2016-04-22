import {Meteor} from 'meteor/meteor';



Meteor.users.allow({
  remove: function (userId, doc) {
    console.log("Account Deleted (userId:" + userId + ")");
    return true;
  }
});
  
//
//Meteor.methods({
//  changeProfilAvatar: (userId, avatarPath) => {
//    Meteor.users.update(
//      userId,
//      {$set: 
//        { "profile.avatar": avatarPath }
//      }, 
//      null,
//      null
//    ); 
//  }
//});

export const changeProfilAvatar = (userId, avatarPath) => {
    Meteor.users.update(
      userId,
      {$set: 
        { "profile.avatar": avatarPath }
      }, 
      null,
      null
    ); 
  }
  