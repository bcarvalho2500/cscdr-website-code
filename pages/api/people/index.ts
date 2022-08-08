// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { connectToDatabase } = require('../../../middleware/database')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	switch(req.method){
		case 'GET': {
			return getPeople(req, res)
		}
		
		case 'POST': {
			return addPeople(req, res)
		}
	}
}

async function getPeople(req: NextApiRequest, res: NextApiResponse){
	try {
		let { db } = await connectToDatabase()
		let news = await db
			.collection('people')
			.find({})
			.sort({ name: 1 })
			.toArray()
		
		return res.json({
			message: JSON.parse(JSON.stringify(news)),
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

async function addPeople(req: NextApiRequest, res: NextApiResponse){
	try {
		let { db } = await connectToDatabase()
		await db.collection('people').insertOne(req.body)
		return res.json({
			message: "Person added successfully",
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

