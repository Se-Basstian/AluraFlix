import type { datosFetch } from "../../interfaces/Globales";

function getSuspender(promise: Promise<datosFetch[]>) {
  let status: "pending" | "success" | "error" = "pending";
  let response: datosFetch[];

  const suspender = promise
    .then((res) => {
      status = "success";
      response = res;
    })
    .catch((err) => {
      status = "error";
      response = err;
    });

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

export function fetchFrondEnd() {
  const promise: Promise<datosFetch[]> = fetch(
    "http://localhost:3000/front_end/",
  )
    .then((response) => {
      return response.json();
    })
    .then((datos) => {
      return datos;
    });

  return getSuspender(promise);
}

export function fetchBackEnd() {
  const promise: Promise<datosFetch[]> = fetch(
    "http://localhost:3000/back_end/",
  )
    .then((response) => {
      return response.json();
    })
    .then((datos) => {
      return datos;
    });

  return getSuspender(promise);
}

export function fetchInnovacionGestion() {
  const promise: Promise<datosFetch[]> = fetch(
    "http://localhost:3000/innovacion_gestion/",
  )
    .then((response) => {
      return response.json();
    })
    .then((datos) => {
      return datos;
    });

  return getSuspender(promise);
}
