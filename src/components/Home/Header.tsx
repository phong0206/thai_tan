/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Tooltip,
  Collapse,
} from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import { makeStyles, createStyles } from '@mui/styles';
import { listUnits } from '../../constants/common';
import '../../App.css';
import * as api from '../../apis/api';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

interface Props {
  nameButton?: string;
  open?: boolean;
  handleClick?: Function;
  units?: Array<any>;
  unitId?: string;
  categoryId?: string;
}
const useStyles = makeStyles((theme: any) =>
  createStyles({
    buttonTooltip: {
      color: '#fff !important',
      marginLeft: '10px !important',
    },
    boxTooltip: {
      fontFamily: 'Times New Roman !important',

      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: 'auto',
      },
    },
    typographyTooltip: {
      cursor: 'pointer !important',
      fontSize: '16px ',
      fontWeight: 'bold !important',
      fontFamily: 'Times New Roman !important',
      '&:hover': {
        color: 'yellow !important',
      },
    },
    boxDrawer: {
      marginRight: 1,
      height: '8vh ',
    },
    boxContainerDrawer: { textAlign: 'center' },
    appbar: { backgroundColor: '#052c43 !important' },
    iconButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('lg')]: {
        display: 'none !important',
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
      [theme.breakpoints.down('sm')]: {
        // 600px
      },
    },
    toolbarHeader: {
      marginInline: '12vh ',
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
      [theme.breakpoints.down('lg')]: {
        // 1280px
        height: '10.4vh',
      },
      [theme.breakpoints.down('md')]: {
        // 960px
        height: '10vh',
      },
      [theme.breakpoints.down('sm')]: {
        // 600px
        height: '8vh',
      },
    },
    drawer: {
      [theme.breakpoints.down('xs')]: {},
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: drawerWidth,
      },
    },
    tooltipList: {
      fontWeight: 'bold !important',
      fontFamily: 'Times New Roman ',
    },
  })
);

function Unit({
  nameButton = '',
  open = false,
  handleClick,
  units,
  categoryId,
}: Props) {
  const navigate = useNavigate();
  const handleButtonUnitCategory = () => {
    navigate(`/category/${categoryId}`);
  };
  const handleButtonTooltipUnit = (item: any) => {
    navigate(`/unit/${item.unitId}`);
  };
  return (
    <React.Fragment key={1}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary={nameButton}
            onClick={handleButtonUnitCategory}
          />
          {open ? (
            <ExpandLess onClick={handleClick} />
          ) : (
            <ExpandMore onClick={handleClick} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {units &&
            units.map((item: { unit: string }, index: number) => (
              <ListItemButton
                sx={{ pl: 4 }}
                key={index}
                onClick={() => handleButtonTooltipUnit(item)}
              >
                <ListItemText primary={item.unit} />
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

function TooltipHeader({ nameButton, units, categoryId }: Props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleButtonTooltipCategory = () => {
    navigate(`/category/${categoryId}`);
  };
  const handleButtonTooltipUnit = (item: any) => {
    navigate(`/unit/${item.unitId}`);
  };

  return (
    <Button className={classes.buttonTooltip}>
      <Tooltip
        title={
          <List className={classes.tooltipList}>
            {units?.map((item: { unit: string }, index: number) => (
              <ListItem
                key={index}
                onClick={() => handleButtonTooltipUnit(item)}
              >
                <ListItemText primary={item.unit} sx={{ cursor: 'pointer' }} />
              </ListItem>
            ))}
          </List>
        }
      >
        <Typography
          component="div"
          className={classes.typographyTooltip}
          onClick={handleButtonTooltipCategory}
        >
          {nameButton}
        </Typography>
      </Tooltip>
    </Button>
  );
}

export default function Header() {
  const navigate = useNavigate();

  const classes = useStyles();

  const [repoCategories, setRepoCategories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClickHome = () => {
    navigate('/');
  };
  React.useEffect(() => {
    const fetchUnitsByCategory = async () => {
      try {
        const data = await api.getUnitsAndCategory();
        if (data.status === 200) {
          setRepoCategories(data.data.units);
        } else {
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching units by category', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUnitsByCategory();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openStates, setOpenStates] = React.useState(
    new Array(listUnits.length).fill(false)
  );
  const handleUnitClick = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setOpenStates(new Array(listUnits.length).fill(false));
  };

  const drawer = (
    <Box className={classes.boxContainerDrawer}>
      <Box
        onClick={handleClickHome}
        component="img"
        src="../../public/snapedit_1708352731187.png"
        alt="Logo"
        className={classes.boxDrawer}
      />
      <Divider />
      <List>
        {repoCategories.map(
          (
            item: { units: Array<any>; category: string; categoryId: string },
            index: number
          ) => (
            <Unit
              key={item.categoryId}
              open={openStates[index]}
              handleClick={() => handleUnitClick(index)}
              nameButton={item.category}
              units={item.units}
              categoryId={item.categoryId}
            />
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box className={classes.boxHeader}>
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
            <Box
              onClick={handleClickHome}
              component="img"
              src="../../public/snapedit_1708352731187.png"
              alt="Logo"
              className={classes.boxImage}
            />
          </Button>

          <Box className={classes.boxTooltip}>
            {repoCategories && repoCategories.length > 0 ? (
              repoCategories.map(
                (
                  item: { category: string; units: any; categoryId: string },
                  index: number
                ) => (
                  <TooltipHeader
                    key={index}
                    nameButton={item?.category}
                    units={item?.units}
                    categoryId={item.categoryId}
                  />
                )
              )
            ) : (
              <div>Loading...</div>
            )}
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
