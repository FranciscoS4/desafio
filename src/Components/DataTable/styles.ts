import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const BackgroundProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 9000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

