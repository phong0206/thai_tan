/* eslint-disable @typescript-eslint/ban-types */
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
import { makeStyles, createStyles } from '@mui/styles';

const drawerWidth = 240;

interface Props {
  nameButton?: string;
  open?: boolean;
  handleClick?: Function;
  units?: Array<string>;
  windowWidth?: number;
}
function Unit({ nameButton = '', open = false, handleClick, units }: Props) {
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
          {units &&
            units.map((item: string, index: number) => (
              <ListItemButton sx={{ pl: 4 }} key={index}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    buttonTooltip: {
      color: '#fff',
      marginLeft: '10px',
    },
    boxTooltip: {
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'block',
        marginLeft: 'auto',
      },
    },
    typographyTooltip: {
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    boxDrawer: {
      marginRight: 1,
      height: '8vh',
    },
    boxContainerDrawer: { textAlign: 'center' },
    appbar: { backgroundColor: '#052c43' },
    iconButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    toolbarItems: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: 'auto',
      },
    },
    boxHeader: {
      display: 'flex',
      marginTop: '100px',
      [theme.breakpoints.down('sm')]: {
        // 600px
        marginTop: '80px',
      },
    },
    toolbarHeader: {
      marginInline: '12vh',
      [theme.breakpoints.down('lg')]: {
        // 1280px
        marginInline: '1.5vw',
      },
      [theme.breakpoints.down('md')]: {
        // 960px
        marginInline: '2vw',
      },
      [theme.breakpoints.down('sm')]: {
        // 600px
        marginInline: '0px',
      },
    },
    boxImage: {
      marginRight: 1,
      height: '11vh',
      [theme.breakpoints.down('sm')]: {
        // 600px
        height: '8vh',
      },
    },
    drawer: {
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: drawerWidth,
      },
    },
  })
);

function TooltipHeader({ nameButton, units }: Props) {
  const classes = useStyles();
  return (
    <Button className={classes.buttonTooltip}>
      <Tooltip
        interactive
        title={
          <List
            sx={{
              backgroundColor: '#ff0000',
              color: '#ffffff',
              fontWeight: 'bold',
            }}
          >
            {units?.map((item: string, index: number) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        }
      >
        <Typography component="div" className={classes.typographyTooltip}>
          {nameButton}
        </Typography>
      </Tooltip>
    </Button>
  );
}

export default function Header({ windowWidth }: Props) {
  const classes = useStyles();

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
    <Box className={classes.boxContainerDrawer}>
      <a href="">
        <Box
          component="img"
          src="../../public/snapedit_1708352731187.png"
          alt="Logo"
          className={classes.boxDrawer}
        />
      </a>
      <Divider />
      <List>
        <Unit
          open={open1}
          handleClick={handleClick1}
          nameButton="Tư vấn doanh nghiệp"
          units={[
            'Thành lập doanh nghiệp',
            'Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh',
          ]}
        />
        <Unit
          open={open2}
          handleClick={handleClick2}
          nameButton="Unit1"
          units={[
            'Thành lập doanh nghiệp',
            'Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh',
          ]}
        />
        <Unit
          open={open3}
          handleClick={handleClick3}
          nameButton="Unit2"
          units={[
            'Thành lập doanh nghiệp',
            'Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh',
          ]}
        />
      </List>
    </Box>
  );

  return (
    <Box className={classes.boxHeader}>
      <CssBaseline />
      <AppBar component="nav" className={classes.appbar}>
        <Toolbar className={classes.toolbarHeader}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <a href="">
              <Box
                component="img"
                src="../../public/snapedit_1708352731187.png"
                alt="Logo"
                className={classes.boxImage}
              />
            </a>
          </Button>

          <Box className={classes.boxTooltip}>
            <TooltipHeader
              nameButton="Trang Chủ"
              units={[
                'Thành lập doanh nghiệp',
                'Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh',
              ]}
            />
            <TooltipHeader
              nameButton="Unit1"
              units={[
                'Thành lập doanh nghiệp',
                'Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh',
              ]}
            />
            <TooltipHeader
              nameButton="Unit2"
              units={[
                'Thành lập doanh nghiệp',
                'Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh',
              ]}
            />
            <TooltipHeader
              nameButton="Unit3"
              units={[
                'Thành lập doanh nghiệp',
                'Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh',
              ]}
            />
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
          className={classes.drawer}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
