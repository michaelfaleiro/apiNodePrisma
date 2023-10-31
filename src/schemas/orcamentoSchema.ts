import { z } from "zod";

export const OrcamentoSchema = z.object({
  nomeCliente: z.string(),
  celular: z.string(),
  carro: z.string(),
  placa: z.string().optional(),
  chassis: z.string().optional(),
});

export type TOrcamento = z.infer<typeof OrcamentoSchema>;
