import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@mui/material';

export const DrawerContainer = styled.div`
  background-color: #F2F2F2;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 260px;
  padding: 32px 0; /* Added vertical padding */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding-left: 0;
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  height: 48px;
  color: #424242; /* Changed font color */
  cursor: pointer;
  &:hover {
    background-color: #E8F0FE; /* Added hover effect */
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  margin-left: 16px;
`;

export const StyledListItemText = styled(ListItemText)`
  span {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const Logo = styled.img`
  width: 50%;
  max-width: 100px;
  height: auto;
`;