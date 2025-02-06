import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors'; 

const app = express();
const port = process.env.PORT || 3000; 

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/api/home", (req,res) => {
    res.json({message: "hi, im christine"})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})