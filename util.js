const findAndSendByRequest = async (model, query, key, res) => {
  await model.findOne(query, key, async (err, data) => {
    try {
      res.json(data);
    } catch (err) {
      res.send(err.message);
    }
  });
};

const findAndUpdateByRequest = async (model, query, updatedData, key, res) => {
  await model.findOneAndUpdate(query, updatedData);
  await model.findOne(query, key, async (err, data) => {
    try {
      res.json(data);
    } catch {
      res.send(err.message);
    }
  });
};

module.exports = { findAndSendByRequest, findAndUpdateByRequest };
