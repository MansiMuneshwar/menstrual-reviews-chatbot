const responses = {
  mood: [
    "Mood changes during periods are common due to hormonal fluctuations. These changes can affect emotions and energy levels.",
    "Hormonal shifts during the menstrual cycle can influence mood, making some people feel more emotional or irritable.",
    "Feeling emotionally sensitive during periods is normal and often linked to natural hormonal changes."
  ],

  pain: [
    "Menstrual cramps happen due to uterine contractions. Mild to moderate pain is common during periods.",
    "Lower abdominal pain during periods is usually caused by the uterus tightening to shed its lining.",
    "Some discomfort during menstruation is normal, but severe pain should be checked by a doctor."
  ],

  delay: [
    "Periods can be delayed due to stress, lifestyle changes, or hormonal variations.",
    "Occasional delays in the menstrual cycle are common and usually not a cause for concern.",
    "Menstrual cycles may vary slightly from month to month."
  ],

  flow: [
    "Normal menstrual bleeding usually lasts between 3 to 7 days, though this can vary.",
    "Flow can differ each cycle and may be influenced by hormones or stress.",
    "Very heavy or unusually long bleeding may need medical attention."
  ],

  hygiene: [
    "Maintaining good menstrual hygiene is important to prevent infections.",
    "Changing sanitary products regularly helps support menstrual health.",
    "Proper hygiene during periods can reduce discomfort and health risks."
  ],

  general: [
    "Menstrual experiences can vary widely, and many changes are completely normal.",
    "I can help answer general questions about menstrual health.",
    "If something feels unusual or concerning, consulting a healthcare professional is recommended."
  ]
};

function detectTopic(message) {
  const msg = message.toLowerCase();

  if (msg.includes("mood") || msg.includes("emotional") || msg.includes("irritated")) return "mood";
  if (msg.includes("pain") || msg.includes("cramp")) return "pain";
  if (msg.includes("late") || msg.includes("delay")) return "delay";
  if (msg.includes("flow") || msg.includes("bleeding")) return "flow";
  if (msg.includes("hygiene") || msg.includes("clean")) return "hygiene";

  return "general";
}

export function getLocalResponse(message) {
  const topic = detectTopic(message);
  const options = responses[topic];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
