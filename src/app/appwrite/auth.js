import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6549929990cc63f2c33d'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
