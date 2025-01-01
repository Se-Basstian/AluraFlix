import { createContext } from "react";
import type { datosFetch } from "../interfaces/Globales";

export const ContextosGlobales = createContext(
  {} as {
    EditarCard: { valor: boolean; setValor: (valor: boolean) => void };
    DatosVideo: {
      valor: datosFetch[];
      setValor: (valor: datosFetch[]) => void;
    };
  },
);
