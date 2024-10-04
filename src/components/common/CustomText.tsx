import React, {FC, memo} from 'react';
import {Text, TextStyle} from 'react-native';

interface CustomTextProps {
  textStyle?: TextStyle;
  numberOfLines?: number;
  children?: React.ReactNode;
  onPress?: () => void;
}

const CustomText: FC<CustomTextProps> = ({
  textStyle,
  numberOfLines,
  children,
  onPress,
}) => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={textStyle}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export default memo(CustomText);
