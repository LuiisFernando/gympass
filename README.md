<p align="center">
  <img src="https://i.imgsafe.org/c7/c74b77f9f1.gif">
</p>

<p align="center">
  <img width="180" height="380" src="https://i.imgsafe.org/c7/c7dee96d9d.jpeg">
  <img width="180" height="380" src="https://i.imgsafe.org/c7/c7deac3211.jpeg">
</p>

# gympass

application developed to schedule activity on gympass

# Mobile

Developed using React Native, axios to consume WebAPI, styed-components, react-navigation, react-native-gesture-handler and 
react-native-reanimated

Before run the mobile project:

```
cd .\android\app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
(fill all the fields with information to generate the debug.keystore)
cd..
./gradlew clean
cd ..
react-native link
react-native run-android
```
