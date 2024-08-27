"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export const SearchInput = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (input === "") return;

    router.push(`/game/search/${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        className="bg-slate-200 outline-none w-11/12 "
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Procurando algum jogo?..."
      />
      <button type="submit">
        <FiSearch color="#ea580c" size={24} />
      </button>
    </form>
  );
};
