import React from 'react';

export default function ChatBot() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '300px',
        height: '400px',
        backgroundColor: '#f1f1f1',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1000
      }}
    >
      <div style={{ flexGrow: 1, overflowY: 'auto' }}>
        <p style={{ color: '#333' }}>ChatBot</p>
        {/* Chat messages would go here */}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        style={{
          border: 'none',
          borderTop: '1px solid #ccc',
          padding: '10px',
          fontSize: '14px',
          borderRadius: '8px',
          outline: 'none',
          marginTop: '10px'
        }}
      />
    </div>
  );
}
