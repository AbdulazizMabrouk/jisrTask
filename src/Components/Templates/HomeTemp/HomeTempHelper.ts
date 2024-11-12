import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../Navigatior/Names/screenNames';
import {Categories, RootParamList} from '../../../Utils/interfaces';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useHomeTempHelper = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  const handleSelectItem = (item: Categories) => {
    navigation.navigate(SCREENS.CATEGORY_LIST, {cat: item});
  };
  return {handleSelectItem};
};
