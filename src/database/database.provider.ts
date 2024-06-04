import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://luan_lopes:46693445l@cluster0.pcg4f.mongodb.net/'),
  },
];
