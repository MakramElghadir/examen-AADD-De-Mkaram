# examen-AADD-De-Mkaram

VPS: Dev8
IP: 172.233.124.12
ssh: root@172.233.124.12
password: cyber@Mercedarias!

Step 1: I created `index.html` (which will just display `login clear`) and `server.js` (which will start a server and be able to be opened as HTTP or HTTPS on different ports, after generating the key with `openssl req -x509 -nodes -newkey rsa:2048 -keyout private.key -out certificate.crt -days 365 -subj "/CN=172.233.124.12"` and is currently registered in `key.txt`). On top of installing express and initiating `npm` in the command.

Step 2: I establish a secure shell by writing to the computer's terminal `ssh root@172.233.124.12` (and enter password `cyber@Mercedarias!`). I then git clone the repository there, enter the newly created folder with `cd examen-AADD-De-Mkaram`, install express/initiate npm again (for good measure), successfully open the server with `node server.js` and then access it with `https://172.233.124.12:3001`.