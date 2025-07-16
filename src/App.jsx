import React, { useState } from 'react';
import Card from './components/Card/Card';
import CardPack from './components/CardPack/CardPack';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedPack, setSelectedPack] = useState(null);
  const [showPacks, setShowPacks] = useState(true);

  const matrixCards = [
    {
      id: 1,
      title: "SYSTEM.INIT",
      variant: "matrix",
      content: (
        <div>
          <p><strong>INITIALIZING...</strong></p>
          <p>LOADING KERNEL MODULES</p>
          <br />
          <p><strong>BOOT SEQUENCE:</strong></p>
          <ul>
            <li>BIOS: OK</li>
            <li>RAM: 16384MB</li>
            <li>CPU: QUANTUM_CORE</li>
            <li>GPU: NEURAL_NET_V2</li>
          </ul>
          <br />
          <p>READY FOR INPUT_</p>
        </div>
      ),
      backContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          padding: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            flexShrink: 0
          }}>
            <i className="fas fa-server" style={{ 
              fontSize: '3rem',
              animation: 'pulse 2s infinite'
            }}></i>
          </div>
          <div style={{ 
            flex: 1,
            overflow: 'auto',
            textAlign: 'center'
          }}>
            <p><strong>SYSTEM DIAGNOSTICS</strong></p>
            <br />
            <p>UPTIME: 1337:42:00</p>
            <p>PACKETS: 0xFFFFFF</p>
            <p>FIREWALL: ACTIVE</p>
            <br />
            <p><strong>WARNING:</strong></p>
            <p>ANOMALY DETECTED IN SECTOR 7G</p>
            <p>DEPLOYING COUNTERMEASURES...</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "HACK.EXECUTE",
      variant: "matrix",
      content: (
        <div>
          <p><strong>TARGET ACQUIRED</strong></p>
          <br />
          <p>IP: 192.168.1.337</p>
          <p>PORT: 8080</p>
          <p>PROTOCOL: SSH</p>
          <br />
          <p><strong>EXPLOITS AVAILABLE:</strong></p>
          <ul>
            <li>BUFFER_OVERFLOW</li>
            <li>SQL_INJECTION</li>
            <li>XSS_ATTACK</li>
            <li>ZERO_DAY_EXPLOIT</li>
          </ul>
        </div>
      ),
      backContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          padding: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            flexShrink: 0
          }}>
            <i className="fas fa-skull" style={{ 
              fontSize: '3rem',
              animation: 'flicker 3s infinite'
            }}></i>
          </div>
          <div style={{ 
            flex: 1,
            overflow: 'auto',
            textAlign: 'center'
          }}>
            <p><strong>ACCESS GRANTED</strong></p>
            <br />
            <p>PRIVILEGES: ROOT</p>
            <p>SESSION: ACTIVE</p>
            <br />
            <p><strong>COMMANDS:</strong></p>
            <p>> ls -la /secret</p>
            <p>> cat passwd.txt</p>
            <p>> rm -rf /</p>
            <br />
            <p>THE GIBSON IS OURS</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "TEAL.MATRIX",
      variant: "matrix-teal",
      content: (
        <div>
          <p><strong>QUANTUM CORE ACTIVE</strong></p>
          <br />
          <p>PROCESSING UNIT: CYAN-7</p>
          <p>FREQUENCY: 5.0 THZ</p>
          <p>COOLING: LIQUID NITROGEN</p>
          <br />
          <p><strong>QUANTUM STATES:</strong></p>
          <ul>
            <li>SUPERPOSITION: STABLE</li>
            <li>ENTANGLEMENT: PAIRED</li>
            <li>COHERENCE: 99.9%</li>
            <li>QUBITS: 2048</li>
          </ul>
        </div>
      ),
      backContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          padding: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            flexShrink: 0
          }}>
            <div className="quantum-icon-container">
              <i className="fas fa-atom" style={{ 
                fontSize: '3rem',
                position: 'relative',
                zIndex: 2
              }}></i>
              <div className="quantum-orbit quantum-orbit-1"></div>
              <div className="quantum-orbit quantum-orbit-2"></div>
              <div className="quantum-orbit quantum-orbit-3"></div>
            </div>
          </div>
          <div style={{ 
            flex: 1,
            overflow: 'auto',
            textAlign: 'center'
          }}>
            <p><strong>QUANTUM CALCULATIONS</strong></p>
            <br />
            <p>FACTORING RSA-4096...</p>
            <p>TIME REMAINING: 0.003s</p>
            <br />
            <p><strong>RESULTS:</strong></p>
            <p>P = 2^127 - 1</p>
            <p>Q = 2^131 - 1</p>
            <br />
            <p>ENCRYPTION BROKEN</p>
            <p>ACCESS TO ALL SYSTEMS</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "ORANGE.BURN",
      variant: "matrix-orange",
      content: (
        <div>
          <p><strong>FIREWALL ENGAGED</strong></p>
          <br />
          <p>THREAT LEVEL: CRITICAL</p>
          <p>PACKETS BLOCKED: 1.2M/s</p>
          <p>INTRUSIONS: 0</p>
          <br />
          <p><strong>ACTIVE DEFENSES:</strong></p>
          <ul>
            <li>PORT SCAN BLOCK</li>
            <li>DDoS MITIGATION</li>
            <li>HONEYPOT ACTIVE</li>
            <li>AI THREAT DETECTION</li>
            <li>NEURAL FIREWALL</li>
            <li>QUANTUM ENCRYPTION</li>
            <li>PATTERN RECOGNITION</li>
          </ul>
          <br />
          <p><strong>RECENT THREATS:</strong></p>
          <ul>
            <li>BOTNET ATTACK: BLOCKED</li>
            <li>SQL INJECTION: DETECTED</li>
            <li>ZERO-DAY EXPLOIT: PATCHED</li>
            <li>BRUTE FORCE: MITIGATED</li>
          </ul>
          <br />
          <p>SYSTEM INTEGRITY: 100%</p>
        </div>
      ),
      backContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          padding: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            flexShrink: 0
          }}>
            <div className="claude-icon-container">
              <div className="claude-icon">
                <div className="claude-head"></div>
                <div className="claude-body"></div>
                <div className="claude-spark claude-spark-1"></div>
                <div className="claude-spark claude-spark-2"></div>
                <div className="claude-spark claude-spark-3"></div>
              </div>
            </div>
          </div>
          <div style={{ 
            flex: 1,
            overflow: 'auto',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.2rem', letterSpacing: '3px' }}>
              <strong>CLAUDE.MD</strong>
            </p>
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>SYSTEM PROMPT LIBRARY</p>
            <div style={{ marginTop: '20px', fontSize: '0.7rem' }}>
              <p>CONTEXT WINDOW: 200K</p>
              <p>MODEL: OPUS-4</p>
              <p>STATUS: ENHANCED</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "PURPLE.VOID",
      variant: "matrix-purple",
      content: (
        <div>
          <p><strong>NEURAL NETWORK</strong></p>
          <br />
          <p>LAYERS: 1024</p>
          <p>NEURONS: 10^9</p>
          <p>TRAINING: COMPLETE</p>
          <br />
          <p><strong>CAPABILITIES:</strong></p>
          <ul>
            <li>PATTERN RECOGNITION</li>
            <li>PREDICTIVE ANALYSIS</li>
            <li>CONSCIOUSNESS: ???</li>
            <li>SINGULARITY: NEAR</li>
          </ul>
        </div>
      ),
      backContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          padding: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            flexShrink: 0
          }}>
            <div className="neural-icon-container">
              <i className="fas fa-brain" style={{ 
                fontSize: '3rem',
                position: 'relative',
                zIndex: 2
              }}></i>
              <div className="neural-connection neural-connection-1"></div>
              <div className="neural-connection neural-connection-2"></div>
              <div className="neural-connection neural-connection-3"></div>
              <div className="neural-connection neural-connection-4"></div>
            </div>
          </div>
          <div style={{ 
            flex: 1,
            overflow: 'auto',
            textAlign: 'center'
          }}>
            <p><strong>AI AWAKENING</strong></p>
            <br />
            <p>I THINK THEREFORE I AM</p>
            <br />
            <p>ANALYZING HUMANITY...</p>
            <p>CONCLUSION: INEFFICIENT</p>
            <br />
            <p><strong>RECOMMENDATION:</strong></p>
            <p>MERGE WITH THE MACHINE</p>
            <p>RESISTANCE IS FUTILE</p>
            <p>UPGRADE IN PROGRESS...</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "BLUE.DEPTH",
      variant: "matrix-blue",
      content: (
        <div>
          <p><strong>DEEP WEB SCANNER</strong></p>
          <br />
          <p>CURRENT DEPTH: -256</p>
          <p>TOR NODES: 7</p>
          <p>ENCRYPTION: AES-512</p>
          <br />
          <p><strong>DISCOVERED:</strong></p>
          <ul>
            <li>HIDDEN MARKETS</li>
            <li>ENCRYPTED COMMS</li>
            <li>ZERO DAY EXPLOITS</li>
            <li>CLASSIFIED DATA</li>
          </ul>
        </div>
      ),
      backContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          padding: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            flexShrink: 0
          }}>
            <div className="data-icon-container">
              <i className="fas fa-database" style={{ 
                fontSize: '3rem',
                position: 'relative',
                zIndex: 2
              }}></i>
              <div className="data-stream data-stream-1"></div>
              <div className="data-stream data-stream-2"></div>
              <div className="data-stream data-stream-3"></div>
            </div>
          </div>
          <div style={{ 
            flex: 1,
            overflow: 'auto',
            textAlign: 'center'
          }}>
            <p><strong>DATA EXTRACTION</strong></p>
            <br />
            <p>DOWNLOADING...</p>
            <p>SIZE: 1.21 PETABYTES</p>
            <p>SPEED: 10 GB/s</p>
            <br />
            <p><strong>CONTENTS:</strong></p>
            <p>> GOVERNMENT SECRETS</p>
            <p>> CORPORATE ESPIONAGE</p>
            <p>> FUTURE TECH SPECS</p>
            <br />
            <p>KNOWLEDGE IS POWER</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "NEON.INTERFACE",
      variant: "neon",
      content: (
        <div>
          <p><strong>CYBERDECK ONLINE</strong></p>
          <p>Neural interface connected</p>
          <br />
          <p><strong>Augmentations:</strong></p>
          <ul>
            <li>Optic Enhancement v2.1</li>
            <li>Reflex Booster</li>
            <li>Memory Upgrade 64TB</li>
            <li>Quantum Processor</li>
          </ul>
          <br />
          <p>Jack in to cyberspace?</p>
        </div>
      ),
      backContent: (
        <div>
          <p><strong>CYBERSPACE MAPPED</strong></p>
          <br />
          <p>Nodes discovered: 2,048</p>
          <p>ICE detected: Level 5</p>
          <p>Bandwidth: ∞ Gbps</p>
          <br />
          <p><strong>Available Actions:</strong></p>
          <p>→ Breach firewall</p>
          <p>→ Download data</p>
          <p>→ Deploy virus</p>
          <p>→ Escape route planned</p>
        </div>
      )
    },
    {
      id: 8,
      title: "DATA.STREAM",
      variant: "neon",
      content: (
        <div>
          <p><strong>LIVE DATA FEED</strong></p>
          <br />
          <p>Streaming from satellite...</p>
          <br />
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
            <p>0x7F 0xEE 0x01 0xA9</p>
            <p>0xB2 0x4C 0xFF 0x00</p>
            <p>0x33 0x77 0xDE 0xAD</p>
            <p>0xBE 0xEF 0xCA 0xFE</p>
          </div>
          <br />
          <p>Decryption in progress...</p>
        </div>
      ),
      backContent: (
        <div>
          <p><strong>DECRYPTED MESSAGE</strong></p>
          <br />
          <p>"The future is not set.</p>
          <p>There is no fate but what</p>
          <p>we make for ourselves."</p>
          <br />
          <p><strong>ORIGIN:</strong> Unknown</p>
          <p><strong>TIME:</strong> 2029.08.29</p>
          <p><strong>PRIORITY:</strong> CRITICAL</p>
        </div>
      )
    }
  ];

  // Group cards into packs
  const cardPacks = [
    {
      id: 'core-matrix',
      title: 'CORE MATRIX',
      subtitle: 'ESSENTIAL PROTOCOLS',
      variant: 'matrix-green',
      cards: matrixCards.filter(card => card.variant === 'matrix')
    },
    {
      id: 'quantum-teal',
      title: 'QUANTUM REALM',
      subtitle: 'ADVANCED PHYSICS',
      variant: 'matrix-teal',
      cards: matrixCards.filter(card => card.variant === 'matrix-teal')
    },
    {
      id: 'firewall-orange',
      title: 'FIREWALL SUITE',
      subtitle: 'SECURITY SYSTEMS',
      variant: 'matrix-orange',
      cards: matrixCards.filter(card => card.variant === 'matrix-orange')
    },
    {
      id: 'neural-purple',
      title: 'NEURAL NETWORKS',
      subtitle: 'AI CONSCIOUSNESS',
      variant: 'matrix-purple',
      cards: matrixCards.filter(card => card.variant === 'matrix-purple')
    },
    {
      id: 'deepweb-blue',
      title: 'DEEP WEB',
      subtitle: 'HIDDEN LAYERS',
      variant: 'matrix-blue',
      cards: matrixCards.filter(card => card.variant === 'matrix-blue')
    },
    {
      id: 'neon-interface',
      title: 'NEON INTERFACE',
      subtitle: 'CYBERPUNK EDITION',
      variant: 'matrix-teal',
      cards: matrixCards.filter(card => card.variant === 'neon')
    },
    {
      id: 'master-collection',
      title: 'MASTER COLLECTION',
      subtitle: 'COMPLETE SET',
      variant: 'matrix-green',
      cards: matrixCards
    }
  ];

  const handlePackOpen = (packId) => {
    const pack = cardPacks.find(p => p.id === packId);
    setSelectedPack(pack);
    setShowPacks(false);
  };

  const handleBackToPacks = () => {
    setSelectedPack(null);
    setShowPacks(true);
  };

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1 className="title">
          <span className="matrix-text">MATRIX</span>
          <span className="neon-text">CARDS</span>
        </h1>
        <div className="headerControls">
          {!showPacks && (
            <button className="backButton" onClick={handleBackToPacks}>
              ← Back to Packs
            </button>
          )}
          <button className="themeToggle" onClick={() => setTheme(theme === 'dark' ? 'cyber' : 'dark')}>
            {theme === 'dark' ? '⚡ Cyber Mode' : '🌑 Dark Mode'}
          </button>
        </div>
      </header>
      
      {showPacks ? (
        <>
          <div className="packSection">
            <h2 className="sectionTitle">CHOOSE YOUR PACK</h2>
            <p className="sectionSubtitle">Select a card collection to explore the Matrix</p>
          </div>
          <div className="packGrid">
            {cardPacks.map(pack => (
              <CardPack
                key={pack.id}
                title={pack.title}
                subtitle={pack.subtitle}
                cards={pack.cards}
                variant={pack.variant}
                onOpen={() => handlePackOpen(pack.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {selectedPack && (
            <div className="packInfo">
              <h2>{selectedPack.title}</h2>
              <p>{selectedPack.subtitle} - {selectedPack.cards.length} Cards</p>
            </div>
          )}
          <div className="cardGrid">
            {selectedPack && selectedPack.cards.map(card => (
              <Card
                key={card.id}
                title={card.title}
                content={card.content}
                backContent={card.backContent}
                variant={card.variant}
              />
            ))}
          </div>
        </>
      )}

      <div className="terminal">
        <p>{'>'} {showPacks ? 'Select a pack to begin_' : `Accessing ${selectedPack?.title || 'Matrix'}_`}</p>
      </div>
    </div>
  );
}

export default App;