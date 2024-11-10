import axiosInstance from '../../../Api/instance';

export const useHomeTempHelper = () => {
  const getAppMovies = async () => {
    try {
      const response = await axiosInstance.get('/movies');

      console.log('data', data);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {getAppMovies};
};
