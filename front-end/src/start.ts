import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "./typings/socketTypes";

const URL_SOCKET_IO_SERVER = `http://localhost:4000`;
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL_SOCKET_IO_SERVER);

socket.emit('message', 'Message venant du client');
