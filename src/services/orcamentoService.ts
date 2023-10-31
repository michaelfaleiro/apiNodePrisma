import { PrismaClient } from "@prisma/client";
import { TOrcamento } from "../schemas/orcamentoSchema";

const prisma = new PrismaClient();

class OrcamentoService {
  static create = async (body: TOrcamento) => {
    try {
      const data = await prisma.orcamento.create({
        data: body,
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  static getall = async (body: any) => {
    try {
      const data = await prisma.orcamento.findMany({
        include: {
          produtos: true,
        },
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export { OrcamentoService };
