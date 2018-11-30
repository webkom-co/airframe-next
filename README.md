# react-dashboards
with Bootstrap 4 and next.js

## Launch Dev Server
1. Clone this repository - `git clone https://github.com/0wczar/react-ssr-dashboards.git`
2. Run `npm install`
3. Run `npm run dev`

## Build Production
1. Make sure the the `build-dist.sh` file has executable permissions (`chmod x+ ./build-dist.sh`);
2. Run the build file - `./build-dist.sh`
3. Upon success you should have the app files in the `./dist` folder.
4. Copy the `./dist` folder to the target node environment.
5. Set the appropriate PORT env variable and run on the remote machine `npm install && npm start`.
6. Your app should be ready to browse.
