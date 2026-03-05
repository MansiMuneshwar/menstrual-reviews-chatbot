import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const greetings = {
    en: "Hi 👋 I’m your Menstrual Health Assistant. You can ask me anything about periods, pain, hygiene, or cycles.",
    hi: "नमस्ते 👋 मैं आपकी मासिक धर्म स्वास्थ्य सहायक हूँ।",
    ta: "வணக்கம் 👋 நான் உங்கள் மாதவிடாய் சுகாதார உதவியாளர்.",
    te: "నమస్తే 👋 నేను మీ మాసిక ఆరోగ్య సహాయకుడిని.",
    bn: "নমস্কার 👋 আমি আপনার মাসিক স্বাস্থ্য সহকারী।",
    mr: "नमस्कार 👋 मी तुमची मासिक पाळी आरोग्य सहाय्यक आहे.",
    gu: "નમસ્તે 👋 હું તમારી માસિક આરોગ્ય સહાયક છું.",
    kn: "ನಮಸ್ಕಾರ 👋 ನಾನು ನಿಮ್ಮ ಮಾಸಿಕ ಆರೋಗ್ಯ ಸಹಾಯಕ."
  };

  useEffect(() => {
    setMessages([{ sender: "bot", text: greetings[language] }]);
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    setInput("");

    try {
      const response = await fetch(
        "https://menstrual-reviews-backend.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage.text,
            language: language
          })
        }
      );

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        { sender: "bot", text: data.reply }
      ]);

    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Sorry, I’m unable to respond right now."
        }
      ]);
    }
  };

  return (
    <div className="chatbot-page">

      <div className="chatbot-header">
        <h2>Menstrual Health Assistant</h2>

        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="bn">Bengali</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujarati</option>
          <option value="kn">Kannada</option>
        </select>
      </div>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask your question here..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />

        <button onClick={handleSend}>Send</button>
      </div>

      <p className="chatbot-disclaimer">
        ⚠️ This chatbot provides general menstrual health guidance only.
        It does not replace professional medical advice.
        Please consult a doctor for serious concerns.
      </p>

    </div>
  );
}