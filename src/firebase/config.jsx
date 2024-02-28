import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQVcyhLRMMlgkSCMRjJOKWOATcHYsgeUQ",
  authDomain: "blog-d2cc0.firebaseapp.com",
  projectId: "blog-d2cc0",
  storageBucket: "blog-d2cc0.appspot.com",
  messagingSenderId: "689477733213",
  appId: "1:689477733213:web:13b27201234be78f41f6b4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
