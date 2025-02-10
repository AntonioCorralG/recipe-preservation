import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { historicalRegions, timelinePeriods } from "../data/history";
import { HistoricalRegion, TimelinePeriod } from "../types";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.pexels.com/photos/mexican-food.jpg");
  background-size: cover;
  color: white;
  border-radius: 8px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #e85d13;
  }
`;

const TimelineItem = styled.div<{ align: "left" | "right" }>`
  width: 45%;
  margin: 2rem 0;
  position: relative;
  ${(props) => (props.align === "right" ? "margin-left: 55%;" : "")}

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #e85d13;
    border-radius: 50%;
    top: 0;
    ${(props) => (props.align === "right" ? "left: -56px;" : "right: -56px;")}
  }
`;

const RegionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const RegionCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RegionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RegionContent = styled.div`
  padding: 1.5rem;
`;

const RegionTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: "•";
      color: #e85d13;
      position: absolute;
      left: 0;
    }
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin-top: 1rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const HistoryPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<HistoricalRegion | null>(
    null
  );

  return (
    <>
      <Header />
      <PageContainer>
        <Hero>
          <h1>
            <i className="fa-solid fa-book-open-reader"></i> The Rich History of
            Mexican Cuisine
          </h1>
          <p>
            Discover the fascinating journey of Mexican culinary traditions
            through time, from ancient civilizations to modern-day influences.
          </p>
        </Hero>

        <Timeline>
          {timelinePeriods.map((period, index) => (
            <TimelineItem
              key={period.id}
              align={index % 2 === 0 ? "left" : "right"}
            >
              <h3>{period.era}</h3>
              <p>
                <strong>{period.year}</strong>
              </p>
              <p>{period.description}</p>
            </TimelineItem>
          ))}
        </Timeline>

        <section>
          <h2>Culinary Regions</h2>
          <RegionsGrid>
            {historicalRegions.map((region) => (
              <RegionCard key={region.id}>
                <RegionImage src={region.imageUrl} alt={region.name} />
                <RegionContent>
                  <RegionTitle>{region.name}</RegionTitle>
                  <p>{region.description}</p>
                  <h4>Traditional Dishes:</h4>
                  <List>
                    {region.dishes.map((dish) => (
                      <li key={dish}>{dish}</li>
                    ))}
                  </List>
                  <h4>Key Ingredients:</h4>
                  <List>
                    {region.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </List>
                  {region.videoUrl && (
                    <VideoContainer>
                      <iframe
                        src={region.videoUrl}
                        title={`Culinary tour of ${region.name}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </VideoContainer>
                  )}
                </RegionContent>
              </RegionCard>
            ))}
          </RegionsGrid>
        </section>
      </PageContainer>
      <Footer />
    </>
  );
};

export default HistoryPage;
