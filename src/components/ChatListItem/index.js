import { Text, View, Image, StyleSheet } from "react-native";

const ChatListItem = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "../assets/img/zalo_icon.svg" }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>Mei</Text>
          <Text style={styles.subtitle}>8:10</Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle} >Hello there hsh  hhss hhhshhs h  hhss hhhshhs h  hhss hhhshhs h hhreh hahha hhf hfh</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  content: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: "#F2F2F2",
    padding: 12,
  },
  row: {
    flexDirection: "row",
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
  },
});

export default ChatListItem;
