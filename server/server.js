import express from 'express'; 

const app = express();
const port = 3000; 

app.use(express.json())

app.get("/api/home", (req,res) => {
    const message = "This is christine";
    res.json({message:message})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})