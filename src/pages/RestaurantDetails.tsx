import React, { useEffect, useState } from "react";
import axios from "../handlers/RestHelper";
import { FlatList, Image, StyleSheet, View } from "react-native";

const RestaurantDetails = ({ route }) => {
  const [photos, setPhotos] = useState([]);
  const init = async () => {
    const response = await axios.get(`/${route.params.id}`);

    setPhotos(response.data.photos);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item}
        renderItem={(photo) => (
          <Image style={styles.imageStyle} src={photo.item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
  },
  imageStyle: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
});

export default RestaurantDetails;
