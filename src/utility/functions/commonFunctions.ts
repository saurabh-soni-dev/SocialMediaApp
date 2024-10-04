import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '../../navigation/stacks/authStack';

const commonFunctions = () => {
  const navigation = useNavigation<AuthNavigationProps>();

  const goBack = (): void => {
    navigation.goBack();
  };

  return {goBack};
};

export default commonFunctions;
