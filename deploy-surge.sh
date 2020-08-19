# build react app
npm run build

# move to file build
cd build

#Clone index.html to 200.html
cp index.html 200.html
# start deploy
surge . phamkha-booking-movie.surge.sh