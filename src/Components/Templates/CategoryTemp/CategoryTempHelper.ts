// import {useNavigation} from '@react-navigation/native';
import axiosInstance from '../../../Api/instance';
import {Categories} from '../../../Utils/interfaces';

export const useCategoryTempHelper = () => {
  //   const navigation = useNavigation();
  const getCatMovies = async (cat: Categories) => {
    try {
      const response = await axiosInstance.get(`/movies/${cat}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {getCatMovies};
};
