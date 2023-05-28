import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import { ContactProps } from '../../types'

type Data = {
  message: string
}

const contact = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { name, email, subject, message, spamMessage }: ContactProps =
      req.body

    if (spamMessage === '') {
      try {
        const client = new MongoClient(process.env.MONGDO_DB_URI || '')
        await client.connect()
        const db = client.db()
        const contactCollection = db.collection('contact')
        const result = await contactCollection.insertOne({
          name,
          email,
          subject,
          message,
          date: new Date().getTime(),
        })
        client.close()

        if (result && result.insertedId) {
          res.status(200).json({ message: 'Success' })
        } else {
          res
            .status(503)
            .json({ message: 'Unable to handle the request right now!' })
        }
      } catch (err) {
        res.status(500).json({
          message:
            'Something went wrong with the server! Please try again later.',
        })
      }
    } else {
      res.status(200).json({ message: 'Success' })
    }
  } else res.status(400).json({ message: `${req.method} is not allowed.` })
}

export default contact
