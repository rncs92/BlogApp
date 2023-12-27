import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(content) => setContent(content)}
        value={content}
        multiline={true}
      />
      <Text>
        {title} {content}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Main");
          })
        }
      >
        <Text>Save Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 350,
    height: 30,
    alignSelf: "center",
  },
  label: {
    paddingHorizontal: 13,
    marginTop: 15,
    fontSize: 15,
    fontWeight: "600",
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

export default CreateScreen;
