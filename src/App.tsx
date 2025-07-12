import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Divider
} from '@mui/material';
import { 
  GitHub as GitHubIcon,
  Favorite as FavoriteIcon 
} from '@mui/icons-material';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React + Electron + Material-UI
          </Typography>
          <IconButton color="inherit">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            💖 Hello World!
          </Typography>
          
          <Typography variant="h6" color="text.secondary" paragraph>
            Welcome to your Electron application with React and Material-UI
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <Button 
              variant="contained" 
              startIcon={<FavoriteIcon />}
              sx={{ mr: 2 }}
            >
              Get Started
            </Button>
            <Button variant="outlined">
              Learn More
            </Button>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            This app is built with Electron, React, TypeScript, and Material-UI
          </Typography>
        </Paper>

        <Divider sx={{ my: 4 }} />
        
        <ExampleComponent />
      </Container>
    </Box>
  );
};

export default App; 