// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { connectToDatabase } = require('../../../middleware/database')
import { ObjectId } from 'mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	switch(req.method){
		case 'PUT': {
			return changeNewsItem(req, res)
		}

		case 'DELETE': {
			return deleteNewsItem(req, res)
		}
	}
}

async function changeNewsItem(req: NextApiRequest, res: NextApiResponse){
	const newsId = req.query.newsId as string
	
	try {
		let { db } = await connectToDatabase()
		let event = await db
			.collection('news')
			.updateOne({ _id: ObjectId.createFromHexString(newsId)}, {$set: req.body}, { upsert: true})
			
		return res.json({
			message: JSON.parse(JSON.stringify(event)),
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

async function deleteNewsItem(req: NextApiRequest, res: NextApiResponse) {
	const newsId = req.query.newsId as string
	
	try {
		let { db } = await connectToDatabase()
		let event = await db
			.collection('news')
			.deleteOne({ _id: ObjectId.createFromHexString(newsId)})
			
		return res.json({
			message: JSON.parse(JSON.stringify(event)),
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