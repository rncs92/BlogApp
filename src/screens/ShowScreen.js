import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigation.navigate("Edit")}
      >
        <Text>Edit Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
  },
  content: {
    fontSize: 17,
    alignSelf: "flex-start",
    marginVertical: 20,
    marginHorizontal: 10,
  },
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

export default ShowScreen;
