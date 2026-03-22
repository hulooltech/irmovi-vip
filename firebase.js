const firebaseConfig = {
  apiKey: "PUT_API_KEY",
  authDomain: "gsm-pro-54d77.firebaseapp.com",
  projectId: "gsm-pro-54d77",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
