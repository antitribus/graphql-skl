FROM node:20-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json antes para aproveitar cache
COPY package*.json ./

# Instalar dependências
RUN npm install --only=production

# Copiar o restante dos arquivos
COPY . .

# Expor as portas do container
EXPOSE 4000 4001

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]