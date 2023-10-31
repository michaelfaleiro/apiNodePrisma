import { PrismaClient } from "@prisma/client";
import { TAdicionarProduto } from "../schemas/adicionarProdutoSchema";

const prisma = new PrismaClient();

class ProdutoService {
  static create = async (body: TAdicionarProduto) => {
    try {
      const data = await prisma.produto.create({
        data: {
          sku: body.sku,
          nomeProduto: body.nomeProduto,
          marca: body.marca,
          quantidade: body.quantidade,
          preco: body.preco,
          orcamentoId: body.orcamentoId,
        },
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  static update = async (produtoId: string, body: TAdicionarProduto) => {
    try {
      const data = await prisma.produto.update({
        where: {
          id: produtoId,
        },
        data: body,
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export { ProdutoService };
