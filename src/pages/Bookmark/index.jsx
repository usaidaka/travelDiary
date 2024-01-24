import { FormattedMessage } from 'react-intl';
import { Box, Typography } from '@mui/material';

import CardPost from '@components/CardPost';
import classes from './style.module.scss';

const Bookmark = () => {
  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="initial" fontWeight={600} className={classes.title}>
        <FormattedMessage id="bookmark" />
      </Typography>

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

export default Bookmark;
