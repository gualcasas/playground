import Koa from "koa";
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "Hello Worlddd";
});

try {
    app.listen(3000);
    console.log("\n\nListening on: http://localhost:3000\n\n");
} catch (error) {
    console.log("server closed - error: ", error);
}
