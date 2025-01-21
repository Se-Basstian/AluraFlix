import clsx from "clsx";
import Categoria from "../layouts/Categoria";
import Card from "../components/common/Card";
import { createContext, useEffect, useState, type FC } from "react";
import Banner from "../components/elementos/Banner";
import Editar from "../components/elementos/Editar";
import { API_VIDEOS } from "../variablesGLobales";

export const ContextoDatos = createContext(
	{} as {
		ID: {
			valor: number;
			setValor(valor: number): void;
		};
		datosVideo: {
			id: number;
			titulo: string;
			imagen: string;
			video: string;
			grupo: "front end" | "back end" | "innovación y gestión";
			descripcion: string;
		}[];
	},
);

const Home: FC = () => {
	const [verEditar, setVerEditar] = useState(false);
	const [buscaID, setBuscaID] = useState(0);
	const [datosVideo, setDatosVideo] = useState(
		[] as {
			id: number;
			titulo: string;
			imagen: string;
			video: string;
			grupo: "front end" | "back end" | "innovación y gestión";
			descripcion: string;
		}[],
	);

	useEffect(() => {
		console.log(`Edito ${verEditar ? "avierto" : "cerrado"}`);
		console.log(`ID de buca: ${buscaID}`);

		fetch(API_VIDEOS)
			.then((resputa) => resputa.json())
			.then((datos) => {
				setDatosVideo(datos);
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
	}, [verEditar, buscaID]);

	return (
		<>
			<ContextoDatos.Provider
				value={{
					ID: { valor: buscaID, setValor: setBuscaID },
					datosVideo: datosVideo,
				}}
			>
				<Banner />
				<article
					className={clsx(
						"w-full border-t-4  border-solid border-[#2271D1]  pt-[80px]",
					)}
				>
					<Categoria grupo="front end">
						{datosVideo
							.filter((dato) => dato.grupo === "front end")
							.map((dato) => (
								<Card
									key={`${dato.id}::${dato.grupo}`}
									id={dato.id}
									imagen={{
										src: dato.imagen,
										alt: dato.titulo,
									}}
									grupo={dato.grupo}
									setValor={setVerEditar}
								/>
							))}
					</Categoria>

					<Categoria grupo="back end">
						{datosVideo
							.filter((dato) => dato.grupo === "back end")
							.map((dato) => (
								<Card
									key={`${dato.id}::${dato.grupo}`}
									id={dato.id}
									imagen={{
										src: dato.imagen,
										alt: dato.titulo,
									}}
									grupo={dato.grupo}
									setValor={setVerEditar}
								/>
							))}
					</Categoria>

					<Categoria grupo="innovación y gestión">
						{datosVideo
							.filter((dato) => dato.grupo === "innovación y gestión")
							.map((dato) => (
								<Card
									key={`${dato.id}::${dato.grupo}`}
									id={dato.id}
									imagen={{
										src: dato.imagen,
										alt: dato.titulo,
									}}
									grupo={dato.grupo}
									setValor={setVerEditar}
								/>
							))}
					</Categoria>
				</article>

				{verEditar && <Editar setValor={setVerEditar} />}
			</ContextoDatos.Provider>
		</>
	);
};

export default Home;
