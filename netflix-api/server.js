const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const userRoutes = require("./routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb+srv://admin:admin@cluster0.e7lhsvu.mongodb.net/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=>{
    console.log("DB Connected")
});

app.use("/api/user", userRoutes);


app.listen(5000, console.log("server started"));