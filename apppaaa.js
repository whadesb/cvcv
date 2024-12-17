import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop, Line, Circle } from 'react-native-svg';

export default function IPhone11ProMax18() {
  return (
    <View style={styles.container}>
      <Svg style={styles.ellipse5} width="414" height="168" viewBox="0 0 414 168" fill="none">
        <Path
          d="M544 -169.5C544 16.8961 392.896 168 206.5 168C20.1039 168 -131 16.8961 -131 -169.5C-131 -355.896 20.1039 -507 206.5 -507C392.896 -507 544 -355.896 544 -169.5Z"
          fill="#C4C4C4"
        />
        <Path
          d="M544 -169.5C544 16.8961 392.896 168 206.5 168C20.1039 168 -131 16.8961 -131 -169.5C-131 -355.896 20.1039 -507 206.5 -507C392.896 -507 544 -355.896 544 -169.5Z"
          fill="url(#paint0_linear_21_19)"
        />
        <Defs>
          <LinearGradient id="paint0_linear_21_19" x1="-15" y1="48.5" x2="511" y2="-113.5" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FFC15F" />
            <Stop offset="1" stopColor="#FDD155" />
          </LinearGradient>
        </Defs>
      </Svg>

      <Text style={styles.securite}>sécurité</Text>

      <View style={styles.arrow_back_24px}>
        <Svg style={styles.iconnavigationarrowBack24px} width="22" height="22" viewBox="0 0 22 22" fill="none">
          <Path
            d="M21.6667 9.66671H5.44001L12.8933 2.21337L11 0.333374L0.333344 11L11 21.6667L12.88 19.7867L5.44001 12.3334H21.6667V9.66671Z"
            fill="white"
          />
        </Svg>
      </View>

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

      <Text style={styles.vouspouvezchanger}>Vous pouvez changer votre mot de passe à tout moment.</Text>

      <View style={styles.rectangle20} />
      <View style={styles.rectangle19} />
      <Text style={styles.changementEffectue}>Le changement du mot de passe{'\n'}a bien été effectué.</Text>

      <View style={styles.rectangle21} />
      <Text style={styles.retourAuProfil}>RETOUR AU PROFIL</Text>

      <Svg style={styles.rondCheck} width="75" height="75" viewBox="0 0 75 75" fill="none">
        <Circle cx="37.5" cy="37.5" r="35.5" stroke="#FFAB4D" strokeWidth="4" />
        <Line
          x1="23.3589"
          y1="38.8938"
          x2="31.6768"
          y2="47.2117"
          stroke="#FFAB4D"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Line
          x1="32.2007"
          y1="47.2116"
          x2="52.5789"
          y2="26.8334"
          stroke="#FFAB4D"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
  },
  arrow_back_24px: {
    position: 'absolute',
    top: 542,
    left: 154,
    width: 32,
    height: 32,
  },
  confirmer: {
    position: 'absolute',
    top: 584,
    left: 144,
    fontSize: 21,
    fontWeight: '700',
    color: 'white',
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
    backgroundColor: 'white',
    borderRadius: 40,
  },
  motdepasseactuel: {
    position: 'absolute',
    top: 344,
    left: 68,
    fontSize: 17,
    color: 'rgba(206, 206, 233, 1)',
  },
  nouveaumotdepasse: {
    position: 'absolute',
    top: 405,
    left: 68,
    fontSize: 17,
    color: 'rgba(206, 206, 233, 1)',
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
  vouspouvezchanger: {
    position: 'absolute',
    top: 238,
    left: 79,
    textAlign: 'center',
    fontSize: 14,
    color: 'rgba(149, 148, 210, 1)',
  },
  changementEffectue: {
    position: 'absolute',
    top: 466,
    left: 63,
    textAlign: 'center',
    fontSize: 17,
    color: 'rgba(255, 171, 77, 1)',
  },
  rectangle21: {
    position: 'absolute',
    top: 576,
    left: 122,
    width: 169,
    height: 45,
    backgroundColor: 'rgba(254, 188, 84, 1)',
    borderRadius: 15,
  },
  retourAuProfil: {
    position: 'absolute',
    top: 587,
    left: 138,
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
  rondCheck: {
    position: 'absolute',
    top: 363,
    left: 169,
    width: 75,
    height: 75,
  },
});
