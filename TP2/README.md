1. Lancer toute la stack (en arrière-plan) :
docker compose up --build -d

3. Vérifier que tes 4 services tournent en même temps :
docker compose ps

3. Vérifier le Frontend (et tester l'envoi d'un message) :
Ouvre ton navigateur sur : http://localhost:8080

4. Vérifier que l'API est bien connectée à la base de données :
Ouvre ton navigateur sur : http://localhost:3000/health (doit afficher {"status":"ok"})

5. Vérifier l'accès à Adminer :
Ouvre ton navigateur sur : http://localhost:8081

6. Arrêter toute la stack :
docker compose down