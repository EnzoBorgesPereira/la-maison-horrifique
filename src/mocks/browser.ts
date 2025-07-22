import { setupWorker } from "msw/browser";
import { getMockGames } from "./game";

const handlers = [
    getMockGames(),
]
export const worker = setupWorker(...handlers);