import mongoose, { Mongoose } from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  _id: String,
  username: String,
  email: String,
  role: String,
});

const Users = model('users', userSchema);

export default Users;
