import React, { useState, useEffect, useContext } from 'react';
import { YellowBox } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { fb } from '../../db_config';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { BaseColor, useTheme, useFont } from "@config";
import { useTranslation } from "react-i18next";
import { Icon } from "@components";
/* Stack Screen */
import Profile1 from "@screens/Profile1";
import Profile2 from "@screens/Profile2";
import Profile3 from "@screens/Profile3";
import Profile4 from "@screens/Profile4";
import Profile5 from "@screens/Profile5";
import Profile6 from "@screens/Profile6";
import Profile7 from "@screens/Profile7";
import Profile8 from "@screens/Profile8";
import More from "@screens/More";
import Tour from "@screens/Tour";
import Car from "@screens/Car";
import OverViewCar from "@screens/OverViewCar";
import Hotel from "@screens/Hotel";
import Review from "@screens/Review";
import Feedback from "@screens/Feedback";
import Messages from "@screens/Messages";
import Notification from "@screens/Notification";
import Walkthrough from "@screens/Walkthrough";
import SignUp from "@screens/SignUp";
import SignIn from "@screens/SignIn";
import ResetPassword from "@screens/ResetPassword";
import ChangePassword from "@screens/ChangePassword";
import ProfileEdit from "@screens/ProfileEdit";
import ProfileExample from "@screens/ProfileExample";
import ChangeLanguage from "@screens/ChangeLanguage";
import HotelInformation from "@screens/HotelInformation";
import CheckOut from "@screens/CheckOut";
import Currency from "@screens/Currency";
import Coupons from "@screens/Coupons";
import HotelDetail from "@screens/HotelDetail";
import ContactUs from "@screens/ContactUs";
import PreviewBooking from "@screens/PreviewBooking";
import PricingTable from "@screens/PricingTable";
import PricingTableIcon from "@screens/PricingTableIcon";
import BookingDetail from "@screens/BookingDetail";
import PostDetail from "@screens/PostDetail";
import TourDetail from "@screens/TourDetail";
import CarDetail from "@screens/CarDetail";
import AboutUs from "@screens/AboutUs";
import OurService from "@screens/OurService";
import FlightSearch from "@screens/FlightSearch";
import SelectFlight from "@screens/SelectFlight";
import FlightResult from "@screens/FlightResult";
import FlightSummary from "@screens/FlightSummary";
import FlightTicket from "@screens/FlightTicket";
import CruiseSearch from "@screens/CruiseSearch";
import Cruise from "@screens/Cruise";
import CruiseDetail from "@screens/CruiseDetail";
import BusSearch from "@screens/BusSearch";
import BusList from "@screens/BusList";
import BusSelectSeat from "@screens/BusSelectSeat";
import PreviewBusBooking from "@screens/PreviewBusBooking";
import BusTicket from "@screens/BusTicket";
import Event from "@screens/Event";
import EventDetail from "@screens/EventDetail";
import EventPreviewBooking from "@screens/EventPreviewBooking";
import DashboardEvent from "@screens/DashboardEvent";
import EventTicket from "@screens/EventTicket";
import PaymentMethod from "@screens/PaymentMethod";
import MyPaymentMethod from "@screens/MyPaymentMethod";
import AddPayment from "@screens/AddPayment";
import PaymentMethodDetail from "@screens/PaymentMethodDetail";
import PreviewPayment from "@screens/PreviewPayment";
import Setting from "@screens/Setting";
import ThemeSetting from "@screens/ThemeSetting";
import NotFound from "@screens/NotFound";
/* Bottom Screen */
import Home from "@screens/Home";
import Booking from "@screens/Booking";
import Messenger from "@screens/Messenger";
import Post from "@screens/Post";
import Profile from "@screens/Profile";
import UploadFiles from '../screens/UploadFiles'
import { AuthContext, AuthContextProvider } from '../../hooks/AuthContext';
import CostSubmit from '../screens/CostSubmit';
import Weather from '../../screens/Weather';


import BottomTabNavigator from './BottomTabNavigator';
import Price from '../../screens/Price';
import PriceDetail from '../../screens/PriceDetail';
const MainStack = createStackNavigator();
export default function Main() {
  // const [user, setUser] = useContext(AuthContext);

  useEffect(() => {
    // const subscriber = fb.auth().onAuthStateChanged((current_user) => {
    //   if (current_user) {
    //     setUser(current_user);
    //   } else {
    //     setUser(null);
    //   }
    // });
    // return subscriber;
  },[]);


  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen name="Walkthrough" component={Walkthrough} />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="SignIn" component={SignIn} />
      <MainStack.Screen name="UploadFile" component={UploadFiles} />
      <MainStack.Screen name="PostDetail" component={PostDetail} />
      <MainStack.Screen name="BookingDetail" component={BookingDetail} />
      <MainStack.Screen name="CostSubmit" component={CostSubmit} />

      {/* my screens */}
      <MainStack.Screen name="Weather" component={Weather} />
      <MainStack.Screen name="Price" component={Price} />
      <MainStack.Screen name="PriceDetail" component={PriceDetail} />

    </MainStack.Navigator>
  )

}

