import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

const Header = () => {
  return (
    <Box className={classes.header}>
      <Box className={classes['header-wrapper']}>
        <Typography variant="body1" color="initial" className={classes['header-primary']}>
          <FormattedMessage id="header_primary" />
        </Typography>
        <Typography variant="h6" color="initial" className={classes['header-secondary']}>
          <FormattedMessage id="header_secondary" />
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
