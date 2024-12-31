import { createContext } from "react";

export const ContextosGlobales = createContext(
  {} as { EditarCard: { valor: boolean; setValor: (valor: boolean) => void } },
);
