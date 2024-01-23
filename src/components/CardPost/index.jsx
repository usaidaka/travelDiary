import { Box, Typography } from '@mui/material';

import image1 from '../../assets/card1.png';
import bookmark from '../../assets/bookmark.png';
import classes from './style.module.scss';

const CardPost = () => {
  return (
    <Box className={classes['card-container']}>
      <Box className={classes['image-container']}>
        <img src={image1} alt="" />
        <Box className={classes.bookmark}>
          <img src={bookmark} alt="" />
        </Box>
      </Box>
      <Box className={classes['content-container']}>
        <Box className={classes['title-wrapper']}>
          <Typography variant="body1" color="initial" className={classes.title}>
            Bersemayam di tanah dewata
          </Typography>
          <Typography variant="body1" color="initial" className={classes.date}>
            20 July 2020,Cipto
          </Typography>
        </Box>
        <Typography variant="body1" color="initial" className={classes['text-content']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facere quo. Quis minus ipsum alias iste illum ?
        </Typography>
      </Box>
    </Box>
  );
};

export default CardPost;
