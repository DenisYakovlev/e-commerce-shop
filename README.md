# Simple shop app

Webapp with cart, user/admin menu, item search and purchase.

## Technologies used

Ruby on rails, React, Bootstrap, Postgresql, Docker, Docker-compose, Nginx;

## Installation
Before you begin, ensure than you have the following installed:  

* **Git**
* **Docker**  
* **Docker Compose**

### Setting Up the Application  
Clone the Repository  

```
git clone https://github.com/DenisYakovlev/e-commerce-shop.git 
```

### Enviroment variables

In backend directory create .env file and put your values:

* PORT - port of application
* POSTGRES_USERNAME - database user
* POSTGRES_PASSWORD - database password
* POSTGRES_HOST - database host
* POSTGRES_PORT - database port
* JWT_SECRET - secret key for encoding/decoding jwt tokens

In frontend directory create .env file and put your values:
* REACT_APP_API_BASE_URL - url of backend server

**If you want to run in production**, create .env.prod files for those directories and fill with your values
Also, go to nginx/nginx.conf if you want to change basic config for proxy server of your application

## Launching
You can run production build from root directory with:

```
docker-compose -f docker-compose up --build
```
