import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Svg, Circle, Defs, LinearGradient, Stop, Path } from 'react-native-svg';

export default function IPhone11ProMax3() {
  return (
    <View style={styles.iPhone11ProMax3Container}>
      <View style={styles.rectangle17} />
      <Text style={styles.deconnexion}>déconnexion</Text>
      <Text style={styles.mesinformations}>Mes informations</Text>

      <Svg style={styles.ellipse5} width="414" height="338" viewBox="0 0 414 338" fill="none">
        <Circle cx="206.5" cy="0.5" r="337.5" fill="#C4C4C4" />
        <Circle cx="206.5" cy="0.5" r="337.5" fill="url(#paint0_linear_15_11)" />
        <Defs>
          <LinearGradient id="paint0_linear_15_11" x1="-15" y1="74" x2="511" y2="-88" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FEBC54" />
            <Stop offset="1" stopColor="#FDD155" />
          </LinearGradient>
        </Defs>
      </Svg>

      <Text style={styles.hugo91940}>hugo91940</Text>
      <Text style={styles.monProfil}>MON PROFIL</Text>

      <ImageBackground
        style={styles.image20}
        source={{ uri: 'https://dummyimage.com/162x162/000/fff.png' }}
      />

      <Svg style={styles.ellipse11} width="44" height="44" viewBox="0 0 44 44" fill="none">
        <Circle cx="22" cy="22" r="22" fill="#FFAB4D" />
      </Svg>

      <View style={styles.arrow_back_24px}>
        <Svg style={styles.iconnavigationarrowBack24px} width="22" height="22" viewBox="0 0 22 22" fill="none">
          <Path
            d="M21.6666 9.66683H5.43998L12.8933 2.2135L11 0.333496L0.333313 11.0002L11 21.6668L12.88 19.7868L5.43998 12.3335H21.6666V9.66683Z"
            fill="white"
          />
        </Svg>
      </View>

      <Text style={styles.securite}>Sécurité</Text>
      <Text style={styles.mesFavoris}>Mes favoris</Text>
      <Text style={styles.mesSignalements}>Mes signalements</Text>

      <Svg style={styles.vector} width="273" height="2" viewBox="0 0 273 2" fill="none">
        <Path d="M0 1L273 1.00002" stroke="#FFF3CC" />
      </Svg>

      <View style={styles.frame} />
    </View>
  );
}

const styles = StyleSheet.create({
  iPhone11ProMax3Container: {
    position: 'relative',
    height: 896,
    width: 414,
    backgroundColor: 'rgba(240, 240, 240, 1)',
  },
  rectangle17: {
    position: 'absolute',
    top: 374,
    left: 28,
    width: 366,
    height: 340,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 40,
  },
  deconnexion: {
    position: 'absolute',
    top: 837,
    left: 147,
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 171, 77, 1)',
  },
  mesinformations: {
    position: 'absolute',
    top: 412,
    left: 71,
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(253, 211, 85, 1)',
  },
  ellipse5: {
    position: 'absolute',
    top: -50,
    width: 675,
    height: 675,
  },
  hugo91940: {
    position: 'absolute',
    top: 564,
    left: 260,
    fontSize: 28,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  monProfil: {
    position: 'absolute',
    top: 362,
    left: 228,
    fontSize: 35,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 1.05,
  },
  image20: {
    position: 'absolute',
    top: -5,
    left: -27,
    width: 162,
    height: 162,
  },
  ellipse11: {
    position: 'absolute',
    top: 520,
    left: 357,
    width: 44,
    height: 44,
  },
  arrow_back_24px: {
    position: 'absolute',
    top: 372,
    left: 154,
    width: 32,
    height: 32,
  },
  iconnavigationarrowBack24px: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  securite: {
    position: 'absolute',
    top: 473,
    left: 69,
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(253, 211, 85, 1)',
  },
  mesFavoris: {
    position: 'absolute',
    top: 535,
    left: 69,
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(253, 211, 85, 1)',
  },
  mesSignalements: {
    position: 'absolute',
    top: 597,
    left: 69,
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(253, 211, 85, 1)',
  },
  vector: {
    position: 'absolute',
    top: 633,
    left: 71,
    width: 273,
  },
  frame: {
    position: 'absolute',
    top: 411,
    left: 71,
    width: 173,
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
  },
});
