import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApIM6EiVb03JfA2JlLaMsI9UsGosLmR74",
  authDomain: "ccs-robovitics.firebaseapp.com",
  projectId: "ccs-robovitics",
  storageBucket: "ccs-robovitics.appspot.com",
  messagingSenderId: "779374762899",
  appId: "1:779374762899:web:8c44840b05a73d59102666",
}

// export const auth = App.auth();
firebase.initializeApp(firebaseConfig)
export { firebase };