import { StackNavigationProp } from "@react-navigation/stack";
type RoomStackParamList = {
  Restaurants: undefined;
  RestaurantDetails: { id: string };
};

export type RestaurantDetailProps = StackNavigationProp<
  RoomStackParamList,
  "RestaurantDetails"
>;
