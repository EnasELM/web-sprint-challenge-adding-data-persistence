// build your `/api/resources` router here

const express = require("express");
const Resources = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resources.createResources(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    message: err.message,
    stack: err.stack,
  });
});
module.exports = router;
