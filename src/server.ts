import express from 'express';

const app = express();

app.get("/", (req, res) => {
    // return res.send("Hello World - NLW04")
    return res.json({'message': "Hello World - NLW04"})
})

app.post("/", (req, res) => {
    return res.json(({'message': "Os dados foram salvos com sucesso!"}))
})

app.listen(3000, () => console.log("Server is running!"));