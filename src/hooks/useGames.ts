import { useState, useEffect } from "react";
import type { Game } from "../types/Game";

export function useGames(count: number) {
  const [games, setGames] = useState<Game[]>([]);
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  useEffect(() => {
    setStatus("loading");
    fetch(`/api/v1/games?nb=${count}`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => {
        setGames(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [count]);

  return { games, status };
}