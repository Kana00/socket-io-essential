import { Server, Socket } from "socket.io";

export interface ServerToClientEvents {
  message: (message: string) => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
  connect: () => void;
  disconnect: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  id: string;
}

export type ServerType = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

export type SocketType = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
