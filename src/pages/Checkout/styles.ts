import styled from "styled-components";

export const CheckoutContainer = styled.div`
  #checkout {
    /* border: solid 1px #000; */
    min-height: 30rem;
    max-height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 0;
    gap: 1rem;

    .blocks-1 {
      width: 50%;
      /* border: solid 4px red; */
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .block:first-child {
        height: 70%;
      }
      .block {
        background-color: ${(props) => props.theme.secondary};
        border-radius: 4px;
        height: 30%;
        width: 100%;
      }
    }
    .blocks-2 {
      width: 50%;
      /* border: solid 4px red; */

      .block {
        background-color: ${(props) => props.theme.secondary};
        border-radius: 4px 35px;
        height: 100%;
        width: 100%;
      }
    }
  }
  #checkout h5 {
    color: ${(props) => props.theme.darkGreen};
    font-weight: 400;
  }
  #checkout h5:last-child {
    font-weight: 700 !important;
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
