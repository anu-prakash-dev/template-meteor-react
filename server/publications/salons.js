import { Meteor } from 'meteor/meteor';
import {Salons} from '/lib/collections/salons';


//Meteor.publish('tasks', () => Tasks.find());


// Only publish tasks that are public or belong to the current user
Meteor.publish("salons", function () {
  return Salons.find();
});