import { View,Image, TextInput,Text,TouchableOpacity } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";

export default function App(){
  return(
    <View style={styles.imagemBody}>
      <Image style={styles.imagemss}source={require('../../assets/sesi-senai.webp')}/>

      <View style={styles.form}>

        <Text style={styles.text}>Login:</Text>

        <TextInput placeholder="Insira seu CPF" style={styles.input}/>

        <Text style={styles.text}>Senha:</Text>

        <TextInput secureTextEntry placeholder="Insira sua senha" style={styles.input}/>

        <View style={styles.subBtn}>
          <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn1}>Cadastrar</Link></TouchableOpacity>
          <TouchableOpacity><Link href={'esqueci'} style={styles.subBtn1}>Esqueci a senha</Link></TouchableOpacity>
        </View>
      </View>

      <View style={styles.formbtn}>
        <Link href={'Inicio'} style={styles.btn}>ENTRAR</Link>
      </View>
    </View>

    
  )
}