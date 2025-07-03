import { getMockSessions } from "./session";
import { setupWorker } from "msw/browser";

const handlers = [
    getMockSessions(),
]
export const worker = setupWorker(...handlers);