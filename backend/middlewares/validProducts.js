const path = require("path");

const parameterId = (req, res, next) => {
  if(req.params.id >= 1){
    return next();
  } 
  return res.status(401).send(path.join(__dirname, "public", "index.html"))
  //send({ message: 'Params are not valid.' });
}

const parameterName = (req, res, next) => {
  if (Object.keys(req.query).length == 0){
    return res.status(401).send(path.join(__dirname, "public", "index.html"))
    //.send({ message: 'Params are not valid.' });
  } else if (req.query.search.length < 3){
    return res.status(401).send(path.join(__dirname, "public", "index.html"))
    //.send({ message: 'Type at least 3 characters.' });
  } else {
    return next();
  }
}

module.exports = {
  parameterId,
  parameterName
}