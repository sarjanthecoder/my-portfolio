import React, { useState } from 'react';
import { aiLabData } from '../data/portfolioData';

export default function AILab() {
  const [promptInput, setPromptInput] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRunAiDemo = (e) => {
    e.preventDefault();
    if (!promptInput.trim()) return;

    setIsProcessing(true);
    setAiOutput('');

    setTimeout(() => {
      setIsProcessing(false);
      setAiOutput(
        `⚡ [AI Response Engine]: Analyzed "${promptInput}". Generated optimized semantic embeddings & response utilizing neural attention weights. Status: 200 OK (Latency: 42ms).`
      );
    }, 1000);
  };

  return (
    <section className="ailab-section" id="ailab" aria-label="Sarjan AI Research and Innovation Lab">
      <div className="container">
        <h2 className="section-title">
          AI Innovation <span className="title-gradient">Lab</span>
        </h2>
        <p className="section-subtitle">
          Experimental neural prototypes, multi-agent frameworks, and generative AI pipelines
        </p>

        <div className="ailab-grid">
          {aiLabData.map((lab, idx) => (
            <div key={idx} className="ailab-glass-card">
              <div className="ailab-card-top">
                <span className="ailab-tag">{lab.tag}</span>
                <span className="ailab-status">
                  <span className="status-dot"></span>
                  {lab.status}
                </span>
              </div>
              <h3 className="ailab-title">{lab.name}</h3>
              <p className="ailab-desc">{lab.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive AI Prompt Playground */}
        <div className="ai-playground-card">
          <div className="playground-header">
            <div className="playground-title-wrap">
              <i className="fas fa-terminal"></i>
              <span>Interactive Model Simulator</span>
            </div>
            <span className="live-pill">LIVE ENGINE</span>
          </div>

          <form onSubmit={handleRunAiDemo} className="playground-form">
            <input
              type="text"
              className="playground-input"
              placeholder="Test prompt e.g., 'Optimize full-stack React with Gemini AI embeddings'..."
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
            />
            <button type="submit" className="playground-btn" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Processing...
                </>
              ) : (
                <>
                  <i className="fas fa-play"></i> Execute
                </>
              )}
            </button>
          </form>

          {aiOutput && (
            <div className="playground-output">
              <div className="output-header">
                <i className="fas fa-microchip"></i> Output Stream
              </div>
              <p className="output-text">{aiOutput}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
