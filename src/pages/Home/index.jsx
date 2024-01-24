import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import InputSearch from '@components/InputSeach';
import classes from './style.module.scss';
import Header from './components/Header';
import CardPost from '../../components/CardPost';
import { selectAllPost } from './selectors';
import { getAllPost } from './actions';

const Home = ({ allpost }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Header />
      <Box className={classes.wrapper}>
        <Typography variant="h4" color="initial" fontWeight={600} className={classes.title}>
          <FormattedMessage id="journey" />
        </Typography>
        <InputSearch />

        <Box className={classes['content-wrapper']}>
          {allpost.length === 0 ? (
            <p>Belum ada postingan</p>
          ) : (
            allpost?.map((item) => (
              <CardPost
                key={item.id}
                img={item.imageUrl}
                title={item.title}
                date={item.timestamp}
                shortDesc={item.shortDesc}
              />
            ))
          )}
        </Box>
      </Box>
    </div>
  );
};

Home.propTypes = {
  allpost: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  allpost: selectAllPost,
});

export default connect(mapStateToProps)(Home);
