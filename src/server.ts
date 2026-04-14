import app from "./app";
import { env } from "./config/env";

const PORT = env.port;
const HOST = env.host;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});