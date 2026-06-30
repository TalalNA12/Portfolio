"use client";
import { useState, useEffect } from "react";

export function useGithubActivity(repo: string) {
  const [commits, setCommits] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}/commits?per_page=3`)
      .then((res) => res.json())
      .then((data) => setCommits(data))
      .catch((err) => console.error("Telemetry link failed:", err));
  }, [repo]);

  return commits;
}