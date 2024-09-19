import { Hono } from "hono";
import { handle } from "hono/vercel";


export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get ("/hello", (c) => {
    return c.json ({hello :"World"});
});

// Export GET và POST để xử lý trên Vercel Edge
export const GET = handle(app);
export const POST = handle(app);
