import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config('../.');

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.tfk8jyc.mongodb.net/${process.env.ATLAS_DB}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    retryWrites: true // Enable Retryable Writes
};
const client = await MongoClient.connect(uri, options);

export const getConx = async () => {
    try {
        return client.db();
    } 
    catch (err) {
        return {
            status: 500,
            err: err
        }
    }
}

export const endConx = async () => {
    await client.close();
    console.log('Connection closed');
}