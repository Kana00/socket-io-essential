import { Server, Socket } from "socket.io";
import { ServerType, SocketType, ClientToServerEvents } from "../typings/socketTypes";

export class ClientHandler implements ClientToServerEvents {
  socket: SocketType;
  io: ServerType;

  constructor(io: ServerType, socket: SocketType) {
    this.socket = socket;
    this.io = io;

    this.connect();
    socket.on('message', this.message);
    socket.on('disconnect', () => this.disconnect());
  }

  connect() {
    console.log(`User ${this.socket.id} connected`);
    this.socket.emit('message', 'Vous êtes connecté au serveur');
  }

  message(message: string) {
    console.log(message);
  };

  disconnect() {
    console.log(`User ${this.socket.id} disconnected`);
  }
}
