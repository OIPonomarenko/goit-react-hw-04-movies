import styled from "styled-components";

export const StyledTitle = styled.p.attrs((/* props */) => ({ tabIndex: 0 }))`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 0px 20px 20px;

    font-weight: 500;
    letter-spacing: 0.02em;
    background: linear-gradient(
        90deg,
        rgba(9, 10, 14, 1) 0%,
        rgba(62, 62, 64, 1) 35%,
        rgba(19, 45, 78, 0.2) 100%
    );

    color: #9ca4ad;
   

    transform: translateX(-100%);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    .shadowLink:hover &,
    .shadowLink:focus & {
    transform: translateY(0);
  }

  }
`;
