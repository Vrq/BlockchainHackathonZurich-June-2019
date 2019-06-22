#/bin/sh
ganache-cli -p 7545 -m sbhack  --blockTime 1&
cd truffle_project/
truffle migrate --network development --reset &
cd ..
cd client
npm start &
cd ..
