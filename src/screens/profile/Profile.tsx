import {Image, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './profile.style';
import {CustomStatusBar, CustomText} from '../../components';
import {color} from '../../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/reduxToolkit/store';

const Profile = () => {
  const data = useSelector((state: RootState) => state?.users.data);
  const [user, setUser] = useState<any>(data);

  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={color.white} barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <View style={styles.profileView}>
          <Image
            source={{uri: 'https://picsum.photos/200/200'}}
            style={styles.profileImage}
          />
          <View style={styles.infoView}>
            <CustomText textStyle={styles.nameText}>{user?.name}</CustomText>
            <CustomText textStyle={styles.bioText}>
              react native developer
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
