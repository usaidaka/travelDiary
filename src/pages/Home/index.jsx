import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectAllBookmark } from '@pages/Bookmark/selectors';
import InputSearch from '@components/InputSeach';
import { deleteBookmarkRequest, getBookmark } from '@pages/Bookmark/actions';
import { selectLogin } from '@containers/Client/selectors';

import classes from './style.module.scss';
import Header from './components/Header';
import CardPost from '../../components/CardPost';
import { selectAllPost } from './selectors';
import { getAllPost, addBookmark } from './actions';

const Home = ({ allpost, bookmarkData, login }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (login) {
      dispatch(getBookmark());
    }
    dispatch(getAllPost());
  }, [dispatch, login]);

  useEffect(() => {
    setData(allpost);
  }, [allpost]);

  const onAddBookmark = (id) => {
    dispatch(
      addBookmark({ postId: String(id) }, () => {
        dispatch(getAllPost());
        dispatch(getBookmark());
      })
    );
  };

  const onDeleteBookmark = (id) => {
    dispatch(
      deleteBookmarkRequest(id, () => {
        dispatch(getAllPost());
        dispatch(getBookmark());
      })
    );
  };

  const onSearch = () => {
    const filtered = data.filter((item) => item.title.toLowerCase().startsWith(search));
    setData(filtered);
  };

  return (
    <div className={classes.container}>
      <Header />
      <Box className={classes.wrapper}>
        <Typography variant="h4" color="initial" fontWeight={600} className={classes.title}>
          <FormattedMessage id="journey" />
        </Typography>
        <InputSearch setter={setSearch} action={onSearch} />

        <Box className={classes['content-wrapper']}>
          {data.length === 0 ? (
            <p>Belum ada postingan</p>
          ) : (
            data?.map((item) => {
              const isMarked = bookmarkData.some((mark) => mark?.postBookmarks?.id === item.id);
              return (
                <CardPost
                  key={item.id}
                  id={item.id}
                  img={item.imageUrl}
                  title={item.title}
                  date={item.timestamp}
                  shortDesc={item.shortDesc}
                  action={isMarked ? onDeleteBookmark : onAddBookmark}
                  isMarked={isMarked}
                />
              );
            })
          )}
        </Box>
      </Box>
    </div>
  );
};

Home.propTypes = {
  allpost: PropTypes.array,
  bookmarkData: PropTypes.array,
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  allpost: selectAllPost,
  bookmarkData: selectAllBookmark,
  login: selectLogin,
});

export default connect(mapStateToProps)(Home);
