import { Type } from "@fastify/type-provider-typebox";
import type { FastifyTypeBox } from "../types";

const employeeRoutes = async (fastify: FastifyTypeBox) => {
  fastify.get(
    "/employee/:param",
    {
      schema: {
        headers: Type.Object(
          { myheader: Type.Boolean() },
          { additionalProperties: true },
        ),
        querystring: Type.Object({ id: Type.Number() }),
        params: Type.Object({ param: Type.Number() }),
        response: {
          200: Type.Object({
            status: Type.String(),
            id: Type.Number(),
            param: Type.Number(),
            myHeader: Type.Boolean(),
          }),
          500: Type.Object({ code: Type.Number() }),
        },
      },
    },
    async (req, rep) => {
      try {
        return rep.status(200).send({
          status: "success",
          id: req.query.id,
          param: req.params.param,
          myHeader: req.headers.myheader,
        });
      } catch (err) {
        req.log.error(err);
        return rep.status(500).send({ code: 500 });
      }
    },
  );

  fastify.post(
    "/employee",
    {
      schema: {
        body: Type.Object({ userName: Type.String() }),
      },
    },
    async (req) => {
      return req.body.userName;
    },
  );
};

export default employeeRoutes;
