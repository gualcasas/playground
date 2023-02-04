import Koa from "koa";
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "Hello Worlddd";
});

try {
    app.listen(8080);
    console.log("\n\nListening on: http://localhost:8080\n\n");
} catch (error) {
    console.log("server closed - error: ", error);
}
