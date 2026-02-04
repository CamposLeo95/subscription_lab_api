# =========================
# Stage 1 — Build
# =========================

# Build que irá compilar o código e instalar as dependências
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de dependências 
COPY package*.json ./
# Instala as dependências
RUN npm ci

# Copia todo o código fonte(App) para dentro do container
COPY . .
# Roda o build do projeto
RUN npm run build
# Remove as dependências de desenvolvimento para otimizar o tamanho da imagem final
RUN npm prune --omit=dev

# =========================
# Stage 2 — Runtime
# =========================

# Imagem final mais leve para rodar a aplicação
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app
# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Copia apenas os arquivos necessários da build feita no estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/server.js"]