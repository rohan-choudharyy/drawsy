import express, { Request, Response } from 'express';
import cors from 'cors';
import { analyzeImage } from './utils';

interface CalculateRequest {
  image: string;
  dict_of_vars: Record<string, any>;
}

interface CalculateResponse {
  expr: string;
  result: string;
  assign: boolean;
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'http://localhost:5173',  // Local development
    'https://drawsy-1.onrender.com',// Your production frontend URL
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));

app.post('/calculate', async (req: Request<{}, {}, CalculateRequest>, res: Response) => {
  try {
    const { image, dict_of_vars } = req.body;
    const responses = await analyzeImage(image, dict_of_vars);
    console.log('Response in route:', responses);
    res.json({ message: "Image processed", data: responses, status: "success" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 