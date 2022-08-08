import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import { promises as fsp } from 'fs';
import fs from 'fs'

export const config = {
    api: {
        bodyParser: false,
    }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const data: any = await new Promise((resolve, reject) => {
            const form = new IncomingForm();
            form.parse(req, (err, fields, files) => {
                if (err) return reject(err);
                resolve({ fields, files });
            });
        });

        try {
            const imageFile = data.files.image;
            const imagePath = imageFile.filepath;
            const pathToWriteImage = `public/images/${data.files.image.originalFilename}`;
			if(fs.existsSync(pathToWriteImage)){
				res.status(200).json({ message: 'image already exists!', success: true});
			}else{
				const image = await fsp.readFile(imagePath);
				await fsp.writeFile(pathToWriteImage, image);
				res.status(200).json({ message: 'image uploaded!', success: true});
			}
        } catch (error) {
            if(typeof error === "string"){
				return res.status(500).json({
					message: error,
					success: false
				})
			}else if(error instanceof Error){
				return res.status(500).json({
					message: error.message,
					success: false
				})
			}
        }
    };
};