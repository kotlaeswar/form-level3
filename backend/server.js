// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Survey API');
});

app.get('/:surveyTopic', (req, res) => {
  const surveyTopic = req.params.surveyTopic;
  let response;

  switch (surveyTopic) {
    case 'Technology':
      response = ['What is your preferred IDE?', 'Do you contribute to open source projects?'];
      break;
    case 'Health':
      response = ['How many hours do you sleep?', 'Do you take any supplements?'];
      break;
    case 'Education':
      response = ['What is your favorite subject?', 'Do you prefer online or offline classes?'];
      break;
    default:
      response = [];
  }

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
