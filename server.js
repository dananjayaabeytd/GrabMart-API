import http from 'http';
import app from './app/app';

//create the server
const server = http.createServer(app);
