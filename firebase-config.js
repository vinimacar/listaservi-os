// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDv-6aazC2diSyhCOJiYUwN5NoZ67PsXUY",
  authDomain: "marcacao-coletas.firebaseapp.com",
  databaseURL: "https://marcacao-coletas-default-rtdb.firebaseio.com",
  projectId: "marcacao-coletas",
  storageBucket: "marcacao-coletas.firebasestorage.app",
  messagingSenderId: "546476889758",
  appId: "1:546476889758:web:f193b3125feeb5f4514d8f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
