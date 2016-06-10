import { Meteor } from 'meteor/meteor';
import {Employees} from '/lib/collections/employees';


//Meteor.publish('tasks', () => Tasks.find());


// Only publish tasks that are public or belong to the current user
Meteor.publish("employees", function () {
  return Employees.find();
});