import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../Navigatior/Names/screenNames';
import {login} from '../../../store/Slices/auth';

GoogleSignin.configure({
  webClientId:
    '471707050606-464idauo9eb41plspb8bl2vifqrb0ngb.apps.googleusercontent.com',
  iosClientId:
    '471707050606-1saer21rai322voiaqkrgohcuu02d2cp.apps.googleusercontent.com',
});
export const useLoginTempHelper = () => {
  const navigation = useNavigation();
  const handleGoogleLogin = () => {
    // Handle Google login logic
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      login({user: userInfo, token: userInfo.data?.idToken});
      // @ts-ignore
      navigation.reset({routes: [{name: SCREENS.HOME}]});
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
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
