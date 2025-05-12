import {useIcons} from '../utils/AppIcons';
import {getData} from './getData';
import {useQuery} from '@tanstack/react-query';
export const useTransactionsList = () => {
  const {data} = useQuery({
    queryKey: ['filtered-transactions'],
    queryFn: () => getData(),
  });
  const filteredData =
    data?.length > 0 ? data.filter((item: any) => Number(item.id) <= 4) : [];
  return filteredData;
};
export const useTransactionsHistoryList = () => {
  const {data} = useQuery({
    queryKey: ['transactions'],
    queryFn: () => getData(),
  });
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
