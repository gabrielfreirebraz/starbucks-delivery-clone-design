import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;

  h5 {
    color: ${(props) => props.theme.darkGreen};
    font-weight: 400;
    margin: 2.5rem 0 1rem 2.5rem;
    font-size: 2rem;
  }
  h6 {
    color: ${(props) => props.theme.darkGreen};
    font-weight: 400;
    font-size: 1rem;
    margin: 0 4rem;
  }

  .blocks {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .block-1 {
      border-radius: 1rem 5rem;
      background: url("./starbucks-atendente.jpg") no-repeat bottom left;
      background-position: cover;
      margin: 5rem 0;
      padding: 1rem 0 4rem 0;
      height: 22rem;
      width: 37rem;
    }
    .block-2 {
      padding-right: 5rem;

      li {
        list-style: none;

        h5 {
          font-weight: 250;
          font-size: 1.2rem;
          strong {
            font-weight: 700;
            margin: 0 1.5rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
