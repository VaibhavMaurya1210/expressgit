import {v2 as Cloudinary} from "cloudinary"
import fs from "fs"


 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uplodeResult = async (localFilePath) =>{

    try {
        if(!localFilePath) return null

        // upload file path cloudinary

       const responce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file has uploded successfully
        .console.log("file is uploded are cloudinary",responce.url);
        return responce;        
        
    } catch (error) {
        fs.unlink(localFilePath) // remove the locally saved  temporary file as the upload operation  got faild
        return null; 
        
    }

}

export {uplodeResult}