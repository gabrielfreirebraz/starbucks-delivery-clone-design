import styled from "styled-components";

export const CheckoutContainer = styled.div`
  #checkout {
    min-height: 40rem;
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 0;
    gap: 1rem;

    .blocks-1 {
      width: 65%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .block:first-child {
        height: fit-content;
      }
      .block {
        background-color: ${(props) => props.theme.secondary};
        border-radius: 0.5rem;
        height: 100%;
        width: 100%;
      }
    }
    .blocks-2 {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .block {
        background-color: ${(props) => props.theme.secondary};
        border-radius: 0.5rem 2rem;
        height: fit-content;
        width: 100%;
      }
    }
    h5 {
      color: ${(props) => props.theme.darkGreen};
      font-weight: 400;
      margin: 2.5rem 0 1rem 2.5rem;
    }
    h6 {
      color: ${(props) => props.theme.darkGreen};
      font-weight: 400;
      font-size: 0.85rem;
      margin: 0 4rem;
    }
  }

  .title-checkout {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
  }
  .title-checkout h5 {
    color: ${(props) => props.theme.darkGreen};
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    margin: 3rem 0 2rem;
  }
`;
