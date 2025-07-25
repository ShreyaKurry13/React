import React from 'react';

export default function Sos() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#b30000', // strong red background
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        textAlign: 'center',
        padding: '40px',
        animation: 'pulse 2s infinite'
      }}

      id='sos'
    >
      Sos
    </div>
  );
}
