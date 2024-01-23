import { FormattedMessage } from 'react-intl';
import { Box, Button, Typography } from '@mui/material';

import CardPost from '@components/CardPost';
import classes from './style.module.scss';
import photoProfile from '../../assets/photoProfile.png';

const Profile = () => {
  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="initial" fontWeight={600}>
        <FormattedMessage id="profile" />
      </Typography>

      <Box className={classes.profile}>
        <img src={photoProfile} alt="" />
        <Typography variant="body1" color="initial">
          Fadil
        </Typography>
        <Typography variant="body1" color="initial">
          fadil@gmail.com
        </Typography>
        <Button variant="contained">
          <FormattedMessage id="add_new_post" />
        </Button>
      </Box>

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

export default Profile;
