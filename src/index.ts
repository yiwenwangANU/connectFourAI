import Fastify from "fastify";

const server = Fastify();

server.listen({ port: 8080, host: "::1" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is ready on port: ${address}`);
});
