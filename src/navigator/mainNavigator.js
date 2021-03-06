import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps67980Navigator from '../features/Maps67980/navigator';
import Add-Item67979Navigator from '../features/Add-Item67979/navigator';
import Maps67975Navigator from '../features/Maps67975/navigator';
import UserProfile67971Navigator from '../features/UserProfile67971/navigator';
import Maps67931Navigator from '../features/Maps67931/navigator';
import Add-Item67930Navigator from '../features/Add-Item67930/navigator';
import Maps67926Navigator from '../features/Maps67926/navigator';
import UserProfile67922Navigator from '../features/UserProfile67922/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps67980: { screen: Maps67980Navigator },
Add-Item67979: { screen: Add-Item67979Navigator },
Maps67975: { screen: Maps67975Navigator },
UserProfile67971: { screen: UserProfile67971Navigator },
Maps67931: { screen: Maps67931Navigator },
Add-Item67930: { screen: Add-Item67930Navigator },
Maps67926: { screen: Maps67926Navigator },
UserProfile67922: { screen: UserProfile67922Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
