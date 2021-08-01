import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 50%;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;
export const StyledModal = styled.div`
  background: white;
  position: relative;
  margin: auto;
  border-radius: 10px;
  border: none;
`;
export const Header = styled.div`
  display: flex;
  border-radius: 10px 10px 0 0;
  border: none;
  padding: 1%;
  width: 98.2%;
  background: #3A3A3A;
`;
export const HeaderText = styled.div`
  font-size: 20px;
  color: #fff;
  align-self: center;
`;
export const CloseButton = styled.button`
  font-size: 25px;
  border: none;
  border-radius: 3px;
  margin-left: auto;
  margin-top: 5px;
  background: none;

  svg {
    color: #fff;
    &:hover{
      cursor: pointer;
      transform: scale(1.2);
      transition: transform 0.2s;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  justify-content: center;

  img {
    &:hover {
      transform: scale(1.1);
      transition:  0.2s;
    }
  }

`;
