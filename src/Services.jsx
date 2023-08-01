import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
const x=[{id:1,name:"Bali",image:"https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg",description:"Bali, Indonesia, offers captivating beaches, iconic temples, and rich cultural experiences. From surfing and diving to exploring markets and savoring Balinese cuisine, it's a paradise for travelers seeking a memorable and diverse vacation."},{id:1,name:"Turkey",image:"data:image/jpeg;base64,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",description:"Turkey, a captivating blend of East and West, boasts rich history and stunning landscapes. Visit Istanbul's Hagia Sophia, explore the ancient ruins of Ephesus, and relax on the beautiful beaches of Antalya. With warm hospitality and delicious cuisine, Turkey offers an unforgettable travel experience." },{id:1,name:"Europe",image:"https://tourscanner.com/blog/wp-content/uploads/2022/01/London-United-Kingdom.jpg",description:"Europe, a continent of diverse cultures and iconic landmarks, offers endless tourist delights. From the Eiffel Tower in Paris to the historic Colosseum in Rome, and the charming canals of Amsterdam, Europe is a treasure trove of unforgettable travel experiences." },{id:1,name:"SwiterLand",image:"https://assets.traveltriangle.com/blog/wp-content/uploads/2015/10/Lucerne.jpg",description:"Switzerland, a picture-perfect destination, captivates visitors with its majestic Alps, pristine lakes, and charming villages. Explore the iconic Matterhorn, cruise on Lake Geneva, and experience Swiss hospitality and chocolate delights. A paradise for nature lovers and adventure enthusiasts alike." }]
const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Upcoming Trips</h2>
      <div className="container grid grid-three-column">
        {x.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
