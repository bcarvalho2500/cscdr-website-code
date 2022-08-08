// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { connectToDatabase } = require('../../../middleware/database')
import { ObjectId } from 'mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	switch (req.method) {
		case 'GET': {
			return getEvent(req, res)
		}

		case 'PUT': {
			return changeEventItem(req, res)
		}

		case 'DELETE': {
			return deleteEventItem(req, res)
		}
	}
}

async function getEvent(req: NextApiRequest, res: NextApiResponse){
	const eventId = req.query.eventId as string
	
	try {
		let { db } = await connectToDatabase()
		let event = await db
			.collection('events')
			.findOne({ _id: ObjectId.createFromHexString(eventId) })
			
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

async function changeEventItem(req: NextApiRequest, res: NextApiResponse) {
	const eventId = req.query.eventId as string

	try {
		let { db } = await connectToDatabase()
		let event = await db
			.collection('events')
			.updateOne(
				{ _id: ObjectId.createFromHexString(eventId) },
				{ $set: req.body },
				{ upsert: true }
			)

		return res.json({
			message: JSON.parse(JSON.stringify(event)),
			success: true,
		})
	} catch (error) {
		if (typeof error === 'string') {
			return res.status(400).json({
				message: error,
				success: false,
			})
		} else if (error instanceof Error) {
			return res.status(400).json({
				message: error.message,
				success: false,
			})
		}
	}
}

async function deleteEventItem(req: NextApiRequest, res: NextApiResponse) {
	const eventId = req.query.eventId as string

	try {
		let { db } = await connectToDatabase()
		let event = await db
			.collection('events')
			.deleteOne({ _id: ObjectId.createFromHexString(eventId) })

		return res.json({
			message: JSON.parse(JSON.stringify(event)),
			success: true,
		})
	} catch (error) {
		if (typeof error === 'string') {
			return res.status(400).json({
				message: error,
				success: false,
			})
		} else if (error instanceof Error) {
			return res.status(400).json({
				message: error.message,
				success: false,
			})
		}
	}
}