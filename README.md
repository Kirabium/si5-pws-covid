# si5-pws-covid

Before any of these instructions, clone the repository.

## Node server

Install [docker](https://docs.docker.com/get-docker/)

To run the server you should open a terminal in the root folder then run :
- docker-compose build
- docker-compose up

And the server + mongo should be running on localhost

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

