const responses = {
  mood: {
    English: [
      "Mood changes during periods are common due to hormonal fluctuations.",
      "Hormonal shifts can affect emotions and energy levels.",
      "Feeling emotional during periods is normal."
    ],
    Hindi: [
      "पीरियड्स के दौरान मूड बदलना सामान्य है।",
      "हार्मोनल बदलाव भावनाओं को प्रभावित कर सकते हैं।",
      "इस समय भावुक महसूस करना सामान्य है।"
    ],
    Marathi: [
      "पाळीच्या वेळी मूड बदलणे सामान्य आहे.",
      "हार्मोन्समुळे भावना बदलू शकतात.",
      "या काळात भावनिक वाटणे सामान्य आहे."
    ],
    Tamil: [
      "மாதவிடாய் போது மனநிலை மாற்றங்கள் சாதாரணம்.",
      "ஹார்மோன் மாற்றங்கள் உணர்வுகளை பாதிக்கலாம்."
    ],
    Telugu: [
      "మాసిక సమయంలో మూడ్ మార్పులు సాధారణం.",
      "హార్మోన్ మార్పులు భావోద్వేగాలను ప్రభావితం చేస్తాయి."
    ],
    Bengali: [
      "পিরিয়ডের সময় মুড পরিবর্তন স্বাভাবিক।",
      "হরমোন পরিবর্তনের কারণে এমন হয়।"
    ],
    Gujarati: [
      "પિરિયડ દરમિયાન મૂડ બદલાવ સામાન્ય છે.",
      "હોર્મોનલ ફેરફારથી આવું થાય છે."
    ],
    Kannada: [
      "ಮಾಸಿಕದ ವೇಳೆ ಮನಸ್ಥಿತಿ ಬದಲಾವಣೆ ಸಾಮಾನ್ಯವಾಗಿದೆ.",
      "ಹಾರ್ಮೋನ್ ಬದಲಾವಣೆ ಇದಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು."
    ]
  },

  pain: {
    English: [
      "Menstrual cramps are common. Use a heating pad and rest.",
      "Lower abdominal pain happens due to uterine contractions."
    ],
    Hindi: [
      "पीरियड्स में दर्द सामान्य है। गरम पानी की थैली का उपयोग करें।"
    ],
    Marathi: [
      "पाळीतील वेदना सामान्य असतात. गरम पाण्याची पिशवी वापरा."
    ],
    Tamil: [
      "மாதவிடாய் வலி சாதாரணம். ஓய்வு எடுத்துக் கொள்ளுங்கள்."
    ],
    Telugu: [
      "మాసిక నొప్పి సాధారణం. విశ్రాంతి తీసుకోండి."
    ],
    Bengali: [
      "পিরিয়ডের সময় ব্যথা স্বাভাবিক। বিশ্রাম নিন।"
    ],
    Gujarati: [
      "પિરિયડમાં દુખાવો સામાન્ય છે. આરામ કરો."
    ],
    Kannada: [
      "ಮಾಸಿಕದ ವೇಳೆ ನೋವು ಸಾಮಾನ್ಯವಾಗಿದೆ. ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ."
    ]
  },

  delay: {
    English: [
      "Periods can be delayed due to stress or hormonal changes."
    ],
    Hindi: [
      "पीरियड्स देरी से आ सकते हैं, यह सामान्य है।"
    ],
    Marathi: [
      "पाळी उशिरा येणे सामान्य असू शकते."
    ],
    Tamil: [
      "மாதவிடாய் தாமதமாக வருவது சாதாரணம்."
    ],
    Telugu: [
      "మాసికం ఆలస్యంగా రావడం సాధారణం."
    ],
    Bengali: [
      "পিরিয়ড দেরিতে আসা স্বাভাবিক।"
    ],
    Gujarati: [
      "પિરિયડ મોડું આવવું સામાન્ય છે."
    ],
    Kannada: [
      "ಮಾಸಿಕವು ತಡವಾಗಿ ಬರಬಹುದು, ಇದು ಸಾಮಾನ್ಯ."
    ]
  },

  flow: {
    English: [
      "Normal menstrual flow lasts 3–7 days."
    ],
    Hindi: [
      "सामान्य पीरियड्स 3 से 7 दिन तक चलते हैं।"
    ],
    Marathi: [
      "सामान्य पाळी ३ ते ७ दिवस चालते."
    ],
    Tamil: [
      "சாதாரண மாதவிடாய் 3–7 நாட்கள் நீடிக்கும்."
    ],
    Telugu: [
      "సాధారణంగా మాసికం 3–7 రోజులు ఉంటుంది."
    ],
    Bengali: [
      "সাধারণত পিরিয়ড ৩-৭ দিন স্থায়ী হয়।"
    ],
    Gujarati: [
      "સામાન્ય પિરિયડ ૩-૭ દિવસ રહે છે."
    ],
    Kannada: [
      "ಸಾಮಾನ್ಯ ಮಾಸಿಕ 3-7 ದಿನಗಳವರೆಗೆ ಇರುತ್ತದೆ."
    ]
  },

  hygiene: {
    English: [
      "Maintain good hygiene during periods."
    ],
    Hindi: [
      "पीरियड्स के दौरान स्वच्छता बनाए रखें।"
    ],
    Marathi: [
      "पाळीच्या वेळी स्वच्छता राखा."
    ],
    Tamil: [
      "மாதவிடாய் போது சுத்தமாக இருங்கள்."
    ],
    Telugu: [
      "మాసిక సమయంలో పరిశుభ్రత పాటించండి."
    ],
    Bengali: [
      "পিরিয়ডের সময় পরিষ্কার-পরিচ্ছন্ন থাকুন।"
    ],
    Gujarati: [
      "પિરિયડ દરમિયાન સ્વચ્છતા રાખો."
    ],
    Kannada: [
      "ಮಾಸಿಕದ ವೇಳೆ ಸ್ವಚ್ಛತೆಯನ್ನು ಕಾಪಾಡಿ."
    ]
  },

  general: {
    English: [
      "Menstrual experiences vary and many changes are normal.",
      "I can help answer general questions about menstrual health."
    ],
    Hindi: [
      "मासिक धर्म में बदलाव सामान्य होते हैं।"
    ],
    Marathi: [
      "मासिक पाळीत बदल होणे सामान्य आहे."
    ],
    Tamil: [
      "மாதவிடாய் மாற்றங்கள் சாதாரணம்."
    ],
    Telugu: [
      "మాసిక మార్పులు సాధారణం."
    ],
    Bengali: [
      "মাসিক পরিবর্তন স্বাভাবিক।"
    ],
    Gujarati: [
      "માસિક ફેરફાર સામાન્ય છે."
    ],
    Kannada: [
      "ಮಾಸಿಕ ಬದಲಾವಣೆಗಳು ಸಾಮಾನ್ಯ."
    ]
  }
};

// Detect topic
function detectTopic(message) {
  const msg = message.toLowerCase();

  if (msg.includes("mood") || msg.includes("emotional")) return "mood";
  if (msg.includes("pain") || msg.includes("cramp")) return "pain";
  if (msg.includes("late") || msg.includes("delay")) return "delay";
  if (msg.includes("flow") || msg.includes("bleeding")) return "flow";
  if (msg.includes("hygiene") || msg.includes("clean")) return "hygiene";

  return "general";
}

// MAIN FUNCTION
export function getLocalResponse(message, language = "English") {
  const topic = detectTopic(message);

  const langResponses = responses[topic][language] || responses[topic]["English"];

  const randomIndex = Math.floor(Math.random() * langResponses.length);

  return langResponses[randomIndex];
}