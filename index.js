const express = require("express");
const app = express();

// process.env for secret PORT
const PORT = process.env.PORT || 8080;

app.use(express.static("static"));

app.get("/", (req, res) => {
  return res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, () => {
  console.log(`Your app is running on http://localhost:${PORT}/`);
});
