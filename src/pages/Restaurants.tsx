import React, { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import { View } from "react-native";
import RestaurantCategory from "../components/RestaurantCategory";
import axios from "../handlers/RestHelper";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const onSearch = async (term: string) => {
    const response = await axios.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose",
      },
    });

    setRestaurants(response.data.businesses);
  };

  const costEffectiveRestaurants = useMemo(() => {
    return restaurants.filter(({ rating }) => rating < 2);
  }, [restaurants]);

  const bitPricerRestaurants = useMemo(() => {
    return restaurants.filter(({ rating }) => rating >= 2 && rating < 4);
  }, [restaurants]);

  const bigSpenderRestaurants = useMemo(() => {
    return restaurants.filter(({ rating }) => rating >= 4);
  }, [restaurants]);

  return (
    <View>
      <SearchBar onSearch={onSearch} />
      {restaurants.length ? (
        <>
          <RestaurantCategory
            title="Cost Effective"
            restaurants={costEffectiveRestaurants}
          />
          <RestaurantCategory
            title="Bit Pricer"
            restaurants={bitPricerRestaurants}
          />
          <RestaurantCategory
            title="Big Spender!"
            restaurants={bigSpenderRestaurants}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Restaurants;
