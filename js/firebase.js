import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYU0vTlCI0ae8yIQ15oB5H6AhU1fOCg2I",
  authDomain: "ev-brasil.firebaseapp.com",
  projectId: "ev-brasil",
  storageBucket: "ev-brasil.firebasestorage.app",
  messagingSenderId: "226427228620",
  appId: "1:226427228620:web:bb806815a64db697670d69",
  measurementId: "G-WSDD2PT4KV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);