import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">World Tour</p>
          <h1 className="hero-heading">WorkNation</h1>
          <p className="hero-para">
          Who does not want to travel to their heart’s content? Who does not want to explore the world? Who does not want to taste various delicacies different nations have to offer? Who does not want to experience the diverse cultures and traditions across the globe?
But alas! Our pockets doesn’t allow it :(
Bonjour Fellas,
We ___ , welcomes you to the ultimate journey, as we embark on a being a transforming group tour company, committed to discovering the secrets of happiness all over the world and constructing the perfect budget friendly travel plans. Join us as we explore the art of self-discovery, build meaningful friendships, and embrace the essence of joy that can only be achieved via exploration. This incredible voyage will take you through stunning landscapes and soul-stirring encounters, igniting a spark that will drive you to complete your travel dreams.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Explore </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
