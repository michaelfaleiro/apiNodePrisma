import { z } from "zod";

export const AdicionarProdutoSchema = z.object({
  sku: z.string().optional(),
  nomeProduto: z.string(),
  marca: z.string(),
  quantidade: z.number().int().positive(),
  preco: z.number().nonnegative(),
  orcamentoId: z.string(),
});

export type TAdicionarProduto = z.infer<typeof AdicionarProdutoSchema>;
