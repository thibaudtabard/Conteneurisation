1. Lancer toute la stack (en arrière-plan) :
docker compose up --build -d

2. Vérifier que tes 3 services tournent (et que cache n'expose aucun port) :
docker compose ps

3. Vérifier l'interface de TaskFlow :
Ouvre ton navigateur sur : http://localhost:8080

4. Vérifier l'API Node.js de TaskFlow :
Ouvre ton navigateur sur : http://localhost:3001/health

5. Arrêter toute la stack :
docker compose down