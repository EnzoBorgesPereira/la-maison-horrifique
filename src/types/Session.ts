import type { Slot } from "./Slot";

export type Session = {
    id: string;
    theme: string;
    duration: number;
    price: number;
    minimunParticipants: number;
    slots: Slot[];
};