import {Employees} from '/lib/collections/employees.js';

// All Tasks collection related methods
Meteor.methods({

  addEmployee(name, salon) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }


    Employees.insert({
      name: name,
      salon: salon,
      createdAt: new Date(),
      private: false,
      checked: false,
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  removeEmployee(employeeId) {
    const employee = Employees.findOne(employeeId);
    if (employee.private && employee.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Employees.remove(employeeId);
  },

  editEmployee(employeeId, editText1) {
    const employee = Employees.findOne(employeeId);

    // Make sure only the task owner can edit the text of a task
    if (employee.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Employees.update(employeeId, { $set: { name: editText1 } });
  },

});
