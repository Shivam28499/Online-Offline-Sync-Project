## Demo

The project demonstrates REST API development, database handling, and deployment using Node.js and JavaScript.
[screenshot link]
(https://drive.google.com/file/d/1G5v8z_PBt4s1bYKW_NS3-gLbgNsJvX2f/view?usp=sharing)
(https://drive.google.com/file/d/1GD4JVaWhs4GxWbdxBg4mle87Np3qjzwY/view?usp=sharing)
(https://drive.google.com/file/d/1G6_z6qz7B4UjxR8876eOCyLKBE9JMUQm/view?usp=sharing)
(https://drive.google.com/file/d/1GVxSaeUc8ydgKgTOuS0R-wOHw2DXh2A3/view?usp=sharing)
(https://drive.google.com/file/d/1GK2LQ_QpPdvYTe1CYc7e-b9anhSO9jsy/view?usp=sharing)
(https://drive.google.com/file/d/1G_ZDDVF52YixlQgcjCFxPOLNHpfmfYwC/view?usp=sharing)
(https://drive.google.com/file/d/1GddDmkNJqs0YG0HQZzIs-jr9bETxFiHC/view?usp=sharing)
(https://drive.google.com/file/d/1GCy_9o5fnrGhfrReGdJu7n_-Q7vpunU_/view?usp=sharing)

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
