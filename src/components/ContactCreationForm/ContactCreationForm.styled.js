import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.6rem;
  width: 100%;
  padding: 3rem 1rem;

  border: 7px solid #f7fcfe;
  border-radius: 5px;
  background-color: #fbfefe;
  box-shadow: 22px 24px 29px -19px rgba(0, 0, 0, 0.75);

  h1 {
    margin-bottom: 2rem;

    font-size: 3em;
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  h3 {
    font-size: 1.3em;
    font-weight: 500;
    letter-spacing: 0.07em;
  }
  input {
    height: 2em;
    width: 90%;

    font-size: 1.2em;
  }
  button {
    width: 10rem;
    height: 3rem;
    margin-top: 1rem;
    display: block;

    background-color: #59c6ec;
    border: none;
    border-radius: 7px;

    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 2em;
    }
  }
  @media only screen and (max-width: 450px) {
    h1 {
      font-size: 1.5em;
    }
  }
`;
