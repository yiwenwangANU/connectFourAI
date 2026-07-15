import Fastify from "fastify";

const server = Fastify();

server.get("/", async () => {
  return "hello wolrd";
});

server.get<{
  Headers: { myheader: boolean };
  Querystring: { id: number };
  Reply: {
    200: { status: string; id: number; myHeader: boolean };
    500: { code: number };
  };
}>("/employee", async (req, rep) => {
  try {
    return rep.status(200).send({
      status: "success",
      id: req.query.id,
      myHeader: req.headers.myheader,
    });
  } catch (err) {
    req.log.error(err);
    return rep.status(500).send({ code: 500 });
  }
});

server.listen({ port: 8080, host: "::1" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is ready on port: ${address}`);
});
