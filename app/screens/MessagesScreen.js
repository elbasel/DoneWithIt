import { FlatList, SafeAreaView } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    subTitle: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    subTitle: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}
