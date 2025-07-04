import { useState } from 'react';
import type { Slot } from "../types/Slot";

interface SlotManagerProps {
    slots: Slot[];
    setSlots: (slots: Slot[]) => void;
}

export const SlotManager = ({ slots, setSlots }: SlotManagerProps) => {
    const [newSlotTime, setNewSlotTime] = useState<string>('');

    const formatTime = (date: string | Date) => {
        const d = typeof date === 'string' ? new Date(date) : date;
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleAddSlot = () => {
        if (newSlotTime) {
            const slot: Slot = {
                id: Date.now().toString(),
                gameId: 'temp',
                startTime: new Date(`1970-01-01T${newSlotTime}:00`),
                endTime: new Date(`1970-01-01T${newSlotTime}:00`),
                isBooked: false
            };
            setSlots([...slots, slot]);
            setNewSlotTime('');
        }
    };

    const handleRemoveSlot = (slotId: string) => {
        setSlots(slots.filter(slot => slot.id !== slotId));
    };

    return (
        <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Créneaux disponibles *
            </label>
            <div className="flex gap-2 mb-2">
                <input
                    type="time"
                    value={newSlotTime}
                    onChange={(e) => setNewSlotTime(e.target.value)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <button
                    type="button"
                    onClick={handleAddSlot}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    Ajouter
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {slots.map((slot) => (
                    <div key={slot.id} className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        <span className="text-gray-800 dark:text-gray-200">
                            {formatTime(slot.startTime)}
                        </span>
                        <button
                            type="button"
                            onClick={() => handleRemoveSlot(slot.id)}
                            className="ml-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};