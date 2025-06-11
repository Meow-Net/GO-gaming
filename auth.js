
// auth.js

const firebaseConfig = {
  apiKey: "AIzaSyDG3-vYzlsJG0VpiuL_23G2oVP2KrhZJK8",
  authDomain: "nfc21-2d640.firebaseapp.com",
  databaseURL: "https://nfc21-2d640-default-rtdb.firebaseio.com",
  projectId: "nfc21-2d640",
  storageBucket: "nfc21-2d640.appspot.com",
  messagingSenderId: "745081189931",
  appId: "1:745081189931:web:68e8e7304f427cf8049c6e",
  measurementId: "G-1XE253J08V"
};

firebase.initializeApp(firebaseConfig);

// Redirect if not logged in
if (window.location.pathname.includes("admin.html")) {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "index.html";
    }
  });
}
