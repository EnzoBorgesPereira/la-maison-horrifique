import { http, HttpHandler, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import type { Session } from "../types/Session";

const sessionId = faker.string.uuid();

const sessions = [
    {
        id: sessionId,
        theme: faker.lorem.sentence(),
        duration: faker.number.int({ min: 30, max: 120 }),
        price: faker.number.int({ min: 10, max: 100 }),
        minimunParticipants: faker.number.int({ min: 1, max: 6 }),
        slots: [
            {
                id: faker.string.uuid(),
                sessionId: sessionId,
                startTime: faker.date.future(),
                endTime: faker.date.future(),
                isBooked: faker.datatype.boolean()
            }
        ]
    }
] satisfies Session[];

export function getMockSessions(): HttpHandler {
    return http.get("*/api/v1/sessions", async () => {
        return HttpResponse.json(sessions);
    });
}