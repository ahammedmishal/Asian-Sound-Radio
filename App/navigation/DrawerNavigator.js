import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, Image} from 'react-native';
import CustomDrawer from './CustomDrawer';
import {COLORS, FONTS, ICONS, IMAGES} from '../constants';
import {
  ContactScreen,
  HomeScreen,
  Competition,
  Advertise,
  FutureEvents,
  PhotoGallery,
} from '../screens';
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
        name="HomeScreen"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Competition"
        component={Competition}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Advertise"
        component={Advertise}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="PhotoGallery"
        component={PhotoGallery}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="FutureEvents"
        component={FutureEvents}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="ContactScreen"
        component={ContactScreen}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
