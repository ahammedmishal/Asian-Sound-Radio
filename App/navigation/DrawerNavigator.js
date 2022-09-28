import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, Image} from 'react-native';
import CustomDrawer from './CustomDrawer';
import {COLORS, FONTS, ICONS, IMAGES} from '../constants';
import {ContactScreen, HomeScreen} from '../screens';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width,
          backgroundColor: COLORS.primary,
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        contentOptions: {
          labelStyle: FONTS.h1,
        },
        headerTintColor: COLORS.white,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="ContactScreen"
        component={ContactScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
