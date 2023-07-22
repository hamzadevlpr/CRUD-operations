// Server
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
});



// Database created
const mongoose = require('mongoose');
const DATABASE_URL = process.env.URL;
mongoose.connect(DATABASE_URL);

// Database Connected message
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

// Database Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        password: {
            required: true,
            type: String
        },

    }
);

// Database Model
const userModel = new mongoose.model('userlists', userSchema);


// Create Method  Request
app.post('/user', async (req, res) => {
    
    const data = new userModel(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        }
    );

    try {
        const dataToSave = await data.save();
        res.status(203).json(data);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Read Method  Request
// app.get('/user', async (req, res) => {

//     try {
//         // const dataToRead = await userModel.find();
//         res.status(500).json(data);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })


// Delete Method  Request
// app.delete('/user', async (req, res) => {
//     try {
//         const dataToRead = await userModel.findByIdAndDelete({ "_id": "64ba8be5a3de1ddece62d26f" });
//         res.status(200).send("User Deleted");
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })


// // Update Method  Request
// app.put('/user', async (req, res) => {
//     try {
//         const dataToRead = await userModel.findOne({ "name": "Saad" });

//         if (!dataToRead) {
//             return res.status(404).json({ message: "Data not found" });
//         }

//         // dataToRead.name = req.body.name;
//         dataToRead.year = req.body.year;

//         await dataToRead.save();
//         res.status(200).send(dataToRead);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });







