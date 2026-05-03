import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from './routers/userRoutes.js';
import ownerRouter from './routers/ownerRouter.js';

const app=express();

await connectDB();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
res.send('server is running');
})

app.use('/api/users',userRouter)
app.use('/api/owner',ownerRouter)


const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
