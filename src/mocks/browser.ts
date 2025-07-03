import { setupWorker } from "msw/browser";
import { getMockgames } from "./game";

const handlers = [
    getMockgames(),
]
export const worker = setupWorker(...handlers);