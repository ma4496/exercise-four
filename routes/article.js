const express = require("exrpress");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/:id", (req, res) => {
  const postID = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, "blogposts", postID));
  blogpost
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);
      return res.send(`No doc.. sorry`);
      res.send(response.data());
    })
    .catch(function (error) {
      res.send(`No doc.. sorry`);
    });
});

router.get("/", (req, res) => {
  res.send(`Please Include an ID`);
});

module.exports = router;
