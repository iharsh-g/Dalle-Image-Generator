const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

//db connection
const db = require("./config/database");
db.connect();

//routes connection
const upload = require("./routes/ImageUpload");
app.use("/api/v1", upload);

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})