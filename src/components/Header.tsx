import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const drawerWidth = 240;
function Unit({ nameButton, open, handleClick }: any) {
  return (
    <React.Fragment key={1}>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={nameButton} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
}

function TooltipHeader({ nameButton, handleClick }: any) {
  return (
    <Button sx={{ color: '#fff', marginLeft: '10px' }}>
      <Tooltip
        title={
          <List>
            <ListItem button>
              <ListItemText primary="Danh mục 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Danh mục 2" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Danh mục 3" />
            </ListItem>
          </List>
        }
        interactive
      >
        <Typography
          component="div"
          sx={{ cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}
        >
          {nameButton}
        </Typography>
      </Tooltip>
    </Button>
  );
}
export default function Header({ windowWidth }: any) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src="../../public/snapedit_1708352731187.png"
        alt="Logo"
        sx={{ marginRight: 1, height: '8vh' }}
      />
      <Divider />
      <List>
        <Unit open={open1} handleClick={handleClick1} nameButton="Trang Chủ" />
        <Unit open={open2} handleClick={handleClick2} nameButton="Unit1" />
        <Unit open={open3} handleClick={handleClick3} nameButton="Unit2" />
      </List>
    </Box>
  );

  return (
    <Box
      sx={{ display: 'flex', marginTop: windowWidth > 600 ? '100px' : '70px' }}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#052c43' }}>
        <Toolbar sx={{ marginInline: windowWidth > 600 ? '12vh' : 0 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <Box
              component="img"
              src="../../public/snapedit_1708352731187.png"
              alt="Logo"
              sx={{
                marginRight: 1,
                height: windowWidth >= 600 ? '11vh' : '7vh',
              }}
            />
          </Button>

          <Box
            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}
          >
            <TooltipHeader nameButton="Trang Chủ" />
            <TooltipHeader nameButton="Unit1" />
            <TooltipHeader nameButton="Unit2" />
            <TooltipHeader nameButton="Unit3" />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
