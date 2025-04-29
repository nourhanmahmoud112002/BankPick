import {useIcons} from '../utils/AppIcons';
export const useTransactionsList = () => {
  const Icons = useIcons();
  return [
    {
      id: '1',
      iconName: Icons.apple,
      title: 'Apple Store',
      category: 'Entertainment',
      money: '- $5.99',
    },
    {
      id: '2',
      iconName: Icons.spotify,
      title: 'Spotify',
      category: 'Music',
      money: '- $12.99',
    },
    {
      id: '3',
      iconName: Icons.download,
      title: 'Money Transfer',
      category: 'Transaction',
      money: '$300',
    },
    {
      id: '4',
      iconName: Icons.grocery,
      title: 'Grocery',
      category: 'Shopping',
      money: '- $88',
    },
  ];
};
export const useTransactionsHistoryList = () => {
  const Icons = useIcons();
  return [
    {
      id: '1',
      iconName: Icons.apple,
      title: 'Apple Store',
      category: 'Entertainment',
      money: '- $5.99',
    },
    {
      id: '2',
      iconName: Icons.spotify,
      title: 'Spotify',
      category: 'Music',
      money: '- $12.99',
    },
    {
      id: '3',
      iconName: Icons.download,
      title: 'Money Transfer',
      category: 'Transaction',
      money: '$300',
    },
    {
      id: '4',
      iconName: Icons.grocery,
      title: 'Grocery',
      category: 'Shopping',
      money: '- $88',
    },
    {
      id: '5',
      iconName: Icons.apple,
      title: 'Apple Store',
      category: 'Entertainment',
      money: '- $5.99',
    },
    {
      id: '6',
      iconName: Icons.spotify,
      title: 'Spotify',
      category: 'Music',
      money: '- $12.99',
    },
    {
      id: '7',
      iconName: Icons.download,
      title: 'Money Transfer',
      category: 'Transaction',
      money: '$300',
    },
    {
      id: '8',
      iconName: Icons.grocery,
      title: 'Grocery',
      category: 'Shopping',
      money: '- $88',
    },
  ];
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
