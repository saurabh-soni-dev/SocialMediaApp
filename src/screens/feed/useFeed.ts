import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFeedData,
  likePost,
  unLikePost,
} from '../../services/reduxToolkit/feed/feed';
import {RootState} from '../../services/reduxToolkit/store';
import {feed} from './feed.const';

const useFeed = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state?.feed.data);
  const [feedList, setFeedList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setFeedList(data);
  }, [data]);

  useEffect(() => {
    if (data?.length == 0) {
      setInitialData();
    }
  }, []);

  //** Set initial feed data */
  const setInitialData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(addFeedData(feed));
      setIsLoading(false);
    }, 1000);
  }, []);

  //** Reftresh feed list */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  //** Navigate to profile screen */
  const navigateToScreen = (screen: number) => {
    if (screen == 1) {
      navigation.navigate('CreatePost');
    } else {
      navigation.navigate('Profile');
    }
  };

  //** Post like & unlike */
  const onLikeUnlike = useCallback(
    (type: 'like' | 'unlike', postId: number) => {
      if (type == 'like') {
        dispatch(likePost(postId));
      } else {
        dispatch(unLikePost(postId));
      }
    },
    [],
  );

  return {
    feedList,
    isLoading,
    refreshing,
    onRefresh,
    navigateToScreen,
    onLikeUnlike,
  };
};

export default useFeed;
