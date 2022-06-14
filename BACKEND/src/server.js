import app from "./app.js";

const port = process.env.SERVER_PORT

app.listen(port, () => console.log(`Server on! Amem? AMEM!!! Porta => ${port} `))