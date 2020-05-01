const express = require('express'),
  app = express(),
  path = require('path'),
  PORT = process.env.PORT || 4000

// serves up html file
app.use(express.static('public'))
// serves up jquery to index.html using alias folder path /scripts
app.use(
  '/scripts',
  // get abs path goes up one level and appends jquery location
  express.static(path.join(__dirname, '..', 'node_modules/jquery/dist'))
)

app.listen(PORT, () => console.log(`Server running on: ${PORT}`))
