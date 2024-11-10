import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box, Divider } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, Settings as SettingsIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar - בר עליון */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            אפליקציית התוכניות
          </Typography>
          <IconButton color="inherit" aria-label="login">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer - ניווט צדדי */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['עמוד ראשי', 'התוכניות שלי', 'העלאת תוכנית', 'הזמנות'].map((text, index) => (
            <ListItem button key={text} component={Link} to={`/${text}`}>
              <ListItemIcon>
                {/* ניתן להוסיף כאן אייקונים לפי הצורך */}
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Content - תוכן */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          ברוכים הבאים לאפליקציית התוכניות
        </Typography>
        <Typography paragraph>
          כאן תוכלו להעלות את התוכניות שלכם ולשתף אותן עם אנשים אחרים. ניתן להזמין זמנים בהתאם לתוכניות שהעליתם או של אחרים.
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
