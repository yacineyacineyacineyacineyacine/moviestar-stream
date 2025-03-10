import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';


const Layout = () => {

  const theme = useTheme();
    return(
    <Stack screenOptions={{
            // headerShown: false,
            headerStyle:{
                backgroundColor: theme.blue12.get()
            }
          }}>
            <Stack.Screen
             name='index'
             options={{
                title: 'Favourites',
                headerLeft: () => <DrawerToggleButton tintColor='#fff'/>
            }}
            />
          </Stack>
    )
}

export default Layout
