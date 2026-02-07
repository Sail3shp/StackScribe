import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME , 
  api_key: process.env.CLOUD_API , 
  api_secret: process.env.CLOUD_SECRET  
});
console.log(process.env.CLOUD_NAME,process.env.CLOUD_API,process.env.CLOUD_SECRET)

export default cloudinary
/*const img = '../controller/landingpage.jpg'

const result = await cloudinary.uploader.upload(img,{folder:'products'})
console.log(result)
*/