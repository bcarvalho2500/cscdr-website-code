// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { connectToDatabase } = require('../../../middleware/database')
const ObjectId = require('mongodb').ObjectId

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	switch(req.method){
		case 'GET': {
			return getEvents(req, res)
		}
		
		case 'POST': {
			return addEvent(req, res)
		}
	}
}

async function getEvents(req: NextApiRequest, res: NextApiResponse){
	try {
		let { db } = await connectToDatabase()
		let events = await db
			.collection('events')
			.find({})
			.sort({ startDate: -1 })
			.toArray()
		
		return res.json({
			message: JSON.parse(JSON.stringify(events)),
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

async function addEvent(req: NextApiRequest, res: NextApiResponse){
	try {
		let { db } = await connectToDatabase()
		await db.collection('events').insertOne(req.body)
		return res.json({
			message: "Event item added successfully",
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
