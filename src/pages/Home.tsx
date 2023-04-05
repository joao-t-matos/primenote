import React, { FC, useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';
import { updateMode } from '../state/updateState';
import { Copyright } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from '@mui/material';

interface HomeProps {
  darkMode: boolean;
}

const Home: FC<HomeProps> = ({ darkMode }) => {
  const { actions } = useStateMachine({
    updateMode,
  });

  useEffect(() => {
    actions.updateMode(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container
        component="main"
        sx={{
          minWidth: '100%',
          height: '100vh',
          backgroundColor: darkMode ? 'rgb(37, 37, 37)' : 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className={`markdown-area ${darkMode? 'markdown-area-dark': 'markdown-area-light'}`}>
          <div className="input-area">
            <textarea></textarea>
          </div>
          <div className="result-area">
            <textarea className="result-output" disabled value={"output"}></textarea>
            <textarea className="result-preview" disabled value={"preview"}></textarea>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Home;
