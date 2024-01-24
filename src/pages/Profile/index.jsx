import { FormattedMessage } from 'react-intl';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';
import CardPost from '@components/CardPost';
import classes from './style.module.scss';
import photoProfile from '../../assets/photoProfile.png';
import { getMyPost } from './actions';
import { selectMyPost } from './selectors';

const Profile = ({ myPosts }) => {
  const dispatch = useDispatch();

  console.log(myPosts);

  useEffect(() => {
    dispatch(getMyPost());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="initial" fontWeight={600} className={classes.title}>
        <FormattedMessage id="profile" />
      </Typography>

      <Box className={classes.profile}>
        <img src={photoProfile} alt="" />
        <Box className={classes.text}>
          <Typography variant="body1" color="initial" className={classes.text1}>
            Fadil
          </Typography>
          <Typography variant="body1" color="initial" className={classes.text2}>
            fadil@gmail.com
          </Typography>
        </Box>
        <Link to="/post">
          <Button size="small" variant="contained">
            <FormattedMessage id="add_new_post" />
          </Button>
        </Link>
      </Box>

      <Box className={classes['content-wrapper']}>
        {myPosts.length === 0 ? (
          <p>data kosong</p>
        ) : (
          myPosts?.map((item) => (
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
  );
};

Profile.propType = {
  myPosts: PropTypes.array,
  length: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  myPosts: selectMyPost,
});

export default connect(mapStateToProps)(Profile);
