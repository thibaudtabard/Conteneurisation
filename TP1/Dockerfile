# 1 avec alpnie pour gagner en taille d'image
FROM node:18-alpine

# 2 défini un dossier de travail
WORKDIR /app

# 3 On copie les fichiers package.json et package-lock.json 
COPY package*.json ./

# 4 On installe les dépendances
RUN npm install --omit=dev

# 5 On copie le reste 
COPY . .

# 6 On lance le script
RUN npm run build

# 7 Sécurité : on crée un dossier data attendu par ton code
RUN mkdir -p /app/data && chown -R node:node /app

# 8 le port
EXPOSE 3000

# 9 Sécurité :bascule sur l'utilisateur non-root
USER node

# 10 démarrage
CMD ["node", "dist/index.js"]