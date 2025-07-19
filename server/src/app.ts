import express from 'express'
import cors from 'cors'
import inventoryRoutes from './presentation/routes/productRoutes'
import createProductsTable from './data/productTable'

const app = express()
const port = 5001

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Add this root route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' })
})


createProductsTable()

app.use('/api', inventoryRoutes)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})