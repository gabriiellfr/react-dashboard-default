import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  height: 32px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const AvatarBackground = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
`;