1. Construire l'image :

docker build -t conteneurisation-tp1 

2. Lancer le conteneur :

docker run --rm -p 3000:3000 conteneurisation-tp1

3. Vérifier la taille de l'image (doit faire moins de 200 Mo) :
docker images conteneurisation-tp1


4. Vérifier que le conteneur est bien actif :
docker ps


5. Vérifier l'application web :
Ouvre ton navigateur sur : http://localhost:3000