import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

// URL da API
export const API_URL = 'https://transcritor-ia.com/api'; 

// Criação do contexto de autenticação
interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (Email: string, Password: string, userName: string) => Promise<any>;
  onLogin?: (Email: string, Password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

// Contexto de autenticação
const AuthContext = createContext<AuthProps>({});

// Hook para acessar o contexto de autenticação
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider para o contexto de autenticação
export const AuthProvider = ({ children }: any) => {
  // Estado de autenticação
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  // Carregar o token do localStorage ao montar o componente
  useEffect(() => {
    const loadToken = () => {
      const token = localStorage.getItem('my-jwt');
      console.log('Token loaded from localStorage:', token);

      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token,
          authenticated: true,
        });
      }
    };

    loadToken();
  }, []);

  // Função para registrar usuário
  const register = async (Email: string, Password: string, userName: string) => {
    try {
      const result = await axios.post(`${API_URL}/user`, { Email, Password, userName });

      const token = result.data.token;
      const username = result.data.User;

      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('my-jwt', token); // Armazenar token no localStorage
        localStorage.setItem('userName', username); // Armazenar username no localStorage
        console.log('Token:', token);
        console.log('username:', username);

        setAuthState({ token, authenticated: true });
      }

      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response?.data?.msg || 'Erro ao registrar', status: (e as any).response?.status };
    }
  };

  // Função para fazer login
  const login = async (Email: string, Password: string) => {
    try {
      const result = await axios.post(`${API_URL}/user/login`, { Email, Password });
      const { userId } = result.data;

      console.log('Login result:', userId);

      setAuthState({
        token: userId,
        authenticated: true,
      });

      // Armazenar o token no localStorage
      localStorage.setItem('my-jwt', userId);
      console.log('Stored info to localStorage:', userId);
      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response?.data?.msg || 'Erro ao fazer login' };
    }
  };

  // Função para fazer logout
  const logout = async () => {
    localStorage.removeItem('my-jwt'); // Remover token do localStorage
    axios.defaults.headers.common['Authorization'] = '';

    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  // Valores do contexto
  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
