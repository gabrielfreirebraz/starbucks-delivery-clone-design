import styled from "styled-components";

export const FormPaymentContainer = styled.div`
  .block {
    display: flex;
    justify-content: space-around;
    padding: 3rem 2rem;

    .btn {
      width: 12rem !important;
    }
    .btn:active,
    .btn:focus,
    .btn:hover {
      color: #fff;
      background-color: #198754;
      /* z-index: 0 !important; */
    }
  }
`;
