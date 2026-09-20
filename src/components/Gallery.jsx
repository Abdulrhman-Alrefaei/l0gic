import React, { useState } from 'react';
import styled from 'styled-components';

// Photo Imports (.jpeg)
import photo1 from '../assets/Images/photo1.jpeg';
import photo2 from '../assets/Images/photo2.jpeg';
import photo3 from '../assets/Images/photo3.jpeg';
import photo4 from '../assets/Images/photo4.jpeg';
import photo5 from '../assets/Images/photo5.jpeg';
import photo6 from '../assets/Images/photo6.jpeg';
import photo7 from '../assets/Images/photo7.jpeg';
import photo8 from '../assets/Images/photo8.jpeg';

// Movie Imports (.jpeg)
import movie1 from '../assets/Images/movie1.jpeg';
import movie2 from '../assets/Images/movie2.jpeg';
import movie3 from '../assets/Images/movie3.jpeg';
import movie4 from '../assets/Images/movie4.jpeg';
import movie5 from '../assets/Images/movie5.jpeg';
import movie6 from '../assets/Images/movie6.jpeg';

// --- Styled Components ---

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body || '#0f172a'};
  color: ${props => props.theme.text || '#f8fafc'};
  padding: 4rem 2rem;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: -1px;
`;

const HeaderSubtitle = styled.p`
  text-align: center;
  opacity: 0.7;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
`;

/* Filter Tab Buttons */
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  background: ${props => (props.$active ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.05)')};
  color: #fff;
  border: 1px solid ${props => (props.$active ? '#fff' : 'rgba(255, 255, 255, 0.15)')};
  padding: 0.6rem 1.8rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0 1.5rem 0;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  span {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 4rem 0;
`;

/* Photography Grid */
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const PhotoCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);

    img {
      transform: scale(1.08);
    }
  }
`;

/* Movie Poster Grid */
const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.8rem;
`;

const MovieCard = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);

    img {
      transform: scale(1.05);
    }

    div {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
`;

const MovieOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;

  span {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

// --- Component ---

const Gallery = () => {
  // Active Tab State: 'all', 'photos', or 'movies'
  const [activeTab, setActiveTab] = useState('all');

  const photos = [
    photo1, photo2, photo3, photo4,
    photo5, photo6, photo7, photo8
  ];

  const movies = [
    movie1, movie2, movie3,
    movie4, movie5, movie6
  ];

  return (
    <MainContainer>
      <ContentWrapper>
        <HeaderTitle>Gallery & Cinema</HeaderTitle>
        <HeaderSubtitle>A collection of my photography and favorite movies</HeaderSubtitle>

        {/* Navigation Tabs */}
        <TabContainer>
          <TabButton
            $active={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
          >
            All ({photos.length + movies.length})
          </TabButton>
          <TabButton
            $active={activeTab === 'photos'}
            onClick={() => setActiveTab('photos')}
          >
            Photos ({photos.length})
          </TabButton>
          <TabButton
            $active={activeTab === 'movies'}
            onClick={() => setActiveTab('movies')}
          >
            Movies ({movies.length})
          </TabButton>
        </TabContainer>

        {/* Photography Section */}
        {(activeTab === 'all' || activeTab === 'photos') && (
          <div>
            <SectionHeader>
              <h2>Photography</h2>
              <span>{photos.length} Photos</span>
            </SectionHeader>
            <PhotoGrid>
              {photos.map((photo, index) => (
                <PhotoCard key={`photo-${index}`}>
                  <Img src={photo} alt={`Photo ${index + 1}`} loading="lazy" />
                </PhotoCard>
              ))}
            </PhotoGrid>
          </div>
        )}

        {/* Divider (Only visible when showing 'All') */}
        {activeTab === 'all' && <Divider />}

        {/* Movie Shelf Section */}
        {(activeTab === 'all' || activeTab === 'movies') && (
          <div>
            <SectionHeader>
              <h2>Movie Favorites</h2>
              <span>{movies.length} Titles</span>
            </SectionHeader>
            <MovieGrid>
              {movies.map((movie, index) => (
                <MovieCard key={`movie-${index}`}>
                  <Img src={movie} alt={`Movie poster ${index + 1}`} loading="lazy" />
                  <MovieOverlay>
                    <span>Movie #{index + 1}</span>
                  </MovieOverlay>
                </MovieCard>
              ))}
            </MovieGrid>
          </div>
        )}
      </ContentWrapper>
    </MainContainer>
  );
};

export default Gallery;
