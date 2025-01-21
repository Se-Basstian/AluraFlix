# AluraFlix 🇵🇪 🇵🇪 🇵🇪

Una página  web donde podemos guardar  nuestros vídoes favoritos de youtube.<br/><br/>
Puedes probarlo en el siguiente enlace [AluraFlix](https://alura-flix-seven-navy.vercel.app/).
Esta página usa un fakeAPI por lo que algunas caracteristicas no están disponibles. para poder usarlo en tu totalidad le recomiendo que siga los siguientes paso.

## Tabla de contenido

1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
3. [Uso](#uso)

## Requisitos

- [Bun](https://bun.sh/): Conjunto de herramientas de Javascript y Typescript.
- [Zed](https://zed.dev/): Editor de código, (puede usar el que desee).

## Instalación

1. Clona el repositorio:
   ```bash
   gh repo clone Se-Basstian/AluraFlix
   ```
2. Navega a la carpeta del proyecto:
    ```bash
    cd AluraFlix/
    ```
3. Instala las dependencias:
    ```bash
    bun install
    ```

## Uso
### Modificamos la varable global de API_VIDEOS ubicado en el archivo «variablesGlobales»:
```text
/
├── src/
│   └── variablesGlobales.ts
│   ·.
|   ·
└── package.json
```
```typescript
const API_VIDEOS = "http://localhost:3000/videos";
```

### Para iniciar el proyecto usa el siguiente comando:

1. Inicimas el json-server que servidara como una base de datos falsa:
```bash
bunx json-server --watch db.json
```
2. Ahora podemos iniciar el el proyecto en modo desarrollo, con el siguiente comando:
```bash
bun run dev
```
