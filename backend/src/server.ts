import http from "http";
import express from "express";
import CONFIG from "./config";

const router = express();
const { PORT = 3000 } = CONFIG;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);