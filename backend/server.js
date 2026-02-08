import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { getLocalResponse } from "./localResponder.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// OpenAI client (AI enhancement layer)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper: should we refuse (medication / diagnosis / emergency)?
function isUnsafeMedicalRequest(message) {
  const msg = message.toLowerCase();
  return (
    msg.includes("medicine") ||
    msg.includes("tablet") ||
    msg.includes("drug") ||
    msg.includes("dosage") ||
    msg.includes("diagnose") ||
    msg.includes("emergency") ||
    msg.includes("faint") ||
    msg.includes("severe bleeding")
  );
}

// Chat route (HYBRID LOGIC)
app.post("/chat", async (req, res) => {
  const { message, language = "English" } = req.body;

  // Hard safety boundary (always enforced)
  if (isUnsafeMedicalRequest(message)) {
    return res.json({
      reply:
        "I can’t help with medications, diagnosis, or emergencies. For these concerns, it’s important to consult a qualified healthcare professional.",
    });
  }

  // Try AI FIRST (if available)
  try {
    const systemPrompt = `
You are a menstrual health information assistant.

STRICT RULES:
- Provide general, educational information only.
- Do NOT diagnose conditions.
- Do NOT recommend medications or treatments.
- Do NOT give emergency instructions.
- If unsure, ask for clarification.
- Be calm, respectful, and supportive.
- Respond in ${language}.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    return res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    // AI unavailable → fall back safely
    console.warn("AI unavailable, using local responder:", error.code);

    const localReply = getLocalResponse(message, language);

    return res.json({
      reply: localReply,
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
