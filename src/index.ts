import Fastify from "fastify";

const server = Fastify({ logger: true });

server.listen(
  { port: Number(process.env.PORT), host: process.env.HOST },
  (err, address) => {
    if (err) {
      server.log.info(err);
      process.exit(1);
    }
    server.log.info(`Server is ready on port: ${address}`);
  },
);
