import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import moment from 'moment';

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
      {dateFrom
        ? moment(dateTo).from(dateFrom, hideAgo)
        : moment(dateTo).fromNow(hideAgo)}
    </Text>
  );
};

export default RNTimeAgo;
