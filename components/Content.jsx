import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import WelcomeCard from "./WelcomeCard";
import CategoryCard from "./CategoryCard";
import prenatal from "../assets/prenatal.png";
import nutritional from "../assets/nutritional.png";
import postpartum from "../assets/postpartum.png";
import fplanning from "../assets/fplanning.png";

const Content = () => {
  return (
    <ScrollView style={styles.content}>
      <WelcomeCard />
      <CategoryCard title="Prenatal Care" color="#B8E0FF" image={prenatal} />
      <CategoryCard
        title="Nutritional Tips"
        color="#FFD6D6"
        image={nutritional}
      />
      <CategoryCard
        title="Postpartum Care"
        color="#FFD6FF"
        image={postpartum}
      />
      <CategoryCard title="Family Planning" color="#D6FFE1" image={fplanning} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
  },
});

export default Content;
