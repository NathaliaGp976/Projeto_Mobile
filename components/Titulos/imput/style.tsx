import styled from "styled-components/native";

type CampoDeTextoProps = {
    hasError: boolean; // Agora a prop está padronizada com o nome correto
};

export const CampoTexto = styled.TextInput<CampoDeTextoProps>`
    background-color: #BDB2FF;
    font-size: 18px;
    border-radius: 28px;
    padding: 20px;
    border: 2px solid ${({ hasError } :{hasError: boolean}) => (hasError ? '#D72638' : '#BDB2FF')};
`;
