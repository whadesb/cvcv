import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop, Line } from 'react-native-svg';

export default function IPhone11ProMax4() {
  return (
    <View style={styles.iPhone11ProMax4Container}>
      <Svg style={styles.ellipse5} width="414" height="168" viewBox="0 0 414 168" fill="none">
        <Path
          d="M544 -169.5C544 16.8961 392.896 168 206.5 168C20.1039 168 -131 16.8961 -131 -169.5C-131 -355.896 20.1039 -507 206.5 -507C392.896 -507 544 -355.896 544 -169.5Z"
          fill="#C4C4C4"
        />
        <Path
          d="M544 -169.5C544 16.8961 392.896 168 206.5 168C20.1039 168 -131 16.8961 -131 -169.5C-131 -355.896 20.1039 -507 206.5 -507C392.896 -507 544 -355.896 544 -169.5Z"
          fill="url(#paint0_linear_15_57)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_15_57"
            x1="-15"
            y1="48.4999"
            x2="511"
            y2="-113.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFC15F" />
            <Stop offset="1" stopColor="#FDD155" />
          </LinearGradient>
        </Defs>
      </Svg>

      <Text style={styles.mESINFOS}>MES INFOS</Text>

      <View style={styles.arrow_back_24px}>
        <Svg style={styles.iconnavigationarrowBack24px} width="22" height="22" viewBox="0 0 22 22" fill="none">
          <Path
            d="M21.6667 9.66658H5.43999L12.8933 2.21325L11 0.333252L0.333328 10.9999L11 21.6666L12.88 19.7866L5.43999 12.3333H21.6667V9.66658Z"
            fill="white"
          />
        </Svg>
      </View>

      <View style={styles.rectangle17} />
      <View style={styles.rectangle18} />
      <View style={styles.rectangle19} />
      <Text style={styles.monPSEUDO}>mon PSEUDO</Text>
      <Text style={styles.monADRESSEMAIL}>mon ADRESSE MAIL</Text>
      <Text style={styles.hugo91940}>hugo91940</Text>

      <Svg style={styles.line6} width="270" height="1" viewBox="0 0 270 1" fill="none">
        <Line y1="0.5" x2="270" y2="0.5" stroke="#DFDFF1" />
      </Svg>

      <Text style={styles.monpseudo}>Mon pseudo</Text>

      <Svg style={styles.line7} width="270" height="1" viewBox="0 0 270 1" fill="none">
        <Line y1="0.5" x2="270" y2="0.5" stroke="#DFDFF1" />
      </Svg>

      <View style={styles.rectangle20} />
      <View style={styles.rectangle21} />
      <Text style={styles.cONFIRMER}>CONFIRMER</Text>
      <Text style={styles.xxxxxxgmailcom}>xxxxxx@gmail.com</Text>

      <Svg style={styles.line8} width="270" height="1" viewBox="0 0 270 1" fill="none">
        <Line y1="0.5" x2="270" y2="0.5" stroke="#DFDFF1" />
      </Svg>

      <Text style={styles.saisirnouvelleadresseemail}>Saisir nouvelle adresse e-mail</Text>

      <Svg style={styles.line9} width="270" height="1" viewBox="0 0 270 1" fill="none">
        <Line y1="0.5" x2="270" y2="0.5" stroke="#DFDFF1" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  iPhone11ProMax4Container: {
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
  mESINFOS: {
    position: 'absolute',
    top: 532,
    left: 241,
    fontSize: 35,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  arrow_back_24px: {
    position: 'absolute',
    top: 542,
    left: 154,
    width: 32,
    height: 32,
  },
  rectangle17: {
    position: 'absolute',
    top: 308,
    left: 42,
    width: 330,
    height: 165,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 40,
  },
  rectangle18: {
    position: 'absolute',
    top: 234,
    left: 42,
    width: 330,
    height: 42,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 33,
  },
  rectangle19: {
    position: 'absolute',
    top: 511,
    left: 42,
    width: 330,
    height: 42,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 33,
  },
  monPSEUDO: {
    position: 'absolute',
    top: 241,
    left: 140,
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(255, 171, 77, 1)',
  },
  monADRESSEMAIL: {
    position: 'absolute',
    top: 517,
    left: 109,
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(255, 171, 77, 1)',
  },
  hugo91940: {
    position: 'absolute',
    top: 342,
    left: 68,
    fontSize: 17,
    fontWeight: '600',
    color: 'rgba(149, 148, 210, 1)',
  },
  monpseudo: {
    position: 'absolute',
    top: 396,
    left: 68,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(206, 206, 233, 1)',
  },
  rectangle20: {
    position: 'absolute',
    top: 585,
    left: 42,
    width: 330,
    height: 161,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 40,
  },
  rectangle21: {
    position: 'absolute',
    top: 787,
    left: 109,
    width: 194,
    height: 45,
    backgroundColor: 'rgba(254, 188, 84, 1)',
    borderRadius: 15,
  },
  cONFIRMER: {
    position: 'absolute',
    top: 794,
    left: 143,
    fontSize: 21,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  xxxxxxgmailcom: {
    position: 'absolute',
    top: 619,
    left: 68,
    fontSize: 17,
    fontWeight: '600',
    color: 'rgba(149, 148, 210, 1)',
  },
  saisirnouvelleadresseemail: {
    position: 'absolute',
    top: 673,
    left: 68,
    fontSize: 17,
    fontWeight: '400',
    color: 'rgba(206, 206, 233, 1)',
  },
});
