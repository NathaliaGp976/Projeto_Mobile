
import styled from "styled-components/native";
import Title from "../components/Titulos/Titulo/titulo";
import { useEffect, useState } from "react";
import ImputTexto from "@/components/Titulos/imput/imput";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // Importa ícones do Expo

export default function App() {
  const [email, setEmail] = useState('example@example.com');
  const [erroEmail, setHasEmailError] = useState(false);

  const [senha, setSenha] = useState('@Example123');
  const [erroSenha, setHasSenhaError] = useState(false);

  const [senhaVisivel, setSenhaVisivel] = useState(false); // Estado para exibir a senha

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setHasEmailError(!emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    setHasSenhaError(!passwordRegex.test(senha));
  }, [senha]);

  return (
    <Tela>
      <Title Texto={"Entrar"} flag={true} />
      <Title Texto={"Bem-vindo ao app"} flag={false} />
      <ContainerCampoTexto>
        <ViewInput>
          <ImputTexto
            hasError={erroEmail}
            placeholder="Digite seu email..."
            onChangeText={Text => setEmail(Text)}
          />
          {erroEmail && <TextErrorHint>Email inválido</TextErrorHint>}
        </ViewInput>

        <ViewInput>
          <SenhaWrapper>
            <ImputTexto
              hasError={erroSenha}
              placeholder="Digite sua senha..."
              onChangeText={text => setSenha(text)}
              secureTextEntry={!senhaVisivel} // Alterna entre senha oculta/visível
            />
            <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
              <MaterialIcons
                name={senhaVisivel ? "visibility-off" : "visibility"}
                size={24}
                color="#555"
              />
            </TouchableOpacity>
          </SenhaWrapper>
          {erroSenha && <TextErrorHint>Senha inválida</TextErrorHint>}
        </ViewInput>
      </ContainerCampoTexto>

      <ContainerBotoes>
        <Botao>
          <TextoBotao>Entrar</TextoBotao>
        </Botao>
        <Links>Cadastre-se</Links>
        <Links>Esqueci a senha</Links>
      </ContainerBotoes>
    </Tela>
  );
}

// 📌 Estilizações
const Tela = styled.View`
  flex: 1;
  background-color: #e2eafc;
  padding: 65px;
`;

const ContainerCampoTexto = styled.View`
  gap: 25px;
`;

const ViewInput = styled.View`
  width: 100%;
`;

const SenhaWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const ContainerBotoes = styled.View`
  margin-top: 30px;
  gap: 20px;
`;

const Botao = styled.Pressable`
  background-color: #bdb2ff;
  border-radius: 30px;
  padding: 20px;
`;

const TextoBotao = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Links = styled.Text`
  text-align: center;
  color: #000000;
  font-size: 16px;
`;

const TextErrorHint = styled.Text`
  font-size: 16px;
  color: #e63946;
`;
