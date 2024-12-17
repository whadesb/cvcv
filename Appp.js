import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop, Line } from 'react-native-svg';

export default function IPhone11ProMax5() {
  return (
    <View style={styles.iPhone11ProMax5Container}>
      <Svg style={styles.ellipse5} width="414" height="168" viewBox="0 0 414 168" fill="none">
        <Path
          d="M544 -169.5C544 16.8961 392.896 168 206.5 168C20.1039 168 -131 16.8961 -131 -169.5C-131 -355.896 20.1039 -507 206.5 -507C392.896 -507 544 -355.896 544 -169.5Z"
          fill="#C4C4C4"
        />
        <Path
          d="M544 -169.5C544 16.8961 392.896 168 206.5 168C20.1039 168 -131 16.8961 -131 -169.5C-131 -355.896 20.1039 -507 206.5 -507C392.896 -507 544 -355.896 544 -169.5Z"
          fill="url(#paint0_linear_15_118)"
        />
        <Defs>
          <LinearGradient id="paint0_linear_15_118" x1="-15" y1="48.4999" x2="511" y2="-113.5" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FFC15F" />
            <Stop offset="1" stopColor="#FDD155" />
          </LinearGradient>
        </Defs>
      </Svg>

      <Text style={styles.securite}>sécurité</Text>

      <View style={styles.arrow_back_24px}>
        <Svg style={styles.iconnavigationarrowBack24px} width="22" height="22" viewBox="0 0 22 22" fill="none">
          <Path
            d="M21.6667 9.66658H5.44001L12.8933 2.21325L11 0.333252L0.333344 10.9999L11 21.6666L12.88 19.7866L5.44001 12.3333H21.6667V9.66658Z"
            fill="white"
          />
        </Svg>
      </View>

      <View style={styles.rectangle12} />
      <Text style={styles.confirmer}>CONFIRMER</Text>
      <Text style={styles.annuler}>annuler</Text>
      <View style={styles.rectangle17} />
      <View style={styles.rectangle18} />

      <Text style={styles.motdepasseactuel}>Mot de passe actuel</Text>
      <Text style={styles.nouveaumotdepasse}>Nouveau mot de passe</Text>

      <Svg style={styles.line3} width="270" height="1" viewBox="0 0 270 1" fill="none">
        <Line y1="0.5" x2="270" y2="0.5" stroke="#DFDFF1" />
      </Svg>

      <Svg style={styles.line4} width="270" height="1" viewBox="0 0 270 1" fill="none">
        <Line y1="0.5" x2="270" y2="0.5" stroke="#DFDFF1" />
      </Svg>

      <Text style={styles.saisirlenouveaumotdepasse}>Saisir le nouveau mot de passe</Text>

      <Svg style={styles.line5} width="270" height="1" viewBox="0 0 270 1" fill="none">
        <Line y1="0.5" x2="270" y2="0.5" stroke="#DFDFF1" />
      </Svg>

      <Text style={styles.vouspouvezchangervotremotdepasse}>
        Vous pouvez changer votre mot de passe à tout moment.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iPhone11ProMax5Container: {
    position: 'relative',
    flexShrink: 0,
    height: 896,
    width: 414,
    backgroundColor: 'rgba(240, 240, 240, 1)',
  },
  ellipse5: {
    position: 'absolute',
    width: 675,
    height: 675,
  },
  securite: {
    position: 'absolute',
    top: 532,
    left: 252,
    fontSize: 35,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 1.05,
  },
  arrow_back_24px: {
    position: 'absolute',
    top: 542,
    left: 154,
    width: 32,
    height: 32,
  },
  rectangle12: {
    position: 'absolute',
    top: 577,
    left: 110,
    width: 194,
    height: 45,
    backgroundColor: 'rgba(254, 188, 84, 1)',
    borderRadius: 15,
  },
  confirmer: {
    position: 'absolute',
    top: 584,
    left: 144,
    fontSize: 21,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  annuler: {
    position: 'absolute',
    top: 638,
    left: 170,
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 171, 77, 1)',
  },
  rectangle17: {
    position: 'absolute',
    top: 309,
    left: 42,
    width: 330,
    height: 231,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 40,
  },
  rectangle18: {
    position: 'absolute',
    top: 222,
    left: 42,
    width: 330,
    height: 66,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 33,
  },
  motdepasseactuel: {
    position: 'absolute',
    top: 344,
    left: 68,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(206, 206, 233, 1)',
    letterSpacing: 0.28,
  },
  nouveaumotdepasse: {
    position: 'absolute',
    top: 405,
    left: 68,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(206, 206, 233, 1)',
    letterSpacing: 0.28,
  },
  line3: {
    position: 'absolute',
    top: 377,
    left: 69,
    width: 270,
  },
  line4: {
    position: 'absolute',
    top: 438,
    left: 69,
    width: 270,
  },
  saisirlenouveaumotdepasse: {
    position: 'absolute',
    top: 465,
    left: 68,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(206, 206, 233, 1)',
    letterSpacing: 0.28,
  },
  line5: {
    position: 'absolute',
    top: 498,
    left: 69,
    width: 270,
  },
  vouspouvezchangervotremotdepasse: {
    position: 'absolute',
    top: 238,
    left: 79,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(149, 148, 210, 1)',
    lineHeight: 17,
  },
});
