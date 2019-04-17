var express = require("express");

var indexRouter = require("./routes/index");

var app = express();

var port = process.env.PORT || 3000;

app.use(indexRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
