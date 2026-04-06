import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js";
import app from "./app";

app.use(
  "*",
  initAuthConfig((c) => ({
    secret: c.env.AUTH_SECRET,
    providers: [],
  })),
);

app.use("/api/auth/*", authHandler());

app.use("/api/*", verifyAuth());

app.get("/api/protected", (c) => {
  const auth = c.get("authUser");
  return c.json(auth);
});
