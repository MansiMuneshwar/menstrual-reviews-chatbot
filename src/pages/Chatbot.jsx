import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Greeting text per language
  const greetings = {
    en: "Hi 👋 I’m your Menstrual Health Assistant. You can ask me anything about periods, pain, hygiene, or cycles.",
    hi: "नमस्ते 👋 मैं आपकी मासिक धर्म स्वास्थ्य सहायक हूँ। आप पीरियड्स, दर्द और स्वच्छता के बारे में पूछ सकती हैं।",
    ta: "வணக்கம் 👋 நான் உங்கள் மாதவிடாய் சுகாதார உதவியாளர்.",
    te: "నమస్తే 👋 నేను మీ మాసిక ఆరోగ్య సహాయకుడిని.",
    bn: "নমস্কার 👋 আমি আপনার মাসিক স্বাস্থ্য সহকারী।",
    mr: "नमस्कार 👋 मी तुमची मासिक पाळी आरोग्य सहाय्यक आहे.",
    gu: "નમસ્તે 👋 હું તમારી માસિક આરોગ્ય સહાયક છું.",
    kn: "ನಮಸ್ಕಾರ 👋 나는 ನಿಮ್ಮ ಮಾಸಿಕ ಆರೋಗ್ಯ ಸಹಾಯಕ."
  };

  // Initial greeting when language changes
  useEffect(() => {
    setMessages([
      { sender: "bot", text: greetings[language] }
    ]);
  }, [language]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message to backend AI
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setMessages(prev => [...prev, { sender: "bot", text: "Typing..." }]);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: input,
          language: language
        })
      });

      const data = await response.json();

      // Remove "Typing..."
      setMessages(prev => prev.slice(0, -1));

      // Add AI reply
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: data.reply }
      ]);

    } catch (error) {
      // Remove "Typing..."
      setMessages(prev => prev.slice(0, -1));

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Sorry, I’m unable to respond right now. Please try again later."
        }
      ]);
    }

    setInput("");
  };

  return (
    <div className="chatbot-page">
      {/* Header */}
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

      {/* Chat window */}
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
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

      {/* Disclaimer */}
      <p className="chatbot-disclaimer">
        ⚠️ This chatbot provides general menstrual health guidance only.
        It does not replace professional medical advice.
        Please consult a doctor for serious concerns.
      </p>
    </div>
  );
}
