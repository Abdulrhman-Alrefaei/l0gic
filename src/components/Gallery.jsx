import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  padding: 5rem 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Gallery = () => {
  // Add your image paths here. Make sure the images are inside your public/ folder or imported at the top.
  const photos = [
    "/src/assets/Images/photo1.jpg", 
    "/src/assets/Images/photo2.jpg",
    "/src/assets/Images/photo3.jpg"
  ];

  return (
    <MainContainer>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Gallery</h1>
      <GalleryGrid>
        {photos.map((photo, index) => (
          <ImageWrapper key={index}>
            <Img src={photo} alt={`Gallery pic ${index + 1}`} />
          </ImageWrapper>
        ))}
      </GalleryGrid>
    </MainContainer>
  );
};

export default Gallery;
