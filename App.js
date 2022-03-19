// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
const concerts = [
  {
    title: 'Concert 1',
    avatar: 'https://www.bosshunting.com.au/wp-content/uploads/2020/09/Hollywood-Bowl-1200x640.jpg'
  }
]
import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Card, Button, Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';

function ArtistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                  <Image source={require("./assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
              </View>
          </View>

          <View style={styles.infoContainer}>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Your Best Friend Jippy</Text>
          </View>

          <View style={styles.statsContainer}>
              <View style={styles.statsBox}>
                  <Text style={[styles.text, { fontSize: 24 }]}>140,000</Text>
                  <Text style={[styles.text, styles.subText]}>Monthly Listeners</Text>
              </View>
              <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                  <Text style={[styles.text, { fontSize: 24 }]}>33,436</Text>
                  <Text style={[styles.text, styles.subText]}>Followers</Text>
              </View>
          </View>
          <Text style={[styles.subText, styles.recent]}>Top Songs</Text>
          <View style={{ marginTop: 20}}>
          </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("./assets/beattape64.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("./assets/beattape23.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("./assets/BrazilByEar.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
              </ScrollView>
          <Text style={[styles.subText, styles.recent]}>Recent Pictures</Text>
          <View style={{ marginTop: 20}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("./assets/media1.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("./assets/media3.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("./assets/media2.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
              </ScrollView>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function PlayerScreen(){
  return(
    <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ flex:1, marginTop: 20 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <body>
                      <div id="baseDiv">
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4VweM7darPhSdYe0taXTMK?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                        </iframe>
                      </div> 
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
      
  )
}
function TourScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
      <Card>
        <Card.Title>Jippy Jazz Hour</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('./assets/concert-img.jpg')} />
        <Text style={{marginBottom: 10}}>
          Sat 19 March
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
      <Card>
        <Card.Title>Jippy in Atlanta</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('./assets/media2.jpg')} />
        <Text style={{marginBottom: 10}}>
          Sun 20 March
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
      
    </View>
    
    
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Artist') 
            {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } 
            else if (route.name === 'Tours') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }
            else if (route.name === 'Player') {
              return <AntDesign name="caretright" size={size} color={color} /> 
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Artist" component={ArtistScreen} />
        <Tab.Screen name="Tours" component={TourScreen} />
        <Tab.Screen name="Player" component={PlayerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  text: {
    color: "#2F2F2F"
  },
  image: {
    flex: 1,
    width:undefined,
    height:undefined
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 20,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
  mediaImageContainer: {
      width: 180,
      height: 200,
      borderRadius: 12,
      overflow: "hidden",
      marginHorizontal: 10
  },
  recent: {
      marginLeft: 35,
      marginTop: 32,
      fontSize: 20
  },
  
});
