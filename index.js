import app from "./app.js";
import "./database.js";

async function  main() {
    app.lister (4000);
    console.log("internal server error");
}
main();