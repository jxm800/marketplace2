const express = require('express')
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 1000

app.use(bodyParser.json());
const postings = require('./searches/postings');
const users = require('./searches/users');

app.get('/', (req, res) => {
  res.send('Welcome to the markerplace!')
})

app.listen(port, () => {
    console.log('test');
})

//all postings
app.get('/postings', (req, res) => 
{
    const t = postings.getAllPostings();
    res.json(t);
})

//find a specific posting by id
app.get('/postings/:postingId', (req, res) => 
{
  const id = req.params.id;
  const t = postings.getPosting(id);
  if (t !== undefined)
  {
    res.sendStatus(200);
    res.json(t);
  } else
  {
    res.sendStatus(404);
  }
})

//find postings based on their category
app.get('/postings/category/:category', (req, res) => 
{
  const category = req.params.category;
  const t = postings.getByCategory(category);
  if (t !== undefined)
  {
    res.json(t);
    res.sendStatus(200);
  } else
  {
    res.sendStatus(404);
  }
})

//find postings based on their location
app.get('/postings/location/:location.city', (req, res) => 
{
  const location = req.params.location.city;
  const t = postings.getByLocation(location);
  if (t !== undefined)
  {
    res.json(t);
    res.sendStatus(200);
  } else
  {
    t.sendStatus(404);
  }
})

//find postings based on the day they were created
app.get('/postings/date/:dateOfPosting', (req, res) => 
{
  const date = req.params.dateOfPosting;
  const t = postings.getByDate(date);
  if (t !== undefined)
  {
    res.json(t);
    res.sendStatus(200);
  }
  else
  {
    t.sendStatus(404);
  }
})