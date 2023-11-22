// const express = require('express')
// const app = express()

// app.use("/", (req, res) => {
//     res.send("server is running");
// });

// app.listen(3001, console.log("Server started on PORT 5000"));

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://nextjs-orpin-omega-98.vercel.app/api/restaurants');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// "routes": [{"src": "/(.*)", "dest": "/"}]