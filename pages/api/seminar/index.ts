// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { connectToDatabase } = require('../../../middleware/database')

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'GET': {
			return getSeminar(req, res)
		}

		case 'POST': {
			return addSeminar(req, res)
		}
	}
}

async function getSeminar(req: NextApiRequest, res: NextApiResponse) {
	try {
		let { db } = await connectToDatabase()
		let seminar = await db
			.collection('seminars')
			.find({})
			.sort({ date_time: -1 })
			.toArray()

		return res.json({
			data: JSON.parse(JSON.stringify(seminar)),
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

async function addSeminar(req: NextApiRequest, res: NextApiResponse) {
	try {
		let { db } = await connectToDatabase()
		await db.collection('seminars').insertOne(req.body)
		return res.json({
			message: 'Seminar added successfully',
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
