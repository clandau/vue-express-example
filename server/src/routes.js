module.exports = (app) => {
  app.get("/status", (req, res) => {
    res.send("hello world");
  });

  app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/index.html")
  })

  app.post("/register", (req, res) => {
    console.log(req.body)
    res.send({
      message: `Hello ${req.body.email}! You user was registered. Have fun!`
    })
  })
}