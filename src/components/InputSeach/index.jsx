import { Box, Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

const InputSearch = () => {
  return (
    <Box className={classes['input-container']}>
      <input type="text" placeholder="" />
      <Button variant="contained">
        <FormattedMessage id="search" />
      </Button>
    </Box>
  );
};

export default InputSearch;
