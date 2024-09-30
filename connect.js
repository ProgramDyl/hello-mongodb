import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MONGOdb'))
.catch(err => console.error('Could not connected to MONGOdb', err));
