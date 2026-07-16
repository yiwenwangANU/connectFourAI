import type { FastifyTypeBox } from "../types";

const rootRoutes = async (fastify: FastifyTypeBox) => {
  fastify.get("/", async () => {
    return "hello wolrd";
  });
};

export default rootRoutes;
