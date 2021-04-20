    // Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC0SF64zoErXGMWEJvQ__hZmrkbKPAklpc",
  authDomain: "scuvo-cfc00.firebaseapp.com",
  projectId: "scuvo-cfc00",
  storageBucket: "scuvo-cfc00.appspot.com",
  messagingSenderId: "815366829942",
  ppId: "1:815366829942:web:52cd42c67106352507ec57"
};
firebase.initializeApp(firebaseConfig);
    
    // Make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

    // Update firestore settings
db.settings({ timestampsInSnapshots: true });