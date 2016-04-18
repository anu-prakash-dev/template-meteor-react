

Meteor.users.allow({
  remove: function (userId, doc) {
    console.log("Account Deleted (userId:" + userId + ")");
    return true;
  }
});
  