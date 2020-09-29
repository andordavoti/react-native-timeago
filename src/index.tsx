import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import formatDistance from 'date-fns/formatDistance';

interface Props {
  dateTo: Date;
  dateFrom?: Date;
  style?: StyleProp<TextStyle>;
  hideAgo?: boolean;
}

const RNTimeAgo: React.FC<Props> = ({
  dateTo,
  dateFrom,
  style,
  hideAgo = false,
}) => {
  return (
    <Text {...{ style }}>
      {formatDistance(dateTo, dateFrom || new Date(), {
        addSuffix: !hideAgo,
      })}
    </Text>
  );
};

export default RNTimeAgo;
