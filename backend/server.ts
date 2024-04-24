import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});