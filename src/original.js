  import React, { useState } from "react";
  import "./App.css";

  function App() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Updated body parts with new Sketchfab model links
    const images = {
      "Heart": "https://sketchfab.com/models/775d6629622740de8a5ed61a959c7506/embed",
      "Kidney": "https://sketchfab.com/models/0215aaf9e9a243cdafca249a979680b0/embed",
      "Lungs": "https://sketchfab.com/models/ce09f4099a68467880f46e61eb9a3531/embed",
      "Stomach": "https://sketchfab.com/models/40147c529bdb42c7a2fca1fbd6529a89/embed",
      "Pancreas": "https://sketchfab.com/models/8acf64dc315b49308b4fcbd47e48b92b/embed",
      "Muscles & Bones": "https://sketchfab.com/models/db7be21587804a32ab3a99e165c56e19/embed",
      "Eyes": "https://sketchfab.com/models/1a23ab8f624e40a9a461d984f312b609/embed",
      "Brain": "https://sketchfab.com/models/f5177aa5722a46e286114b155a4a3490/embed",
      "Liver": "https://sketchfab.com/models/08ee1a75c6fa437297848027c1baa94c/embed",
      "Full Body": "https://sketchfab.com/models/9b0b079953b840bc9a13f524b60041e4/embed",
    };

    return (
      <div>
        <header className="header">
          <h1>Explore Human Anatomy</h1>
        </header>
        <div className="container">
          <div className="left-panel">
            {Object.keys(images).map((key) => (
              <div
                key={key}
                className={`image-button ${selectedImage === images[key] ? 'selected' : ''}`}
                onClick={() => setSelectedImage(images[key])}
              >
                {key}
              </div>
            ))}
          </div>
          <div className="right-panel">
            {selectedImage ? (
              <div className="sketchfab-embed-wrapper">
                <iframe
                  title="3D Anatomy Model"
                  frameBorder="0"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src={selectedImage}
                ></iframe>
              </div>
            ) : (
              <p>Select a body part to view</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  export default App;