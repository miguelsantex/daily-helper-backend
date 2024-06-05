import *as mongoose from 'mongoose'

export const EventSchema = new mongoose.Schema({
  name: String,
  coments: String,
  user_id: mongoose.Types.ObjectId,
  start_hours: String,
  created_at: Date,
  end_hours: String,
  date: Date,
});
