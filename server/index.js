'use strict'

const express = require('express')
const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')
const { createServer } = require('http2')

const hostname = 'localhost'
const port = 443
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, "./ssl/sslkey.key")),
    cert: fs.readFileSync(path.join(__dirname, "./ssl/iwantboost_com.crt")),
    ca: fs.readFileSync(path.join(__dirname, "./ssl/iwantboost_com.ca-bundle"))
}



const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))  
})

https.createServer(httpsOptions, app).listen(port, hostname, function() {
  console.log(`Server running at https://${hostname}:${port}/`)
})

http.createServer(app).listen(80, function() {
  console.log(`Server running at http://${hostname}:80/`)
})  
