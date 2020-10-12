import React, { useEffect, useState } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import formatDistance from 'date-fns/formatDistance';

interface Props {
  dateTo: Date;
  updateInterval?: number;
  dateFrom?: Date;
  hideAgo?: boolean;
  style?: StyleProp<TextStyle>;
}

const TimeAgo: React.FC<Props> = ({
  dateTo,
  dateFrom,
  updateInterval = 60000,
  hideAgo = false,
  style,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setCurrentDate(new Date()), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, updateInterval);
    return () => clearInterval(interval);
  }, [dateFrom, updateInterval]);

  return (
    <Text {...{ style }}>
      {formatDistance(dateTo, dateFrom || currentDate, {
        addSuffix: !hideAgo,
      })}
    </Text>
  );
};

export default TimeAgo;
