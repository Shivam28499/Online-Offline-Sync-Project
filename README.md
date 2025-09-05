## Demo

## video
[video link] (https://drive.google.com/file/d/1G4e4OWoQbqrmqFL4f9_QJI2XpDvBzi0B/view?usp=sharing)
# Description  
The project demonstrates REST API development, database handling, and deployment using Node.js and JavaScript.

## Tech Stack
- Node.js
- Express.js
- MySQL / Sequelize ORM (Main Database)
- JavaScript
- SQLite (Use for Offline User Data)

## Install Dependencies

npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev

 ## 
