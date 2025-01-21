import clsx from "clsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_VIDEOS } from "../variablesGLobales";

interface Video {
  id?: number;
  titulo: string;
  imagen?: string;
  video: string;
  grupo?: "front end" | "back end" | "innovación y gestión";
  descripcion: string;
}

const Repoductor = () => {
  const [dato, setDato] = useState<Video>({
    titulo: "Algo salió mal",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=CR15UpvauK8CZxiF",
    descripcion:
      "The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2.  The video passed the 1bn YouTube views milestone on 28 July 2021.",
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_VIDEOS}/${id}`)
      .then((respueta) => respueta.json())
      .then((dato: Video) => {
        setDato(dato);
      })
      .catch(() => console.log("Algo va mas"));
  }, [id]);

  return (
    <article
      className={clsx(
        "w-full min-h-[900px] pb-[35px]",
        "flex flex-col justify-evenly items-center",
        "m610:justify-start gap-[40px]",
      )}
    >
      <h2
        className={clsx(
          "self-start text-[6.4rem] mx-[80px] font-bold  m430:m-0",
          "m1340:text-[5rem] m-0 m610:text-[4rem] m430:text-[2.7rem]",
        )}
      >
        {dato.titulo}
      </h2>
      <iframe
        className={clsx(
          "w-[70%] aspect-[2/1] rounded-[20px]",
          "m940:w-[90%] m430:w-full",
        )}
        src={dato.video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <section className={clsx("w-[70%] m940:w-[90%]")}>
        <h3 className={clsx("text-[4rem] font-semibold m430:text-[2.2rem]")}>
          Descripción
        </h3>
        <p className={clsx("text-[2rem] m430:text-[1.6rem]")}>
          {dato.descripcion}
        </p>
      </section>
    </article>
  );
};

export default Repoductor;
