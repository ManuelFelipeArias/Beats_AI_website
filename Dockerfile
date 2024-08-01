# Usa una imagen base de Node.js
FROM node:18 as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el contenido de tu directorio actual al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Compila la aplicación React para producción
RUN npm run build

# Usa una imagen base de Node.js para servir la aplicación usando `vite preview`
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos compilados de la aplicación React desde la etapa de construcción
COPY --from=build /app /app

# Instala Vite globalmente para poder usar `vite preview`
RUN npm install -g vite

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4173

# Comando para iniciar Vite Preview
CMD ["vite", "preview"]
