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
			return changePerson(req, res)
		}

		case 'DELETE': {
			return deletePerson(req, res)
		}
	}
}

async function changePerson(req: NextApiRequest, res: NextApiResponse){
	const personId = req.query.personId as string
	
	try {
		let { db } = await connectToDatabase()
		let person = await db
			.collection('people')
			.updateOne({ _id: ObjectId.createFromHexString(personId)}, {$set: req.body}, { upsert: true})
			
		return res.json({
			data: JSON.parse(JSON.stringify(person)),
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

async function deletePerson(req: NextApiRequest, res: NextApiResponse) {
	const personId = req.query.personId as string
	
	try {
		let { db } = await connectToDatabase()
		let person = await db
			.collection('people')
			.deleteOne({ _id: ObjectId.createFromHexString(personId)})
			
		return res.json({
			data: JSON.parse(JSON.stringify(person)),
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