const cloudinary = require('cloudinary').v2;
const {CLOUD_NAME,CLOUD_API_KEY,CLOUD_API_SECRET} = process.env

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET
  });
  


async function subirImagen(filePath){
 return await  cloudinary.uploader.upload(filePath,{
    folder : 'replit'
 })
}

module.exports = subirImagen