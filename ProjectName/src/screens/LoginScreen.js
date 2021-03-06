import React, { useContext } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../App';
import { defaultFontText as Text } from '../components/Text';
import { defaultBoldText as BoldText} from '../components/BoldText';


const LoginScreen= () => {
  const { signInGoogle, signInKakao } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View style={{height: "100%", alignItems: "center", justifyContent: "center", }}>
        <TouchableOpacity onPress={signInGoogle}>
        <View style={{ width: 326, height: 52, backgroundColor: "white", 
        borderRadius: 12, borderWidth: 1, borderColor: "#B1AEAE",
      flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Image source={require('ProjectName/src/images/flat-color-icons_google.png')}
          style={{resizeMode:"contain", width: 32, marginRight: 12,}}/>
          <BoldText style={{fontSize: 16, fontWeight: "700", color: "#232323"}}>구글로 로그인하기</BoldText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={signInKakao}>
        <View style={{ width: 326, height: 52, backgroundColor: "#FAE301", 
        borderRadius: 12, marginTop: 12,
      flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Image source={require('ProjectName/src/images/ri_kakao-talk-fill.png')}
          style={{resizeMode:"contain", width: 32, marginRight: 12,}}/>
          <BoldText style={{fontSize: 16, fontWeight: "700", color:"#391B1B"}}>카카오톡으로 로그인하기</BoldText>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
