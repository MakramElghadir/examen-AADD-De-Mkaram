# examen-AADD-De-Mkaram

VPS: Dev8
IP: 172.233.124.12
ssh: root@172.233.124.12
password: cyber@Mercedarias!

Step 1: I created `index.html` (which will just display `login clear`) and `server.js` (which will start a server and uses CORS). On top of installing express (and express cors) and initiating `npm` in the command.

Step 2: I establish a secure shell by writing to the computer's terminal `ssh root@172.233.124.12` (and enter password `cyber@Mercedarias!`). I then git clone the repository there, enter the newly created folder with `cd examen-AADD-De-Mkaram`, install express/initiate npm again (for good measure) and then successfully open the server with `node server.js`.

Step 3: I then verify is CORS works by writing in the terminal `curl -H "Origin: http://example.com" -X GET http://172.233.124.12:3000`