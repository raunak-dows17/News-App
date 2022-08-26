import { Text, View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import { NativeBaseProvider, Spinner, Divider, Image } from "native-base";
import { services } from "../Service.js";
import moment from "moment";

export default function Health() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    services("health")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <NativeBaseProvider>
      <ScrollView nestedScrollEnabled={true}>
        {newsData.length > 1 ? (
          <FlatList
            data={newsData}
            renderItem={({ item }) => (
              <View>
                <View style={styles.newsContainer}>
                  <Image
                    width={550}
                    height={250}
                    source={{ uri: item.urlToImage }}
                    resizeMode={"cover"}
                    alt="Alternate Text"
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>
                    {moment(item.publishedAt).format("lll")}
                  </Text>
                  <Text style={styles.newsDescription}>{item.description}</Text>
                </View>
                <Divider my={2} bg="yellow.400" />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={StyleSheet.spinner}>
            <Spinner color="danger.400" />
          </View>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    marginTop: 10,
      fontWeight: "500",
    color: "#fff"
  },
  newsDescription: {
    fontSize: 16,
      marginTop: 10,
    color: "#fff",
  },
  date: {
      fontSize: 12,
      color: "gold"
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
});
