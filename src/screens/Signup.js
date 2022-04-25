import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

function Signup(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
        <View style={styles.rect1}></View>
        <View style={styles.rect}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.loremIpsum1}>Register your account</Text>
          <View style={styles.textInput2Stack}>
            <TextInput placeholder="" style={styles.textInput2}></TextInput>
            <FontAwesomeIcon name="user" style={styles.icon}></FontAwesomeIcon>
          </View>
          <View style={styles.textInputStack}>
            <TextInput
              placeholder=""
              textBreakStrategy="simple"
              inlineImagePadding={"null"}
              style={styles.textInput}
            ></TextInput>
            <EntypoIcon name="mail" style={styles.icon3}></EntypoIcon>
          </View>
          <View style={styles.placeholder1Stack}>
            <TextInput
              placeholder=""
              textBreakStrategy="simple"
              inlineImagePadding={"null"}
              style={styles.placeholder1}
            ></TextInput>
            <FontAwesomeIcon
              name="phone"
              style={styles.icon4}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.placeholder2Stack}>
            <TextInput
              placeholder=""
              textBreakStrategy="simple"
              inlineImagePadding={"null"}
              secureTextEntry={true}
              style={styles.placeholder2}
            ></TextInput>
            <FontAwesomeIcon name="lock" style={styles.icon2}></FontAwesomeIcon>
          </View>
          <MaterialButtonViolet
            caption="REGISTER"
            style={styles.materialButtonViolet1}
          ></MaterialButtonViolet>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled2")}
            style={styles.button}
          >
            <View style={styles.loremIpsumRow}>
              <Text style={styles.loremIpsum}>Already have an account?</Text>
              <Text style={styles.login}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    width: 375,
    height: 812,
    left: 10,
    top: 21
  },
  scrollArea_contentContainerStyle: {
    height: 812,
    width: 375
  },
  rect1: {
    top: 0,
    left: 0,
    width: 375,
    height: 255,
    position: "absolute",
    backgroundColor: "#5173c0",
    borderBottomLeftRadius: 0
  },
  rect: {
    top: 168,
    left: 1,
    width: 375,
    height: 644,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 68,
    borderTopRightRadius: 68
  },
  welcome: {
    fontFamily: "roboto-700",
    color: "#5173c0",
    fontSize: 37,
    marginTop: 15,
    marginLeft: 54
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(92,92,92,1)",
    fontSize: 14,
    marginLeft: 63
  },
  textInput2: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 44,
    width: 268,
    textAlign: "left",
    letterSpacing: 0,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: "rgba(255,255,255,1)",
    left: 0
  },
  icon: {
    top: 12,
    left: 19,
    position: "absolute",
    color: "#5173c0",
    fontSize: 20,
    height: 20,
    width: 14
  },
  textInput2Stack: {
    width: 268,
    height: 44,
    marginTop: 33,
    marginLeft: 53
  },
  textInput: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 44,
    width: 268,
    textAlign: "left",
    letterSpacing: 0,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    left: 0
  },
  icon3: {
    top: 12,
    left: 20,
    position: "absolute",
    color: "#5173c0",
    fontSize: 20,
    height: 22,
    width: 20
  },
  textInputStack: {
    width: 268,
    height: 44,
    marginTop: 17,
    marginLeft: 52
  },
  placeholder1: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 44,
    width: 268,
    textAlign: "left",
    letterSpacing: 0,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    left: 0
  },
  icon4: {
    top: 13,
    left: 23,
    position: "absolute",
    color: "#5173c0",
    fontSize: 20,
    height: 20,
    width: 16
  },
  placeholder1Stack: {
    width: 268,
    height: 44,
    marginTop: 12,
    marginLeft: 52
  },
  placeholder2: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 44,
    width: 268,
    textAlign: "left",
    letterSpacing: 0,
    borderRadius: 100,
    left: 0,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 0.2,
    shadowRadius: 6
  },
  icon2: {
    top: 12,
    left: 25,
    position: "absolute",
    color: "#5173c0",
    fontSize: 20,
    height: 20,
    width: 13
  },
  placeholder2Stack: {
    width: 268,
    height: 44,
    marginTop: 12,
    marginLeft: 53
  },
  materialButtonViolet1: {
    height: 44,
    width: 210,
    borderRadius: 48,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 0.19,
    shadowRadius: 6,
    marginTop: 27,
    marginLeft: 81
  },
  button: {
    width: 173,
    height: 14,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 92
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(102,102,102,1)",
    fontSize: 12
  },
  login: {
    fontFamily: "roboto-regular",
    color: "rgba(232,51,83,1)",
    fontSize: 12,
    marginLeft: 7
  },
  loremIpsumRow: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  scrollAreaStack: {
    width: 385,
    height: 833
  }
});

export default Signup;
