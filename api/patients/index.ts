import { IncomingMessage, ServerResponse } from 'http';

interface VercelRequest extends IncomingMessage {
  query: { [key: string]: string | string[] };
  body?: any;
  cookies?: { [key: string]: string };
}

// Correct VercelResponse interface
interface VercelResponse extends ServerResponse {
  status(code: number): this;
  json(body: any): this;
  send(body: any): this;
  setHeader(name: string, value: string | string[]): this;
  end(callback?: () => void): this;
  end(chunk: any, callback?: () => void): this;
  end(chunk: any, encoding?: string, callback?: () => void): this;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            message: 'Patients API is working!',
            method: req.method,
            timestamp: new Date().toISOString()
        });
        return;
    }
    
    res.status(405).json({ error: 'Method not allowed' });
}