import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	switch(req.method){
		case 'GET': {
			return getImages(req, res)
		}
	}
}

function getImages(req: NextApiRequest, res: NextApiResponse){
	
	try{
		const dirRelativeToPublicFolder = 'images'
		
		const dir = path.resolve('./public', dirRelativeToPublicFolder);
		
		const filenames = fs.readdirSync(dir);
		
		const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
		
		return res.json({
				data: JSON.parse(JSON.stringify(images)),
				success: true
			})
	} catch(error) {
		if(typeof error === "string"){
			return res.status(400).json({
				message: error,
				success: false
			})
		}else if(error instanceof Error){
			return res.status(400).json({
				message: error.message,
				success: false
			})
		}
	}
}