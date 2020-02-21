import express from 'express';
import cors from 'cors';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import formidableMiddleware from 'express-formidable';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';
import api from './api/router';
import LOGGER, { logRequest, logError } from './logger';


const app = express();
app.use(cors());
app.use(compression());
app.use(helmet());

// Logs
app.use(logRequest)
app.use(logError)

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware({
  encoding: 'utf-8',
  uploadDir: '/tmp',
  multiples: true,
  keepExtensions: true
}))

dotenv.config()

const cwd = process.cwd();

// Point static path to dist
app.use(express.static(path.join(cwd, 'build')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(cwd, 'build/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => LOGGER.info(`API running on http://localhost:${port}/`));
