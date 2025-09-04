const express = require('express');
const {Server} = require('./config/index');
const apiRouter = require('./routes');
const TaskSQLite = require('./model-sqlite/task-sqlite');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRouter);

TaskSQLite.sync().then(() => {
    console.log("SQLite table ready");
    app.listen(Server.PORT, async () => {
    console.log("Server is up PORT", Server.PORT);
    });
}).catch((err) => {
    console.log("Error syncing SQLite", err.message);
})

