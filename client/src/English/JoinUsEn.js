import {
  Grid,
  styled,
  Typography,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import churchBuilding from '../img/churchBuilding.jpg';
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-around',
  padding: '130px 0',
}));

const ServiceTextBold = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '40px',
  color: theme.primary.main,
}));
const ServiceText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '18px',
  color: theme.primary.main,
}));
const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  textAlign: 'center',
  fontSize: '25px',
  color: theme.primary.main,
  paddingBottom: '50px',
}));
const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '30px',
  color: theme.primary.main,
}));
const Headline = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  padding: '20px 0',
  width: '100vw',
  color: 'white',
  textAlign: 'center',
  fontSize: '35px',
  fontWeight: 600,
}));
const MyMap = styled('iframe')(({ theme }) => ({
  width: '99vw',
  height: 500,
  marginBottom: 300,
}));
const UnableGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.primary.main,
  color: 'white',
  maxWidth: '80%',
  margin: '0 auto 300px',
  padding: '100px',
  borderRadius: '40px',
}));
const LightButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.primary.main,
  borderRadius: '1px',
  width: '180px',
  height: '50px',
  textAlign: 'center',
  borderRadius: '10px',
  marginTop: '30px',
}));
const ZoomClass = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  backgroundImage: `url(${churchBuilding})`,
  backgroundSize: 'cover',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(0,0,0, 0.3)',
  backgroundBlendMode: 'multiply',
}));
const ZoomText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '4em',
  maxWidth: '70%',
}));
const ZoomTextBold = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '1em',
  maxWidth: '70%',
  fontWeight: 800,
}));
const FAQGrid = styled(Grid)(({ theme }) => ({
  margin: '200px 0px',
  backgroundColor: theme.primary.main,
  padding: '200px',
  maxWidth: '88%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '200px auto',
  padding: '100px',
  borderRadius: '40px',
}));
const FAQText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '45px',
  color: theme.secondary.main,
  paddingBottom: 40,
  margin: 'auto',
}));
const MyAccordian = styled(Accordion)(({ theme }) => ({
  width: '800px',
  boxShadow: 'none',
}));

const faqContent = [
  {
    title: 'What should I do when I arrive',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What should I wear',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What about my kids',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What do we believe in',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
export default function JoinUsEn() {
  const [map, setMap] = useState('');
  useEffect(() => {
    fetch('api/fetch')
      .then(response => response.json())
      .then(response => setMap(response));
  }, [setMap]);
  return (
    <div>
      <Header text={'Welcome Home'} />
      <LiveGrid
        container
        direction="row"
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid item>
          <Grid container direction="column">
            <BoldText sx={{ fontSize: '120px' }}>Live Services</BoldText>
            <Grid>
              <Grid container justifyContent={'space-between'}>
                <ServiceTextBold variant="h6">Sundays </ServiceTextBold>
                <ServiceTextBold variant="h6">7:00pm</ServiceTextBold>
              </Grid>
              <ServiceText variant="h6">Worship Serivce</ServiceText>
            </Grid>

            <Grid>
              <Grid container justifyContent={'space-between'}>
                <ServiceTextBold variant="h6">Wednesday </ServiceTextBold>
                <ServiceTextBold variant="h6">8:00pm</ServiceTextBold>
              </Grid>
              <ServiceText variant="h6">Prayer Serivce</ServiceText>
            </Grid>
            <Grid>
              <Grid container justifyContent={'space-between'}>
                <ServiceTextBold variant="h6">Friday </ServiceTextBold>
                <ServiceTextBold variant="h6">8:00pm</ServiceTextBold>
              </Grid>
              <ServiceText variant="h6">Youth/Kids Service</ServiceText>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={churchBuilding} height={500} width={800} />
        </Grid>
      </LiveGrid>
      <Headline variant="h6">
        We're located at 616 Jamaica Ave. Brooklyn NY 11208{' '}
      </Headline>
      <MyMap
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src={map}
      />
      <UnableGrid container direction={'column'}>
        <Typography sx={{ fontSize: '100px', textAlign: 'center' }}>
          Unable to make it in person?
        </Typography>
        <Typography sx={{ fontSize: '45px', textAlign: 'center' }} variant="h6">
          Our online Services are on Facebook
        </Typography>
        <LightButton>Click Here</LightButton>
      </UnableGrid>
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: '400px 500px',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateAreas: `'men men men woman woman woman'
      'youngM youngM youngF youngF kid kid'
      `,
        }}
      >
        <ZoomClass sx={{ gridArea: 'men' }}>
          <ZoomText>Men's Class</ZoomText>
          <ZoomText sx={{ fontSize: '1.4em' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'woman' }}>
          <ZoomText>Woman's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'youngM' }}>
          <ZoomText>Young Men's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'youngF' }}>
          <ZoomText>Young Woman's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'kid' }}>
          <ZoomText>Kid's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              11:30am
            </Box>
          </ZoomTextBold>
        </ZoomClass>
      </Box>
      <FAQGrid>
        <Text
          sx={{
            color: theme => theme.secondary.main,
            fontSize: '120px',
          }}
        >
          What to expect
        </Text>
        {faqContent.map(content => (
          <Grid container justifyContent="center">
            <MyAccordian>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                sx={{
                  backgroundColor: theme => theme.primary.main,
                  textAlign: 'center',
                }}
              >
                <FAQText variant="h6">{content.title}</FAQText>
              </AccordionSummary>
              <AccordionDetails>
                <Text variant="h6">{content.desc}</Text>
              </AccordionDetails>
            </MyAccordian>
          </Grid>
        ))}
      </FAQGrid>
    </div>
  );
}