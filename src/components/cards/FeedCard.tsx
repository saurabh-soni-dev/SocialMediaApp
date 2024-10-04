import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {FC, memo, useState} from 'react';
import CustomText from '../common/CustomText';
import {color} from '../../theme';
import {formatPostDate} from '../../utility/functions/formatPostDate';
import ImageIndex from '../../assets/ImageIndex';

interface ItemProps {
  item: feedPost;
  index: number;
  onLike?: () => void;
  onUnLike?: () => void;
}
const FeedCard: FC<ItemProps> = ({item, index, onLike, onUnLike}) => {
  const [showDescription, setShowDescription] = useState(false);

  //** Show full description */
  const onShowFullText = () => {
    setShowDescription(!showDescription);
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <View style={styles.nameTextView}>
          <Image source={{uri: item?.avatar}} style={styles.profileImage} />
          <CustomText textStyle={styles.userName}>{item?.username}</CustomText>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnView}>
          <Image source={ImageIndex.hemburg} style={styles.btnIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.carouselView}>
        <Image
          source={{uri: item?.carouselImages[1]}}
          style={styles.carouselImage}
        />
      </View>
      <View style={styles.detailsView}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 8,
          }}>
          <View
            style={{
              flex: 0.8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
              onPress={onLike}>
              <Image source={ImageIndex.like} style={styles.likeIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onUnLike}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={ImageIndex.unlike} style={styles.likeIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Image source={ImageIndex.share} style={styles.likeIcon} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1.2}}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Image source={ImageIndex.save} style={styles.likeIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <CustomText textStyle={styles.likeCountText}>
          {item?.likes} likes
        </CustomText>
        <CustomText textStyle={styles.userName}>
          {item?.username}{' '}
          <CustomText textStyle={styles.descriptionText}>
            {showDescription
              ? item?.description
              : item?.description?.slice(0, 85)}
            {!showDescription && (
              <CustomText textStyle={styles.moreText} onPress={onShowFullText}>
                {'... '}more
              </CustomText>
            )}
          </CustomText>
        </CustomText>
        <CustomText textStyle={styles.moreText}>
          {formatPostDate(item?.postDate)}
        </CustomText>
      </View>
    </View>
  );
};

export default memo(FeedCard);

const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 20},
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameTextView: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    color: color.black,
    fontWeight: '600',
  },
  carouselView: {
    backgroundColor: color.lightSkyBlue,
    height: 350,
    width: '100%',
    marginTop: 8,
    marginBottom: 12,
  },
  carouselImage: {
    height: 350,
    width: '100%',
  },
  detailsView: {
    paddingHorizontal: 20,
  },
  likeCountText: {
    fontSize: 16,
    color: color.black,
    fontWeight: '500',
    marginTop: 2,
  },
  descriptionText: {
    fontSize: 14,
    color: color.black,
    marginTop: 2,
    fontWeight: '300',
    lineHeight: 20,
  },
  moreText: {
    fontSize: 14,
    color: color.charcoalGray,
    marginTop: 2,
    fontWeight: '400',
  },
  btnView: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnIcon: {height: 30, width: 30, resizeMode: 'contain'},
  likeIcon: {height: 28, width: 28, resizeMode: 'contain'},
});
