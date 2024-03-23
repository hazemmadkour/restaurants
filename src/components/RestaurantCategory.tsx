import { FlatList, StyleSheet, Text, View } from "react-native";
import { Restaurant } from "../model/Restaurant";
import RestaurantCard from "./RestaurantCard";

const RestaurantCategory = ({
  title,
  restaurants,
}: {
  title: string;
  restaurants: Restaurant[];
}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={restaurants}
        horizontal={true}
        renderItem={(item) => <RestaurantCard restaurant={item.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: "29%",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    marginBottom: 5,
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestaurantCategory;
