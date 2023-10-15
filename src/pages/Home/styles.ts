import styled from "styled-components";

const HomeContainer = styled.div`
  background: transparent;

  .carousel {
    margin-bottom: 1rem;
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

  #title-shop {
    background-color: ${(props) => props.theme.green};
    text-align: center;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 0 7rem;
  }
  #title-shop h5 {
    color: ${(props) => props.theme.darkGreen};
    font-weight: 400;
  }
  #title-shop h5:last-child {
    font-weight: 700 !important;
  }
  .sub-title-shop {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .sub-title-shop h5 {
    color: ${(props) => props.theme.darkGreen};
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    margin: 3rem 0 2rem;
  }
  /* .sub-title-shop .traco {
    border-bottom: solid 3px ${(props) => props.theme.darkGreen};
    height: 16px;
    width: 20px;
    margin: 0 1rem;
  } */
  .card {
    margin: 2rem 0 4rem;
  }
  .card svg.bi {
    margin: -0.1rem 0.2rem 0.2rem 0;
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
