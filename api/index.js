import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello, this is a demo message!');
  });
  

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`)
})
