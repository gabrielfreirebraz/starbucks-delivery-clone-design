import styled from "styled-components";

const HomeContainer = styled.div`
  background: transparent;

  .carousel {
    a.carousel-control-next img,
    a.carousel-control-prev img {
      width: 3.5rem !important;
      background: #f0f0f0;
      padding: 0.9rem;
      border-radius: 35px;
    }
    /* span.carousel-control-next-icon,
    span.carousel-control-prev-icon {
      background: #f0f0f0;
      border-radius: 25px;
      padding: 1.5rem;
    } */
  }
`;

export { HomeContainer };
