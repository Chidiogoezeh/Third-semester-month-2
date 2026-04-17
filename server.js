import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';
import { initCronJob } from './src/services/cronService.js';

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Security & Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/users', userRoutes);

// Connect DB and Start Services
connectDB().then(() => {
    initCronJob();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});