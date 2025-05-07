import {useEffect, useState} from 'react';
import {useIcons} from '../utils/AppIcons';
import {getData} from './getData';
export const useTransactionsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then(res => {
      const filtered = res.filter((item: any) => Number(item.id) <= 4);
      setData(filtered);
    });
  }, []);
  return data;
};
export const useTransactionsHistoryList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then(res => {
      setData(res);
    });
  }, []);
  return data;
};

export const useLanguagesList = () => {
  const Icons = useIcons();
  return [
    {id: '1', name: 'English', Icon: Icons.English},
    {id: '2', name: 'Australia', Icon: Icons.Australia},
    {id: '3', name: 'Franch', Icon: Icons.Franch},
    {id: '4', name: 'Spanish', Icon: Icons.Spanish},
    {id: '5', name: 'America', Icon: Icons.America},
    {id: '6', name: 'Vietnam', Icon: Icons.Vietnam},
  ];
};
