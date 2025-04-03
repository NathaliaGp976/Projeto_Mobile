import { View, Text } from "react-native"
import { Subtitulo, Titulo } from "./style"

type TitleProps = {
    Texto :string,
    flag :boolean
}

export default function Title({Texto, flag} : TitleProps ){
    return (
        <View>
             {
             flag == true ?
                 <Titulo>{Texto}</Titulo>
                 :
                 <Subtitulo>{Texto}</Subtitulo>
             }
        </View>
    )
  
}
