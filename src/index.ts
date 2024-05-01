import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { db } from './database/db'

dotenv.config({ path: './.env' })
const app = express()



db.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log('error====>',error))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express');
});

app.listen(8081, () => {
    console.log(`server running........8081`)
})