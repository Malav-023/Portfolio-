import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import Contact from './models/Contact.js'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and Email are required " });
        }


        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: "MSG Success." });
    } catch (error) {
        res.status(500).json({ error: "failed to save contact" });
    }
});

// Testing route 
app.get("/", (req, res) => {
    res.send("Backengfgdfgd is runnuhuhuhuing!! Let's go ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is on port ${process.env.PORT}`)); 