import styled from "styled-components/native";
import { useEffect, useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, View, Text, Alert } from "react-native";
import Title from "@/components/Titulos/Titulo/titulo";
import InputTexto from "@/components/Titulos/imput/imput";

export default function Cadastro()
{
    const [email, setEmail] =  useState('')
    const [erroEmail, setErroEmail] = useState(false)

    const [senha, setSenha] = useState('')
    const [erroSenha, setErroSenha] = useState(false)

    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [erroConfirmar, setErroConfirmar] = useState(false)

    const [senhaVisivel, setSenhaVisivel] = useState(true)

    // Validação de e-mail
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErroEmail(!emailRegex.test(email));
    }, [email]);

    // Validação de senha
    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        setErroSenha(!passwordRegex.test(senha));
    }, [senha]);

    // Confirmação de senha
    useEffect(() => {
        setErroConfirmar(confirmarSenha !== senha || confirmarSenha === '');
    }, [confirmarSenha, senha]);

    // Envio do formulário
    const handleCadastro = () => {
        if (!erroEmail && !erroSenha && !erroConfirmar) {
            Alert.alert("Cadastro realizado com sucesso!", `Email: ${email}`);
        } else {
            Alert.alert("Erro no cadastro", "Verifique os dados preenchidos.");
        }
    }

    return (
        <Container>
            <Title Texto="Cadastro" flag={true} />

            <ContainerInput error={erroEmail}>
                <InputTexto
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </ContainerInput>
            {erroEmail && <MensagemErro>Email inválido.</MensagemErro>}

            <ContainerInput error={erroSenha}>
                <ContainerSenha>
                    <InputTexto
                        placeholder="Senha"
                        secureTextEntry={senhaVisivel}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <IconeVisivel onPress={() => setSenhaVisivel(!senhaVisivel)}>
                        <Entypo name={senhaVisivel ? "eye" : "eye-with-line"} size={24} color="black" />
                    </IconeVisivel>
                </ContainerSenha>
            </ContainerInput>
            {erroSenha && (
                <MensagemErro>
                    A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um símbolo.
                </MensagemErro>
            )}

            <ContainerInput error={erroConfirmar}>
                <InputTexto
                    placeholder="Confirmar Senha"
                    secureTextEntry={senhaVisivel}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />
            </ContainerInput>
            {erroConfirmar && <MensagemErro>As senhas não coincidem.</MensagemErro>}

            <Botao onPress={handleCadastro}>
                <TextoBotao>Cadastrar</TextoBotao>
            </Botao>
        </Container>
    )
}

// Estilos
const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #e2eafc;
    padding: 100px 30px;
    gap: 20px;
`;

// Container para input com borda condicional
const ContainerInput = styled.View<{ error: boolean }>`
    width: 100%;
    border: 2px solid ${props => (props.error ? 'red' : '#ccc')};
    border-radius: 8px;
    padding: 5px;
`;

// Input com botão de visualização de senha
const ContainerSenha = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

// Botão do olhinho
const IconeVisivel = styled(Pressable)`
    padding: 10px;
    margin-left: -40px;
    background-color: #bdb2ff;
    border-radius: 30px;
`;

// Botão principal
const Botao = styled.Pressable`
    background-color: #6c63ff;
    padding: 15px 30px;
    border-radius: 10px;
    margin-top: 10px;
`;

// Texto do botão
const TextoBotao = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

// Mensagem de erro
const MensagemErro = styled.Text`
    color: red;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 10px;
    width: 100%;
    text-align: left;
`;
