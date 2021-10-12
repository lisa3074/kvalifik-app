import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { API } from "../../../apiKeys/apiKey";

export function initRtdb() {
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  const firebaseConfig = {
    apiKey: API,
    authDomain: "kvalifik-bf2c3.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    //databaseURL: "https://databaseName.firebaseio.com",
    databaseURL: "https://kvalifik-bf2c3-default-rtdb.europe-west1.firebasedatabase.app/",
    // storageBucket: "bucket.appspot.com",
    storageBucket: "gs://kvalifik-bf2c3.appspot.com/",
  };

  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = getDatabase(app);
  console.log(database);
}
