import express from 'express'
import morgan from 'morgan'

import parcelRoutes from './routes/parcel.routes'
import authRoutes from './routes/auth.routes'

const app = express();
app.disable('x-powered-by');

app.use(express.json())
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json('Service up')
})

app.use('/api/parcels', parcelRoutes)
app.use('/api/auth', authRoutes)
export default app;