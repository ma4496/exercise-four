const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAWOAfoitZyDMTTHsPhl_EhjMl5TE-ju6U",
  authDomain: "exercise-four-a7a72.firebaseapp.com",
  projectId: "exercise-four-a7a72",
  storageBucket: "exercise-four-a7a72.appspot.com",
  messagingSenderId: "831260260385",
  appId: "1:831260260385:web:6e28fcc5104b07de1f0b60",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
