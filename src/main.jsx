import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flex: "1" }}>
          <App />
        </div>
        <footer
          style={{
            backgroundColor: "#8091ff", // Warna ungu muda
            color: "#fff", // Teks putih
            textAlign: "center",
            padding: "15px",
            marginTop: "20px",
            width: "90%", // Lebar 90% dari layar
            maxWidth: "800px", // Maksimal lebar untuk responsivitas
            borderRadius: "15px", // Sudut membulat
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Efek bayangan
            margin: "20px auto", // Margin otomatis untuk center
          }}
        >
          Created by Kak Thomi and Developed by Muhammad Alif Qadri
        </footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);