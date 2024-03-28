import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.FIREBASE_KEY);

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: 'facebook-3rd-party.firebaseapp.com',
    projectId: 'facebook-3rd-party',
    storageBucket: 'facebook-3rd-party.appspot.com',
    messagingSenderId: '843188946046',
    appId: '1:843188946046:web:6cc78f31c71139ac7ec42f',
};

initializeApp(firebaseConfig);
export const auth = getAuth();