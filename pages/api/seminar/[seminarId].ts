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
			return changeSeminarItem(req, res)
		}

		case 'DELETE': {
			return deleteSeminarItem(req, res)
		}
	}
}

async function changeSeminarItem(req: NextApiRequest, res: NextApiResponse){
	const seminarId = req.query.seminarId as string
	
	try {
		let { db } = await connectToDatabase()
		let seminar = await db
			.collection('seminars')
			.updateOne({ _id: ObjectId.createFromHexString(seminarId)}, {$set: req.body}, { upsert: true})
			
		return res.json({
			data: JSON.parse(JSON.stringify(seminar)),
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

async function deleteSeminarItem(req: NextApiRequest, res: NextApiResponse) {
	const seminarId = req.query.seminarId as string
	
	try {
		let { db } = await connectToDatabase()
		let seminar = await db
			.collection('seminars')
			.deleteOne({ _id: ObjectId.createFromHexString(seminarId)})
			
		return res.json({
			data: JSON.parse(JSON.stringify(seminar)),
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