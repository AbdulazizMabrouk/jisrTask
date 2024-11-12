import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../Navigatior/Names/screenNames';
import {login, logout} from '../../../store/Slices/auth';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../store/store';

GoogleSignin.configure({
  webClientId:
    '471707050606-464idauo9eb41plspb8bl2vifqrb0ngb.apps.googleusercontent.com',
  iosClientId:
    '471707050606-1saer21rai322voiaqkrgohcuu02d2cp.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});
export const useLoginTempHelper = () => {
  const navigation = useNavigation();

  const dispatch: AppDispatch = useDispatch();

  const handleGoogleLogin = () => {};

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log('User Info:', userInfo);
      dispatch(login({user: userInfo, token: userInfo.data?.idToken}));
      // @ts-ignore
      navigation.reset({routes: [{name: SCREENS.HOME}]});
    } catch (error) {
      console.log('Error signing in:', error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(logout());
      console.log('User signed out');
      navigation.reset({routes: [{name: SCREENS.LOGIN}]});
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return {
    handleGoogleLogin,
    signIn,
    signOut,
  };
};
