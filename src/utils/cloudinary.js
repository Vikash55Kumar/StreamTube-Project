import { v2 as cloudinary } from 'cloudinary';

import fs from "fs"

// import cloudinary from "cloudinary"
cloudinary.config({
    cloud_name: "dmm3jevkq",
    api_key: "728964926974665",
    api_secret: "9G4gZGpp7JueJL_4NIhfzaelqvc",
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("File not found");
            return; // Stop execution if file path is not provided
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // file upload successful
        console.log("File is uploaded on Cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlink(localFilePath, (err) => {
            if (err) console.error("Error deleting file:", err);
        }); // remove temporary file
        console.error("Error uploading file:", error);
    }
}

// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables


// const uploadOnCloudinary = async (filePath) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(filePath, (error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

export { uploadOnCloudinary };

