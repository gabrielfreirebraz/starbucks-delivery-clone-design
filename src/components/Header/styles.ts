import styled from "styled-components";

export const HeaderContainer = styled.div`
  * {
  }
  .navbar {
  }
  .container {
    padding: 0.7rem 0.1rem;
    margin: 0 2.2rem;

    a.nav-link {
      padding-left: 1.5rem;
      color: rgba(0, 0, 0, 0.87);
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
    .imgHistoria {
      width: 8rem;
    }
    .iconLocale {
      width: 1.5rem;
      margin-left: 2rem;
      margin-right: 0.5rem;
      /* color: black; */
    }
  }
  #navRight {
    /* border: solid 1px #000; */
    width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  #navRight a {
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
`;
