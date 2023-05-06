import styled from 'styled-components';
import { AppBar, Drawer } from '@mui/material';

const drawerWidth = 200;

export const AppHeader = styled(AppBar)`
  width: 100%;
  background-color: #2d4059;

  @media (min-width: 600px) {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: #2d4059;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const StyledDrawer = styled(Drawer)`
  width: 100%;
  flex-shrink: 0;

  .MuiDrawer-paper {
    width: 100%;
    box-sizing: border-box;
    Copy code
    background-color: #1a237e;
    
    @media (min-width: 600px) {
      width: ${drawerWidth}px;
    }
    }
    `;