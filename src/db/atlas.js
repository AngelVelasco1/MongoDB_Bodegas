import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config('../.');

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.tfk8jyc.mongodb.net/${process.env.ATLAS_DB}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    retryWrites: true // Enable Retryable Writes
};

export const getConx = async () => {
    try {
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } 
    catch (err) {
        return {
            status: 500,
            err: err
        }
    }
}

export const getCollection = async (collection) => {
    try {
        const db = await getConx();
        return db.collection(collection);
    } 
    catch(err) {
        return {
            status: 500,
            err: err
        }
    }
}