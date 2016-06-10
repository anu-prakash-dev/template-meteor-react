import {Salons} from '/lib/collections/salons.js';

// All Tasks collection related methods
Meteor.methods({

  addSalon(name) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(name, String);

    Salons.insert({
      name: name,
      createdAt: new Date(),
      private: false,
      checked: false,
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  removeSalon(salonId) {
    const salon = Salons.findOne(salonId);
    if (salon.private && salon.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Salons.remove(salonId);
  },

  editSalon(salonId, editName) {
    const salon = Salons.findOne(salonId);

    // Make sure only the task owner can edit the text of a task
    if (salon.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(editName, String);

    Salons.update(salonId, { $set: { name: editName } });
  },

});
