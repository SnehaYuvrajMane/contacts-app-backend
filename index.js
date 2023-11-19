const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const contactRoutes = require("./routes/routes")
const connectDB = require('./db/db')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
connectDB()

app.use('/api/contacts', contactRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}
)
