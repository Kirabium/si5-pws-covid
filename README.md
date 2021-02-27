# si5-pws-covid

Before any of these instructions, clone the repository. It is preferable to follow the order of the instructions as having the web app running without the server can cause some request errors on the front side.

## Node server

It is needed to have [docker](https://docs.docker.com/get-docker/) installed.

Then run the server by open a terminal in the root folder and running:
```bash
docker-compose build
docker-compose up
```

The server and mongo database should be running on localhost
note : the mongoDB image won't run on windows, you should execute docker in an Unix or Mac environment

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

