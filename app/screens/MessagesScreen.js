import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Abdulrahman",
    subTitle: "Hello There!",
    image: require("../assets/elbasel.jpg"),
  },
  {
    id: 2,
    title: "Abdelrahman",
    subTitle: "Yay!",
    image: require("../assets/elbasel.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => {
              console.log("Message Selected", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              subTitle: "D2",
              image: require("../assets/elbasel.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
