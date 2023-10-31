import { Request, Response } from "express";
import { OrcamentoService } from "../services/orcamentoService";
import { ProdutoService } from "../services/produtoService";
import { TOrcamento } from "../schemas/orcamentoSchema";
import { TAdicionarProduto } from "../schemas/adicionarProdutoSchema";

class OrcamentoController {
  static async create(
    req: Request<{}, {}, TOrcamento>,
    res: Response
  ): Promise<Response> {
    try {
      const data = await OrcamentoService.create(req.body);

      return res.status(201).json({ data: { orcamento: data } });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  static async getall(req: Request, res: Response): Promise<Response> {
    try {
      const data = await OrcamentoService.getall(req.body);
      return res.status(200).json({ data: { orcamentos: data } });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  static async addProduto(
    req: Request<{}, {}, TAdicionarProduto>,
    res: Response
  ): Promise<Response> {
    try {
      const data = await ProdutoService.create(req.body);
      return res.status(200).json({ data: { produto: data } });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  static async updateProduto(
    req: Request<any, {}, TAdicionarProduto>,
    res: Response
  ): Promise<Response> {
    try {
      const data = await ProdutoService.update(req.params.produtoId, req.body);
      return res.status(200).json({
        data: { produto: data },
      });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
}

export { OrcamentoController };
