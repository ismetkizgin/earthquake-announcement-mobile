import React, { useState, useEffect } from 'react';
import { ContentList } from '../components';
import { RescueWorksList } from '../actions/page.actions'

export const RescueWorks = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  fecthData = () => {
    setIsLoading(true);
    RescueWorksList().then(res => {
      setData(res);
    }).finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fecthData();
  }, []);

  return <ContentList navigation={navigation} data={data} refreshing={isLoading} onRefresh={fecthData} />
};
