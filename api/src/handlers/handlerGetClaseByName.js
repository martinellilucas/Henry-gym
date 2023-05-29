const getClaseByName = require("../controllers/getClaseByName");

const handlerGetClaseByName = async (req, res) => {
  const { name } = req.params;
  try {
    res.status(200).json(await getClaseByName(name));
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

module.exports = handlerGetClaseByName;
