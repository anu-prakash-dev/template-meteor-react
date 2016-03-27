

import { Mongo } from 'meteor/mongo';


// Define a collection to hold tasks
const Tasks = new Mongo.Collection("tasks");

export default Tasks;
