require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require('./connectDB');
const Notes = require('./models/Notes');

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Get All Notes
app.get("/notes", async (req, res) => {
    const errorMsg = 'An error occured while fetching notes.';

    try {
        const data = await Notes.find({});

        if (!data) {
            throw new Error(errorMsg);
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: errorMsg });
    }
})

// Get Note by ID
app.get("/notes/:id", async (req, res) => {
    const errorMsg = 'An error occured while fetching notes.';

    try {
        const noteId = req.params.id;
        const data = await Notes.findById(noteId);

        if (!data) {
            throw new Error(errorMsg);
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: errorMsg });
    }
})

// Create a Note
app.post("/notes", async (req, res) => {
    const errorMsg = 'An error occured while creating a note.';

    try {
        const { title, description } = req.body;
        const data = await Notes.create({ title, description });

        if (!data) {
            throw new Error(errorMsg);
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: errorMsg });
    }
})

// Update a Note
app.put("/notes/:id", async (req, res) => {
    const errorMsg = 'An error occured while updating a note.';

    try {
        const noteId = req.params.id;
        const { title, description } = req.body;
        const data = await Notes.findByIdAndUpdate(noteId, { title, description });

        if (!data) {
            throw new Error(errorMsg);
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: errorMsg });
    }
})

// Delete a Note
app.delete("/notes/:id", async (req, res) => {
    const errorMsg = 'An error occured while deleting a note.';

    try {
        const noteId = req.params.id;
        const data = await Notes.findByIdAndDelete(noteId);

        if (!data) {
            throw new Error(errorMsg);
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: errorMsg });
    }
})


// app.get("/", (req, res) => {
//     res.json("Hello mate!");
// })

// app.all("*", (req, res) => {
//     res.sendStatus(404);
// })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

