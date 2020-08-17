const path = require("path")
const express = require("express")
const fs = require("fs")
const http = require("http")
const https = require("https")

const sourceDir = "dist"
const app = express()
app.use(express.static(sourceDir))
app.use("/static/", express.static(path.join(__dirname, "src", "assets")))
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"))
})
const port = process.env.PORT || 2001

const httpServer = http.createServer(app)
httpServer.listen(port, () => {
  console.log(`Express http web server started on ${port}`)
  console.log(`Serving content from ./${sourceDir}/`)
})
