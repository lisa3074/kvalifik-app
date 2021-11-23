import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { API } from "../../apiKeys/apiKey";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: API,
    authDomain: "kvalifik-bf2c3.firebaseapp.com",
  databaseURL: "https://kvalifik-bf2c3-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "kvalifik-bf2c3.appspot.com",

};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);