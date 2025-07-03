import { http, HttpHandler, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { Difficulty, type Game } from "../types/Game";

const games = Array.from({ length: 5 }, () => {
    const gameId = faker.string.uuid();
    return {
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        duration: faker.number.int({ min: 30, max: 120 }),
        price: faker.number.int({ min: 10, max: 100 }),
        minPlayers: faker.number.int({ min: 2, max: 3 }),
        maxPlayers: faker.number.int({ min: 3, max: 6 }),
        difficulty: faker.helpers.arrayElement(Difficulty),
        description: faker.lorem.paragraph(),
        imageUrl: faker.image.urlLoremFlickr({ category: 'nature', width: 640, height: 480 }),
        slots: [
            {
                id: faker.string.uuid(),
                gameId: gameId,
                startTime: faker.date.future(),
                endTime: faker.date.future(),
                isBooked: faker.datatype.boolean()
            }
        ]
    }
}) satisfies Game[];

export function getMockGames(): HttpHandler {
    return http.get("*/api/v1/games", async () => {
        return HttpResponse.json(games);
    });
}