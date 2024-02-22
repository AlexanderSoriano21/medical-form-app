import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-T2z1q3vxFbirNhZVEmxALKAKFLJT1Po",
    authDomain: "medical-form-19f63.firebaseapp.com",
    projectId: "medical-form-19f63",
    storageBucket: "medical-form-19f63.appspot.com",
    messagingSenderId: "663775344923",
    appId: "1:663775344923:web:ae135d2273e6a0b75f3bbe",
    measurementId: "G-JD9Z72J8M1"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);