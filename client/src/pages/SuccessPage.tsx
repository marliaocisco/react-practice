import Confetti from "react-confetti";
import valentineImage from "../assets/valentine.svg";

export default function SuccessPage() {
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
      <Confetti 
        colors={['#ff4d8d', '#ff80ab', '#ff99bb', '#ffb3cc']}
        numberOfPieces={200}
      />

      <h1 style={{ color: '#ff4d8d', fontSize: '2.5em', marginBottom: '20px' }}>
        Yay! Thank you! 🎉
      </h1>

      <p style={{ fontSize: '1.5em', marginBottom: '30px' }}>
        You make my heart skip a beat! 💝
      </p>

      <img 
        src={valentineImage} 
        alt="Valentine's Day" 
        style={{ 
          width: '300px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }} 
      />
    </div>
  );
}