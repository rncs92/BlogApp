import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";

const MainScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <TouchableOpacity style={styles.button} onPress={addBlogPost}>
        <Text>Add Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B6EAFA",
    alignSelf: "center",
    padding: 10,
    width: 250,
    borderRadius: 5,
    margin: 6,
    alignItems: "center",
  },
});

export default MainScreen;
