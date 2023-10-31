import { Router } from "express";

import { OrcamentoController } from "../controllers/orcamentoController";
import { OrcamentoSchema } from "../schemas/orcamentoSchema";
import { AdicionarProdutoSchema } from "../schemas/adicionarProdutoSchema";
import { schemaValidation } from "../middlewares/orcamentoValidation";

const router = Router();

router.post(
  "/cotacoes",
  schemaValidation(OrcamentoSchema),
  OrcamentoController.create
);
router.get("/orcamentos", OrcamentoController.getall);
router.post(
  "/orcamentos/addproduto",
  schemaValidation(AdicionarProdutoSchema),
  OrcamentoController.addProduto
);
router.put(
  "/orcamentos/updateproduto/:produtoId",
  schemaValidation(AdicionarProdutoSchema),
  OrcamentoController.updateProduto
);
export { router };
