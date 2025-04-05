"use client";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulasi respons AI
    const botResponse = await getBotResponse(input);
    setMessages((prev) => [...prev, botResponse]);
  };

  return (
    <div className="absolute bottom-6 right-6 w-96 p-4 bg-white/30 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-lg ${
              msg.sender === "user"
                ? "bg-red-800 text-white self-end"
                : "bg-gray-100 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-red-800 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}

// Fungsi untuk mendapatkan respons dari AI
const getBotResponse = async (input: string) => {
  // Di sini Anda dapat mengintegrasikan dengan backend AI Anda
  // Untuk simulasi, kita akan mengembalikan respons statis
  return { text: "Thinking...", sender: "bot" };
};
