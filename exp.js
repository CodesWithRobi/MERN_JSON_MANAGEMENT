import express from "express";
const app = express();
const port = 4000;

app.get("/*", (req, res) => {
  res.send("Bro this works");
});

app.listen(port, () => console.log("Server is listenting on port 4000"));
