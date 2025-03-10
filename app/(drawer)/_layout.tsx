
import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'tamagui';

const Layout = () => {
    const theme = useTheme();
    return(
     
      <Drawer screenOptions={{
        headerShown: false,
        // drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: theme.blue12.get(),
        drawerActiveTintColor: '#fff',
        headerStyle:{
            backgroundColor: theme.blue7.get()
        }
        }}>
        <Drawer.Screen name="(home)" options={{
            title: 'Moviestar',
            drawerIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />
        }} />
        <Drawer.Screen name="(favourites)" options={{
            title: 'Favourites',
            drawerIcon: ({color, size}) => <Ionicons name='heart' size={size} color={color} />
        }} />
        </Drawer>
   
    )
}

export default Layout
