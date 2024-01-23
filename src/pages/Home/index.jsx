import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ping } from '@containers/App/actions';
import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import InputSearch from '@components/InputSeach';
import classes from './style.module.scss';
import Header from './components/Header';
import CardPost from '../../components/CardPost';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      <Header />
      <Typography variant="h3" color="initial" fontWeight={600}>
        <FormattedMessage id="journey" />
      </Typography>
      <InputSearch />

      <Box className={classes['content-wrapper']}>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </Box>
    </Box>
  );
};

export default Home;
