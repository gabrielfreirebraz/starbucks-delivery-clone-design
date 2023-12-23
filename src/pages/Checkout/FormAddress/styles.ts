import styled from "styled-components";

export const FormAddressContainer = styled.div`
  margin: 4rem 2rem;

  input {
    border: solid 1px ${(props) => props.theme.secondary};
  }
  input:focus {
    box-shadow: 0px 0px 1px 1px ${(props) => props.theme.default};
    border: solid 1px ${(props) => props.theme.default};
  }
  input::placeholder {
    color: ${(props) => props.theme.secondary};
  }
`;
