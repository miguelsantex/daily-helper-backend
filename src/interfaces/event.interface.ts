import { Document, ObjectId } from 'mongoose'

export interface Event extends Document {
  name: string;
  date: Date;
  user_id: ObjectId;
  start_hours: string;
  end_hours: string;
  coments: string;
  created_at: Date;
}
