import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type SearchBarProps = {
  onSearch: (term: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps): JSX.Element => {
  const [term, setTerm] = useState("");

  const onChange = (value: string) => {
    setTerm(value);
  };

  const onSearchClick = () => {
    onSearch(term);
  };

  return (
    <View style={styles.containerStyle}>
      <FontAwesome name="search" size={24} color="black" />
      <TextInput
        placeholder="Search"
        style={styles.textStyle}
        value={term}
        onChangeText={onChange}
        onSubmitEditing={onSearchClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    margin: 10,
    padding: 5,
    backgroundColor: "silver",
    borderRadius: 5,
    alignItems: "center",
  },
  textStyle: {
    height: 40,
    marginLeft: 5,
    flex: 1,
  },
});

export default SearchBar;
