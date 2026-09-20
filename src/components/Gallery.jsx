import React from 'react';
import styled from 'styled-components';

// Import all images from src/assets/Images/
import photo1 from '../assets/Images/photo1.jpeg';
import photo2 from '../assets/Images/photo2.jpeg';
import photo3 from '../assets/Images/photo3.jpeg';
import photo4 from '../assets/Images/photo4.jpeg';
import photo5 from '../assets/Images/photo5.jpeg';
import photo6 from '../assets/Images/photo6.jpeg';
import photo7 from '../assets/Images/photo7.jpeg';
import photo8 from '../assets/Images/photo8.jpeg';
import photo9 from '../assets/Images/photo9.jpeg';

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
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9
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
