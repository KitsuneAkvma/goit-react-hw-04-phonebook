import styled from 'styled-components';

export const StyledContactsList = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1rem 2rem;

  h2 {
    font-size: 1.9em;
    font-weight: 500;
    letter-spacing: 0.2em;
  }

  input {
    height: 2rem;
    width: 90%;
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    width: 100%;
    list-style: none;
  }
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 2em;
    padding: 1rem 1rem;

    width: 100%;

    background-color: #a3e0f5;
    border-radius: 4px;

    font-size: 1.2em;
  }
  span {
    font-weight: 500;
  }
  button {
    position: absolute;
    transform-origin: center;
    right: 10%;
    top: 30%;

    transform: translate(20%);

    width: 3rem;
    height: 3rem;

    background-color: #e07879;
    border: none;
    border-radius: 1.3rem;

    font-size: 1.5em;

    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:hover {
      transform: scale(1.2);
    }
  }
`;
