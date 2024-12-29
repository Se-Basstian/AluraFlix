export type Pagina = "/home" | "/nuevo_video";

export interface DatosPaginas {
  pagina: Pagina;
  setPagina: (valor: "/home" | "/nuevo_video") => void;
}
