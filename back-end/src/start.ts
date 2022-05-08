import http from 'http';
import express from 'express';
import { Server } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from './typings/socketTypes';
import { ClientHandler } from './utils/ClientHandler';

const app = express();
const httpServer = http.createServer(app);
const PORT = 4000;
const CORS_URLS_ALLOWED = ['http://localhost:4000'];

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
  cors: {
    origin: CORS_URLS_ALLOWED,
    methods: ['GET', 'POST'],
  },
});

io.on("connection", (socket) => {
  new ClientHandler(io , socket);
});

httpServer.listen(PORT, () => {
  console.log(`serveur lancé sur le port ${PORT}`);
});
