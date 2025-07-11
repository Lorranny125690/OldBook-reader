import React, { useState } from 'react';
import Axios from "../../../scripts/Axios"; // Importando o Axios
import { useAuth } from '../../../contexts/authenticatedUser';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, onRegister } = useAuth();
  const [pressed, setPressed] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const login = async () => {
    setPressed(true);
  
    if (!email || !password) {
      setModalMsg("Preencha todos os campos.");
      setModalVisible(true);
      return;
    }
  
    const result = await onLogin!(email, password);
  
    if (!result || result.error) {
      setModalMsg("Algo deu errado. Tente novamente.");
      setModalVisible(true);
      return;
    }
  
    const status = result.data?.statusCode;
  
    if (status === 200) {
      return;
    }
  
    if (status === 404) {
      setModalMsg("Email não encontrado.");
    } else if (status === 500) {
      setModalMsg("Erro desconhecido.");
    } else {
      setModalMsg("Email ou senha errados 😯! Digite novamente.");
    }
  
    setModalVisible(true);
  }; 
};
