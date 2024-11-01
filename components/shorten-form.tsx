"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(url);
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="space-y-4">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-12"
          type="url"
          placeholder="https://www.example.com"
          required
        />
        <Button className="w-full p-2" type="submit">
          Generar URL
        </Button>
      </div>
    </form>
  );
}
