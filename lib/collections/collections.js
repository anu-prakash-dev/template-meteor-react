import { Mongo } from 'meteor/mongo';


// Define a collection to hold tasks
export const Tasks = new Mongo.Collection("tasks");

