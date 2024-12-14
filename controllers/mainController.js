const db = require("../db/queries");

async function getUsernames(req, res) {
  if (!req.query.search) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  } else {
    console.log("Query: ", req.query);
    const searchnames = await db.searchUsernames(req.query.search);
    res.send(
      "Search Results: " + searchnames.map((user) => user.username).join(", ")
    );
  }
}

async function createUsernameGet(req, res) {
  res.render("new", { title: "new" });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteUsernames(req, res) {
  db.deleteAllUsernames();
  res.send("Usernames have been deleted");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
};
