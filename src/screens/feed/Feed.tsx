import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomStatusBar, CustomText, FeedCard} from '../../components';
import {color} from '../../theme';
import {styles} from './feed.style';
import useFeed from './useFeed';

const Feed: FC = () => {
  const {
    feedList,
    isLoading,
    refreshing,
    onRefresh,
    navigateToScreen,
    onLikeUnlike,
  } = useFeed();
  return (
    <View style={styles.container}>
      <CustomStatusBar barStyle="dark-content" backgroundColor={color.white} />
      <View style={styles.maincontainer}>
        <View style={styles.headerView}>
          <CustomText textStyle={styles.headerText}>Instagram</CustomText>
          <View style={styles.createPostView}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigateToScreen(1)}
              style={styles.createPostBtn}>
              <CustomText textStyle={styles.createPostText}>+</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigateToScreen(2)}>
              <Image
                source={{uri: 'https://picsum.photos/200/200'}}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listView}>
          {isLoading ? (
            <View style={styles.loadingView}>
              <ActivityIndicator size={'large'} color={'black'} />
            </View>
          ) : (
            <FlatList
              data={feedList}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={{flexGrow: 1}}
              renderItem={({item, index}) => (
                <FeedCard
                  key={index}
                  item={item}
                  index={index}
                  onLike={() => onLikeUnlike('like', item?.id)}
                  onUnLike={() => onLikeUnlike('unlike', item?.id)}
                />
              )}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Feed;
