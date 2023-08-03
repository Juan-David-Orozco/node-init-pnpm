import express from 'express';

const app = express();

app.set('port', 4000);

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.get('/user', (req, res) => {
  res.send("Get user By Id")
})

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})