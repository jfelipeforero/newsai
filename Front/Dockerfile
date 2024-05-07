# Etapa de construcción (para instalar dependencias y compilar la aplicación)
FROM node:lts AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

ARG REACT_APP_BASE_URL_BACKEND

ENV REACT_APP_BASE_URL_BACKEND $REACT_APP_BASE_URL_BACKEND

# Compilar la aplicación (si es necesario)
RUN npm run build

# Etapa de producción (para ejecutar la aplicación)
FROM nginx:alpine AS production

# Copiar el resultado de la compilación de la etapa de construcción a la imagen de producción
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]
