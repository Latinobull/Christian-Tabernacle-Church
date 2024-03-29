import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, Grid } from '@mui/material';
import churchLogo from '../img/ChurchLogo2.png';
import Header from '../components/Header';
import { useRef } from 'react';

const mobilePages = [
  'Our Beliefs',
  'Our Founder',
  'Our Team',
  'Our Services',
  'Our Classes',
  'Ministries',
  'Pastors',
];
const pages = ['HOME', 'MINISTRIES', 'BELIEFS', 'LEADERS', 'JOIN US'];
const joinDrop = ['Services', 'Bible Studies'];

const GlobalDiv = styled('div')``;
const MyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0)',
  boxSizing: 'border-box',
  padding: '10px 0px',
  position: 'fixed',
  overflow: 'hidden',
  transition: '.7s',
  top: 0,
  zIndex: 0,
  boxShadow: '0 0 0 black',
  mixBlendMode: 'difference',
  color: 'white',
}));
const AppBarHeader = styled('img')(({ theme }) => ({
  color: 'white',
  width: '125px',
  marginLeft: '150px',
  height: '150px',
}));
const AppBarHeaderMobile = styled('img')(({ theme }) => ({
  color: 'white',
  width: '300px',
  height: '300px',
}));
const AppbarContent = styled(Link)(({ theme }) => ({
  color: 'white',
  marginRight: '70px',
  textDecoration: 'none',
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '25px',
  boxSizing: 'border-box',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    background: 'green',
    mixBlendMode: 'difference',
  },
}));
const NavContent = styled(Link)(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
}));
const MyIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
}));
export default function Appbar({ image, text }) {
  const [anchorElHome, setAnchorElHome] = useState(null);
  const [joinAnchor, setJoinAnchor] = useState(null);
  const navbarRef = useRef(null);
  const globalRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbarRef.current.style.height = '200px';
    } else {
      navbarRef.current.style.height = '700px';
    }
  };
  const handleOpenHome = event => {
    setAnchorElHome(event.currentTarget);
  };

  const handleCloseHome = () => {
    setAnchorElHome(null);
  };
  const handleOpenJoin = event => {
    console.log('join');
    setJoinAnchor(event.currentTarget);
  };
  const handleCloseJoin = e => {
    console.log('leave');
    setJoinAnchor(null);
  };
  return (
    <GlobalDiv ref={globalRef}>
      <MyAppBar
        position="static"
        ref={navbarRef}
        sx={{ height: { xs: 'auto', md: '700px' } }}
      >
        <Toolbar>
          <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="/en">
              <AppBarHeader href="/en" src={churchLogo}></AppBarHeader>
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              paddingRight: { xs: '30px', md: '0px' },
            }}
          >
            <MyIconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenHome}
              color="primary"
            >
              <MenuIcon sx={{ paddingRight: { xs: '10px' } }} />
            </MyIconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElHome}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElHome)}
              onClose={handleCloseHome}
              disableScrollLock={true}
            >
              {mobilePages.map(page => (
                <MenuItem key={page}>
                  <Typography textAlign="center">
                    <NavContent
                      href={`/en/${page.replace(/\s/g, '')}`}
                      onClick={handleCloseHome}
                    >
                      {page}
                    </NavContent>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <AppBarHeaderMobile
                href="/en"
                src={churchLogo}
              ></AppBarHeaderMobile>
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'inherit' },
              marginRight: '20px',
            }}
          >
            <Box>
              <Menu
                // id="menu-appbar3"
                anchorEl={joinAnchor}
                open={Boolean(joinAnchor)}
                onClose={handleCloseJoin}
                MenuListProps={{ onMouseLeave: handleCloseJoin }}
                // disableScrollLock={true}
              >
                {joinDrop.map(join => (
                  <NavContent
                    key={join}
                    href={`/en/${join.replace(/\s/g, '')}`}
                  >
                    <MenuItem onClick={handleCloseJoin}>
                      <Typography textAlign="center">{join}</Typography>
                    </MenuItem>
                  </NavContent>
                ))}
              </Menu>
            </Box>
            {pages.map(page => (
              <Typography key={page} variant="h6">
                <AppbarContent
                  href={page === 'HOME' ? '/en' : `/en/${page.toLowerCase()}`}
                  onMouseEnter={page === 'JOIN US' ? handleOpenJoin : undefined}
                  onClick={page === 'JOIN US' ? handleOpenJoin : undefined}
                >
                  {page}
                </AppbarContent>
              </Typography>
            ))}
            {/* <IconButton href="/sp"> Flag</IconButton> */}
          </Box>
        </Toolbar>
      </MyAppBar>
    </GlobalDiv>
  );
}
