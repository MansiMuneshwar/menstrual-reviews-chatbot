import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Info.css";

export default function Info() {
  const [showMyths, setShowMyths] = useState(false);
  const toggleMyths = () => setShowMyths(!showMyths);
  const navigate = useNavigate();

  return (
    <div className="info-container">
      {/* Top-left Myths Button */}
      <button className="toggle-button-top" onClick={toggleMyths}>
        {showMyths ? "Hide Myths" : "Show Menstrual Myths"}
      </button>

      <section className="about-section">
        <h2 className="section-title">Understanding Menstruation</h2>

        {/* ✅ Ask Menstrual AI Button (fixed styling & spacing) */}
        <div className="chatbot-button-wrapper">
          <button
            className="chatbot-button"
            onClick={() => navigate("/chatbot")}
          >
            💬 Ask Menstrual AI
          </button>
          <p className="chatbot-subtext">
            Get answers about menstruation in a safe, supportive way.
          </p>
        </div>

        <div className="section-content">
          <p>
            The menstrual cycle is a biological process that prepares the female body
            for pregnancy. It includes menstruation, ovulation, and hormonal shifts.
            The cycle typically lasts between 28 to 35 days and can vary from person to person.
          </p>

          <div className="image-container">
            <img
              src="https://www.verywellhealth.com/thmb/5nFHcokyfOlmvSFEQwFZbILjJfc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LutealPhase-final-34f3515f58e744798cebbf4986581591.png"
              alt="Menstrual Cycle"
              className="cycle-image"
            />
          </div>

          <p>
            Girls and women may experience emotional and physical symptoms like cramps,
            fatigue, and mood swings. It's important to talk openly about it and break the stigma
            that surrounds menstruation.
          </p>
        </div>
      </section>

      <section className="societal-views-section">
        <h2 className="section-title">Societal Views on Menstruation</h2>
        <div className="section-content">
          <p>
            Across many societies, menstruation is still considered a taboo topic. In some cultures,
            menstruating women are seen as impure and are excluded from religious ceremonies, social events,
            and even daily activities.
          </p>
        </div>
      </section>

      <section className="cycle-phases-section">
        <h2 className="section-title">Phases of the Menstrual Cycle</h2>
        <div className="cycle-phases">
          {[
            {
              title: "Menstruation",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-first-phase.jpg",
              desc1: "The shedding of the uterine lining, typically lasting 3-7 days.",
              desc2: "Hormone levels drop, which causes the lining to shed."
            },
            {
              title: "Follicular Phase",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-follicular-phase.jpg",
              desc1: "Lasts from end of menstruation to ovulation.",
              desc2: "FSH triggers follicle growth; one matures into an egg."
            },
            {
              title: "Ovulation",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-ovulation-phase.jpg",
              desc1: "A mature egg is released from the ovary.",
              desc2: "Peak fertility phase."
            },
            {
              title: "Luteal Phase",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-luteal-phase.jpg",
              desc1: "Body prepares for pregnancy.",
              desc2: "If no fertilization, menstruation begins."
            }
          ].map((phase, i) => (
            <div className="phase" key={i}>
              <img src={phase.img} alt={phase.title} className="phase-image" />
              <h3>{phase.title}</h3>
              <p>{phase.desc1}</p>
              <p>{phase.desc2}</p>
            </div>
          ))}
        </div>
      </section>

      {showMyths && (
        <section className="myth-busting-section">
          <h2 className="section-title">Common Menstrual Myths</h2>
          <div className="myth-list">
            {[
              {
                title: "Menstrual Blood is Unclean",
                truth: "It's completely natural."
              },
              {
                title: "You Can’t Exercise During Periods",
                truth: "Exercise can actually help."
              }
            ].map((myth, i) => (
              <div className="myth" key={i}>
                <h3>Myth: {myth.title}</h3>
                <p><strong>Truth:</strong> {myth.truth}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

