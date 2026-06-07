import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "Do I need a doctor's referral for physiotherapy?",
    answer: "In most cases, no. You can book an appointment directly with our clinic. However, if you are planning to use health insurance, your specific provider might require a referral for coverage. We recommend checking with them first."
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Please wear loose, comfortable clothing like athletic wear (t-shirts, shorts, or sweatpants). This allows our physiotherapists to easily assess your movement and access the area being treated."
  },
  {
    question: "How long does a treatment session last?",
    answer: "Initial assessments usually take between 45 to 60 minutes. Follow-up treatment sessions typically last 30 to 45 minutes, depending on your personalized treatment plan."
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we work with most major health insurance providers. Please contact our front desk with your insurance details prior to your first visit so we can verify your coverage and benefits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // If the clicked FAQ is already open, close it (set to null). Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="faq-container">
        <div className="faq-header text-center">
          <h4 className="section-subtitle">GOT QUESTIONS?</h4>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle-text">Find answers to common questions about your visit, treatments, and insurance.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="faq-icon" size={20} />
                ) : (
                  <ChevronDown className="faq-icon" size={20} />
                )}
              </button>
              
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}