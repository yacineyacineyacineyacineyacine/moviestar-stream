import { useFonts } from 'expo-font';
import { Slot, SplashScreen} from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

import config from '../tamagui.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView>
      <TamaguiProvider config={config}>
        <Theme name={'blue'}>
          <Slot />
          
        </Theme>
     
    </TamaguiProvider>
    </GestureHandlerRootView>
    

  );
}
