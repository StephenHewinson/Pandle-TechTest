import { setup } from "./server.js";

const { start } = await setup();
await start();