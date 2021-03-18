const showMessage = (req, res, next) => {
  res.status(200).send(`API Connecting... CONNECTED!, ${req.params.message}`);
};

module.exports = showMessage;
