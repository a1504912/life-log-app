// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDkvjWPmnOfEHwKvk8rODVoNGy1LFnFJXc",
    authDomain: "life-log-app-6f4df.firebaseapp.com",
    projectId: "life-log-app-6f4df",
    storageBucket: "life-log-app-6f4df.firebasestorage.app",
    messagingSenderId: "644178890808",
    appId: "1:644178890808:web:b6b5bc2255b75af00cd6cd"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
