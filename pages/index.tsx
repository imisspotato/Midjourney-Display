import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function Home() {
  const [imageURLs, setImageURLs] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const fetchImages = useCallback(async () => {
    const response = await axios.get('/api/images');
    setImageURLs(response.data);
  }, []);

  useEffect(() => {
    fetchImages();
    const interval = setInterval(fetchImages, 10000);
    return () => clearInterval(interval);
  }, [fetchImages]);

  return (
    <div className="container">
      <div className="header">
        <div className="logo">🖼️</div>
        <div className="buttons">
          <button className="button" onClick={fetchImages}>Refresh Images</button>
          <a href="https://platform.myapps.ai/access">
            <button className="button">Dashboard</button>
          </a>
          <a href="https://img-ui-production.up.railway.app/">
            <button className="button">Generate</button>
          </a>
        </div>
      </div>
      <h1 className="title">AI Tutor <span>Gallery</span></h1>
      <div className="gallery">
        {imageURLs.map((url, index) => (
          <div key={index} className="image-container">
            <img src={url} className="image" onClick={() => {setIsOpen(true); setPhotoIndex(index);}}/>
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={imageURLs[photoIndex]}
          nextSrc={imageURLs[(photoIndex + 1) % imageURLs.length]}
          prevSrc={imageURLs[(photoIndex + imageURLs.length - 1) % imageURLs.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageURLs.length - 1) % imageURLs.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageURLs.length)
          }
        />
      )}
      <style jsx>{`
        .container {
          max-width: 100%;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .logo {
          font-size: 48px;
        }
        .buttons {
          display: flex;
          gap: 20px;
        }
        .button {
          background: linear-gradient(to right, #ff416c, #ff4b2b);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
          outline: none;
        }
        .button:hover {
          background: linear-gradient(to right, #ff4b2b, #ff416c);
        }
        .title {
          text-align: center;
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 32px;
          background: linear-gradient(to right, #ff416c, #ff4b2b);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .image-container {
          margin: 10px;
          border-radius: 10px;
          overflow: hidden;
        }
        .image {
          width: 300px;
          height: 300px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .image:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// export default function Home() {
//   const [imageURLs, setImageURLs] = useState([])
//   const [photoIndex, setPhotoIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     axios.get('/api/images')
//     .then((response) => {
//       setImageURLs(response.data)
//     })
//   }, [])

//   return (
//     <div>
//       {imageURLs.map((url, index) => (
//         <img key={index} src={url} style={{width: "300px", height: "300px"}} onClick={() => {setIsOpen(true); setPhotoIndex(index);}}/>
//       ))}

//       {isOpen && (
//         <Lightbox
//           mainSrc={imageURLs[photoIndex]}
//           nextSrc={imageURLs[(photoIndex + 1) % imageURLs.length]}
//           prevSrc={imageURLs[(photoIndex + imageURLs.length - 1) % imageURLs.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setPhotoIndex((photoIndex + imageURLs.length - 1) % imageURLs.length)
//           }
//           onMoveNextRequest={() =>
//             setPhotoIndex((photoIndex + 1) % imageURLs.length)
//           }
//         />
//       )}
//     </div>
//   )
// }
