import { Client, Databases } from 'appwrite';

export const PROJECT_ID = '6554dbf65c1b2983af87'
export const DATABASE_ID = '6554dd2d71c9af211ede'
export const COLLECTION_ID_MESSAGES = '6554dd433da6b09535a1'


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6554dbf65c1b2983af87');

    export const databases = new Databases(client)
  
    export default client;