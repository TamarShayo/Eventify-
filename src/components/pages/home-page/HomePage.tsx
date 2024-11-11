import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    CssBaseline,
    Box,
    Divider,
    Collapse,
} from '@mui/material';
import {
    Menu as MenuIcon,
    AccountCircle,
    Settings as SettingsIcon,
    Event,
    CalendarToday,
    Person,
    History,
    ExpandLess,
    ExpandMore,
    HelpOutline,
    UploadFile,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function HomePage() {
    const [open, setOpen] = useState(false);
    const [personalAreaOpen, setPersonalAreaOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handlePersonalAreaClick = () => {
        setPersonalAreaOpen(!personalAreaOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
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
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={toggleDrawer}
            >
                <Toolbar />
                <Divider />
                <List>
                    {/* אזור אישי */}
                    <ListItem button onClick={handlePersonalAreaClick}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="אזור אישי" />
                        {personalAreaOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={personalAreaOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/יומן" sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CalendarToday />
                                </ListItemIcon>
                                <ListItemText primary="יומן" />
                            </ListItem>
                            <ListItem button component={Link} to="/העלאת תוכנית" sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <UploadFile />
                                </ListItemIcon>
                                <ListItemText primary="העלאת תוכנית" />
                            </ListItem>
                            <ListItem button component={Link} to="/פרטים אישיים" sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="פרטים אישיים" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* תוכניות */}
                    <ListItem button component={Link} to="/תוכניות">
                        <ListItemIcon>
                            <Event />
                        </ListItemIcon>
                        <ListItemText primary="תוכניות" />
                    </ListItem>

                    {/* היסטוריה */}
                    <ListItem button component={Link} to="/היסטוריה">
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText primary="היסטוריה" />
                    </ListItem>

                    {/* עזרה */}
                    <ListItem button component={Link} to="/עזרה">
                        <ListItemIcon>
                            <HelpOutline />
                        </ListItemIcon>
                        <ListItemText primary="עזרה" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Content - תוכן */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                }}
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
