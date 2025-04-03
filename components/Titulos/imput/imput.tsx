import { TextInputProps } from "react-native";
import { CampoTexto } from "./style"; // Certifique-se de que o caminho está correto
import { useState } from "react";

type InputTextoProps = TextInputProps & {
    hasError?: boolean; // Torna opcional para evitar erros caso não seja passado
};

export default function InputTexto({ hasError = false, ...rest }: InputTextoProps) {
    return (
        <CampoTexto 
            hasError={hasError} 
            placeholderTextColor={'#6C757D'} 
            {...rest} 
        />
    );
}