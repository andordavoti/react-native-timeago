import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import formatDistance from 'date-fns/formatDistance';

interface Props {
  dateTo: Date;
  dateFrom?: Date;
  hideAgo?: boolean;
  style?: StyleProp<TextStyle>;
}

const RNTimeAgo: React.FC<Props> = ({
  dateTo,
  dateFrom = new Date(),
  hideAgo = false,
  style,
}) => {
  return (
    <Text {...{ style }}>
      {formatDistance(dateTo, dateFrom, {
        addSuffix: !hideAgo,
      })}
    </Text>
  );
};

export default RNTimeAgo;
