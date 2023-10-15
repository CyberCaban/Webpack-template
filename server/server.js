require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

const api = require("./routes/routes");
const auth = require("./routes/authRouter");

app.use(express.static(path.resolve("./dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", api);
app.use("/auth", auth);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`started server at ${PORT}`);
        });
        app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "../dist/index.html"));
        });
    } catch (e) {
        console.log(e);
    }
};

start();