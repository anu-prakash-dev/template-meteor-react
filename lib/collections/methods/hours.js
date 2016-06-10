import {Hours} from '/lib/collections/hours.js';

// All Tasks collection related methods
Meteor.methods({

  addHours(morningstart, morningend, afternoonstart, afternoonend) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Hours.insert({
      morningstart:   morningstart,
      morningend:     morningend,
      afternoonstart: afternoonstart,
      afternoonend:   afternoonend,
      createdAt:      new Date(),
      private:        false,
      checked:        false,
      owner:          Meteor.userId(),
      username:       Meteor.user().username
    });
    console.log("c buen");
  },

  removeHours(hoursId) {
    const hours = Hours.findOne(hoursId);
    if (hours.private && hours.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Hours.remove(hoursId);
  },

  editHours(hoursId, morningstart, morningend, afternoonstart, afternoonend) {
    const hours = Hours.findOne(hoursId);

    // Make sure only the task owner can edit the text of a task
    if (hours.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(editName, String);

    Hours.update(hoursId, { $set: { morningstart: morningstart, morningend: morningend, afternoonstart: afternoonstart, afternoonend: afternoonend, } });
  },

});
