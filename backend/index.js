const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

//prashantsugave125
//VfET0WemzP5dXTNJ

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(
    "mongodb+srv://prashantsugave125:VfET0WemzP5dXTNJ@viggify-react-app.bkkfbmw.mongodb.net/viggify-react-app?retryWrites=true&w=majority&appName=viggify-react-app"
  );
  
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}
main().then(() => console.log("Mongodb Connected Successfully!")).catch((err) => console.log(err));

//routes
const ItemRoutes = require("./src/routes/ItemRoute")

app.use('/api', ItemRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
