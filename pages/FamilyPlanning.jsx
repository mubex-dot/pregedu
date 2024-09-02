import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../components/Header";
import fplanning1 from "../assets/fam.jpeg.jpg";
import fplanning2 from "../assets/fam2.jpeg.jpg";
import fplanning3 from "../assets/fam-2.jpeg.jpg";
import fplanning4 from "../assets/fam3.jpeg.jpg";

const familyPlanningContent = [
  {
    id: 1,
    title: "1. Me ake nufi da Shirin Iyali?",
    description:
      "`Shirin Iyali yana nufin hanyoyin da ma'aurata ke amfani da su domin tsara yawan 'ya'yan da za su haifa, da kuma lokacin da za su haife su. Wannan yana ba su damar kula da lafiyar su, da ta iyalinsu, da kuma samun damar ciyar da 'ya'yansu da kyau.`",
  },
  {
    id: 2,
    title: "2. Muhimmancin Shirin Iyali",
    description:
      "`Kula da Lafiya: Shirin Iyali yana taimakawa wajen kare lafiyar uwa da jariri. Idan mace tana samun hutu tsakanin haihuwa, tana da damar samun lafiya da sauƙi. Inganta Rayuwa: Yawan yara da mutum yake iya kulawa da shi yadda ya kamata yana ƙaruwa ta hanyar Shirin Iyali. Hakan yana taimakawa wajen ciyar da su, tufatar da su, da kuma ba su ilimi mai kyau. Gudanar da Iyali: Ma'aurata suna iya tsara yawan 'ya'yan da suke so, da kuma lokacin da ya dace su sami su.`",
  },
  {
    id: 3,
    title: "3. Hanyoyin Shirin Iyali",
    description:
      "`Kayan Kariyar Ciki (Contraceptives): Kwayoyi (Pills): Ana amfani da kwayoyi domin hana mace daukar ciki. Ana shan su kullum. Allura: Ana yin allura da ke hana mace daukar ciki tsawon wata uku ko fiye. Implants: Wani karamin na'ura ne da ake sanyawa a hannu da ke hana ciki har tsawon shekara biyu zuwa biyar. Kwanduna (Condoms): Ana amfani da su yayin jima'i domin hana ciki da kuma kare kamuwa da cututtuka. Hanyoyin Dabi’a: Fargar Auratayya: Ma'aurata na iya tsayar da jima'i na wani lokaci domin gujewa daukar ciki. Lissafi: Mace tana lissafin kwanakin da take samun haila domin sanin lokacin da zai fi sauki ta dauki ciki, sai su guje wa jima'i a wannan lokacin.`",
    image: fplanning1,
  },
  {
    id: 4,
    title: "4. Tattaunawa da Masani",
    description:
      "`Yana da muhimmanci ma'aurata su tattauna da likita ko wani kwararre a fannin kiwon lafiya kafin su fara amfani da wata hanya ta Shirin Iyali. Wannan yana taimakawa wajen sanin wacce hanya ta fi dacewa da su, la'akari da yanayin lafiyarsu.`",
    image: fplanning2,
  },
  {
    id: 5,
    title: "5. Shin Shirin Iyali yana da illa?",
    description:
      "`Kamar yadda yake a kowane nau'in magani, hanyoyin Shirin Iyali suna iya samun sakamako masu illa. Amma, mafi yawan lokuta, illolin suna ɗan karami kuma suna raguwa bayan wani lokaci. Dole ne a sanar da likita idan aka fuskanci wata matsala bayan fara amfani da wata hanya.`",
    image: fplanning3,
  },
  {
    id: 6,
    title: "6. Gaskiyar Shirin Iyali",
    description:
      "`Shirin Iyali ba yana nufin hana haihuwa gaba ɗaya ba ne, sai dai yana ba da damar tsara lokacin da za a haihu, da kuma rage yawan jarirai masu mutuwa ko haihuwa da matsaloli. Hakanan yana taimakawa wajen samun iyali mai inganci.`",
    image: fplanning4,
  },
  {
    id: 7,
    title: "7. Tambayoyi da Bayani",
    description:
      "`Idan kuna son ƙarin bayani ko kuna da wata tambaya, yana da kyau ku tuntubi likitanku ko kuma ku ziyarci cibiyar kiwon lafiya mafi kusa da ku.`",
  },
];

const FamilyPlanning = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header toggleSidebar={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Family Planning/Tsarin Iyali</Text>
        <Text style={styles.paragraph}>
          Shirin iyali yana ba wa mutane da ma'aurata damar hasashen da cimma
          yawan yaran da suke so da kuma tsarawa da lokacin haihuwar su.
        </Text>
        {/* <Text style={styles.subTitle}>Common Family Planning Methods:</Text> */}
        {familyPlanningContent.map((item) => (
          <View key={item.id} style={styles.methodItem}>
            <Text style={styles.methodText}>{item.title}</Text>
            <Text style={styles.methodDescription}>{item.description}</Text>
            {item.image && <Image source={item.image} style={styles.image} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  content: {
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  methodItem: {
    // backgroundColor: "#fff",
    // padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  methodText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  methodDescription: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default FamilyPlanning;
