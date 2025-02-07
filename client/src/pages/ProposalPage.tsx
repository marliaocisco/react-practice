import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import hearts from "../assets/hearts.svg";

export default function ProposalPage() {
  const [, setLocation] = useLocation();
  const [noButtonStyle, setNoButtonStyle] = useState({ 
    top: '50%', 
    left: '50%', 
    transform: 'translate(60px, -50%)' // This will position it slightly to the right of the Yes button
  });

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 40);
    setNoButtonStyle({ 
      top: `${y}px`, 
      left: `${x}px`,
      transform: 'none'
    });
  };

  return (
    <div style={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffecf2',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <img src={hearts} alt="Hearts" style={{ width: '100px', marginBottom: '20px' }} />
      <h1 style={{ color: '#ff4d8d', fontSize: '2.5em', marginBottom: '20px' }}>
        Hey Rebekie! 💖
      </h1>
      <p style={{ fontSize: '1.5em', marginBottom: '30px' }}>
        Will you be my Valentine? 🌹
      </p>
      <div>
        <button
          onClick={() => setLocation("/success")}
          style={{
            padding: '15px 30px',
            fontSize: '1.2em',
            margin: '10px',
            backgroundColor: '#ff4d8d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Yes! 💝
        </button>
        <button
          onMouseEnter={moveButton}
          style={{
            padding: '15px 30px',
            fontSize: '1.2em',
            margin: '10px',
            backgroundColor: 'white',
            color: '#ff4d8d',
            border: '2px solid #ff4d8d',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'absolute',
            ...noButtonStyle,
            transition: 'all 0.2s ease'
          }}
        >
          No 💔
        </button>
      </div>
    </div>
  );
}