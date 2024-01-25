import { Box, Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';

const InputSearch = ({ setter, action }) => {
  return (
    <Box className={classes['input-container']}>
      <input type="text" placeholder="" onChange={(e) => setter(e.target.value)} />
      <Button variant="contained" onClick={() => action()}>
        <FormattedMessage id="search" />
      </Button>
    </Box>
  );
};

export default InputSearch;
