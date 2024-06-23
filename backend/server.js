const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

// Base URL for your MockAPI project
const baseUrl = 'https://66756b95a8d2b4d072eff417.mockapi.io/api';

app.get('/', (req, res) => {
  res.send('Welcome to the Survey API');
});

app.get('/:surveyTopic', async (req, res) => {
  const surveyTopic = req.params.surveyTopic;

  try {
    // Make a request to MockAPI to get the survey topics
    const response = await axios.get(`${baseUrl}/surveytopics`);
    const surveyTopics = response.data;

    // Filter the survey topics based on the requested surveyTopic
    const filteredTopics = surveyTopics.filter(topic => topic.name.toLowerCase() === surveyTopic.toLowerCase());

    // If no matching topic found, send an empty array
    if (filteredTopics.length === 0) {
      return res.json([]);
    }

    // Send the filtered topics as the response
    res.json(filteredTopics[0].questions);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the survey topics');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// // server.js
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3001;

// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Welcome to the Survey API');
// });

// app.get('/:surveyTopic', (req, res) => {
//   const surveyTopic = req.params.surveyTopic;
//   let response;

//   switch (surveyTopic) {
//     case 'Technology':
//       response = ['What is your preferred IDE?', 'Do you contribute to open source projects?'];
//       break;
//     case 'Health':
//       response = ['How many hours do you sleep?', 'Do you take any supplements?'];
//       break;
//     case 'Education':
//       response = ['What is your favorite subject?', 'Do you prefer online or offline classes?'];
//       break;
//     default:
//       response = [];
//   }

//   res.json(response);
// });

// app.listen(port, () => {

//   console.log(`Server is running on http://localhost:${port}`);
// });
