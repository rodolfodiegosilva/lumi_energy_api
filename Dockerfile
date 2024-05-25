# Use a imagem oficial do Node.js como a imagem base
FROM node:20

# Instale netcat-openbsd
RUN apt-get update && apt-get install -y netcat-openbsd

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o script wait-for-it
COPY wait-for-it.sh .

# Torne o script executável
RUN chmod +x wait-for-it.sh

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação irá rodar
EXPOSE 3001

# Comando para rodar a aplicação
CMD ["./wait-for-it.sh", "host.docker.internal", "5432", "--", "npm", "start"]
