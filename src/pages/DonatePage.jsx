import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
`;

const DonateImage = styled.div`
  flex: 1;
  margin-right: 20px;
  height: 100px;
  width: 100px;
  display: inline-block;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const DonateOptions = styled.div`
  flex: 2;
`;

const DonationFrequency = styled.div`
  margin-bottom: 10px;
`;

const DonationAmounts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DonateAmountButton = styled.button`
  margin: 0.5em;
  padding: 0.5em 1em;
  background-color: #e85d13;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #681e1e;
  }

  &:active {
    background-color: #e81393;
  }
`;

const DonateButton = styled.button`
  background-color: #e85d13;
  color: #ffffff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin: 1em 0;

  &:hover {
    background-color: #681e1e;
  }

  &:active {
    background-color: #e81393;
  }
`;

const DonateModal = styled.div`
  display: ${({ showModal }) => (showModal ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ddd;
  padding: 1rem;
  z-index: 999;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

const ThankYouMessage = styled.div`
  margin-top: 1rem;
`;

const DonatePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDonate = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="title">
          <i className="fa-brands fa-gratipay"></i> Support our Mission
        </h1>
        <p>
          Food is culture and heritage. Help us preserve it's roots and history.
        </p>
        <div className="donate-container">
          <DonateImage>
            <img
              src={require("../Assets/images/donation-image.jpg")}
              alt="Donate Image"
            />
          </DonateImage>
          <DonateOptions>
            <h2>Donate Now</h2>
            <DonationFrequency>
              <input
                type="radio"
                id="one-time-choice"
                name="donation-type"
                checked
              />
              <label htmlFor="one-time-choice">One Time</label>

              <input type="radio" id="monthly-choice" name="donation-type" />
              <label htmlFor="monthly-choice">Monthly</label>
            </DonationFrequency>
            <DonationAmounts>
              <DonateAmountButton>$10</DonateAmountButton>
              <DonateAmountButton>$25</DonateAmountButton>
              <DonateAmountButton>$50</DonateAmountButton>
              <DonateAmountButton>$100</DonateAmountButton>
              <DonateAmountButton>$250</DonateAmountButton>
              <DonateAmountButton>$500</DonateAmountButton>
            </DonationAmounts>
            <div className="choose-amount">
              <label htmlFor="choose-your-own">Choose your own amount: </label>
              <input type="text" id="choose-your-own" />
            </div>
            <DonateButton onClick={handleDonate}>DONATE</DonateButton>
          </DonateOptions>
        </div>
        <DonateModal showModal={showModal}>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <h2>Thank You for Your Donation!</h2>
          <ThankYouMessage>
            Your support is greatly appreciated.
          </ThankYouMessage>
        </DonateModal>
      </Container>
      <Footer />
    </>
  );
};

export default DonatePage;
