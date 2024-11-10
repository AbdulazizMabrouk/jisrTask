import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '471707050606-464idauo9eb41plspb8bl2vifqrb0ngb.apps.googleusercontent.com',
  iosClientId:
    '471707050606-1saer21rai322voiaqkrgohcuu02d2cp.apps.googleusercontent.com',
});
export const useLoginTempHelper = () => {
  const handleGoogleLogin = () => {
    // Handle Google login logic
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  return {
    handleGoogleLogin,
    signIn,
  };
};
