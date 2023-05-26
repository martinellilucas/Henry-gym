const getClaseByName = require('../controllers/getClaseByName');

const handlerGetClaseById = async(req, res) => {
  try {
    const { id }= req.params 
    res.status(200).json( await getClaseByName(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetClaseById;