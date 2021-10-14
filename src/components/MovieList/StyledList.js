import styled from 'styled-components';

export const StyledList = styled.ul`
display: grid;
  max-width: calc(100vw - 32px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 340px));
  grid-gap: 16px;
  justify-content: center;
  padding: 0;
    li {
        position: relative;
        border-radius: 7%;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
            1px 4px 6px rgba(0, 0, 0, 0.16);
        overflow: hidden;
    }
`;

