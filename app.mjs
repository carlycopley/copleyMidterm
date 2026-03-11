import 'dotenv/config'
import express from 'express'
import { MongoClient } from 'mongodb'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const app = express()
const uri = process.env.MONGO_URI

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())

// connect to MongoDB
const client = new MongoClient(uri)
await client.connect()

/* CRUD STUFF */

// CREATE
app.post('/api/resource', async (req, res) => {
  // create something in database
  res.json({ message: "CREATE endpoint" })
})

// READ
app.get('/api/resource', async (req, res) => {
  // return data from database
  res.json({ message: "READ endpoint" })
})

// UPDATE
app.put('/api/resource/:id', async (req, res) => {
  // update something in database
  res.json({ message: "UPDATE endpoint" })
})

// DELETE
app.delete('/api/resource/:id', async (req, res) => {
  // delete something from database
  res.json({ message: "DELETE endpoint" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
