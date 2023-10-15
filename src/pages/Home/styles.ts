import styled from "styled-components";

const HomeContainer = styled.div`
  background: transparent;

  .carousel {
    margin-bottom: 6rem;
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

  .card {
    margin: 2rem 0 4rem;
  }
  .card svg.bi {
    margin: 0 0.2rem 0.2rem 0;
    width: 14px;
  }
  .card .card-img-top {
    transition: margin-top 0.2s;
  }
  .card:hover .card-img-top {
    margin-top: -0.5rem;
  }
  .card,
  .card .card-img-top {
    border: 0;
    border-radius: 7px !important;
  }
  .card .card-img-top {
    border-radius: 7px 45px 7px 7px !important;
  }
  .card .card-title {
    color: ${(props) => props.theme.default};
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2.06px;
    font-weight: 700;
    line-height: 2rem;
  }
  .card .card-body {
    text-align: center;
  }
  .card .card-text {
    padding: 1rem 0;
    color: ${(props) => props.theme.black};
    font-size: 0.8rem;
  }
`;

export { HomeContainer };
