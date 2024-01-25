import { FormattedMessage } from 'react-intl';
import { Box, Typography } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import CardPost from '@components/CardPost';
import classes from './style.module.scss';
import { selectAllBookmark } from './selectors';
import { getBookmark, deleteBookmarkRequest } from './actions';

const Bookmark = ({ bookmarkData }) => {
  const dispatch = useDispatch();

  const onDeleteBookmark = (id) => {
    dispatch(
      deleteBookmarkRequest(id, () => {
        dispatch(getBookmark());
      })
    );
  };

  useEffect(() => {
    dispatch(getBookmark());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="initial" fontWeight={600} className={classes.title}>
        <FormattedMessage id="bookmark" />
      </Typography>

      <Box className={classes['content-wrapper']}>
        {bookmarkData.length === 0 ? (
          <p>Belum ada postingan</p>
        ) : (
          bookmarkData?.map((item) => {
            return (
              <CardPost
                key={item.postBookmarks?.id}
                id={item.postBookmarks?.id}
                img={item.postBookmarks?.imageUrl}
                title={item.postBookmarks?.title}
                date={item.postBookmarks?.timestamp}
                shortDesc={item.postBookmarks?.shortDesc}
                action={onDeleteBookmark}
              />
            );
          })
        )}
      </Box>
    </Box>
  );
};

Bookmark.propTypes = {
  bookmarkData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  bookmarkData: selectAllBookmark,
});

export default connect(mapStateToProps)(Bookmark);
