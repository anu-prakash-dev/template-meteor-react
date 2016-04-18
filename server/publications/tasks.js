import { Meteor } from 'meteor/meteor';
import {Tasks} from '/lib/collections/collections';


//Meteor.publish('tasks', () => Tasks.find());


// Only publish tasks that are public or belong to the current user
Meteor.publish("tasks", function () {
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});