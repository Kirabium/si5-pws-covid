# si5-pws-covid

Before any of these instructions, clone the repository. It is preferable to follow the order of the instructions as having the web app running without the server can cause some request errors on the front side.

## Node server

It is needed to have [docker](https://docs.docker.com/get-docker/) installed.

Then run the server by open a terminal in the root folder and running:
```bash
docker-compose build
docker-compose up
```

The server and mongo database are now running on localhost
note : the mongoDB image won't run on windows (exit 14), you should execute docker in an Unix or Mac environment

Because of the memory constrainst, the database is not populated by default, you should run the following queries (in PostMan or other) :
POST : http://localhost:2023/db/init
POST : http://localhost:2023/db/init/hp

with an empty body

The backend is now ready to work.

## Running the web app

To run this example in production or development mode you have to make sure, `npm` and `nodejs` are installed globally on your machine. After that you can install all necessary dependencies for running this example.

0. Check if npm is installed. Otherwise please [install `node.js` and `npm`](https://nodejs.org/en/download/package-manager/). Then just navigate to the *front* folder using these command lines:
```bash
npm -v
cd front
```

1. Install all dependencies listed in [`package.json`](front/package.json):
```bash
npm install
```

2. Run the web application locally with the following command line:
```bash
npm start
```

Note : For some reasons, the CORS can block the queries of the front to the back-end, if so, you will not have any data and the console will give you an error related to CORS. To solve this issue you can install the following extensions on your Browser : 

> [Chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
> 
> [Edge](https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag)
> 
> [Firefox](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)

and add localhost in the whitelist then toggle on the extension.

## Architecture
![Sans titre](https://user-images.githubusercontent.com/32424601/109426505-4e6ee580-79ee-11eb-8eb7-88df8420d8bc.png)

We got the React app as front-end (client-side), a NodeJS application using express and a MongoDB both running in containers in Docker environment
