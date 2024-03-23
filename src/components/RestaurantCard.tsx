import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Restaurant } from "../model/Restaurant";
import { useNavigation } from "@react-navigation/native";
import { RestaurantDetailProps } from "../model/Routes";

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { navigate } = useNavigation<RestaurantDetailProps>();
  const onPress = () => {
    navigate("RestaurantDetails", { id: restaurant.id });
  };

  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Image style={styles.imageStyle} src={restaurant.image_url} />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text
        style={styles.hintStyle}
      >{`${restaurant.rating} Stars, ${restaurant.review_count} Reviews`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 15,
  },
  imageStyle: {
    width: 200,
    height: "70%",
    marginTop: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
  hintStyle: {
    color: "silver",
  },
});

export default RestaurantCard;
