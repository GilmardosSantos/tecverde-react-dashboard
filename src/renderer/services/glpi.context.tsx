/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

import axios from 'axios';

const APIURL = 'http://192.168.1.198/glpi/apirest.php';
const APPTOKEN = 'fPRuSOyh66vngdTb83E2c7rGUx6dHegfnmIfzs4i';
const request = (
  sessionToken: string,
  getUrl: any,
  id: string = '',
  params = { range: '0-999' },
) => {
  return axios
    .create({
      baseURL: APIURL,
      headers: {
        'App-Token': APPTOKEN,
        'Session-Token': sessionToken,
      },
      params,
    })
    .get(`${getUrl}/${id}`);
};

const login = () => {
  return axios.post(`${APIURL}/initSession`, {
    app_token: APPTOKEN,
    user_token: 'B0EHEDyCQIacLKykuPQhMv7HlhRZgplLvBhpeiip',
  });
};

interface GlpiContextProps {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

const GlpiContext = createContext<GlpiContextProps | undefined>(undefined);

function GlpiProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    login()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [auth]);

  const contextValue: GlpiContextProps = useMemo(() => {
    return {
      auth,
      setAuth,
    };
  }, [auth, setAuth]);
  return (
    <GlpiContext.Provider value={contextValue}>{children}</GlpiContext.Provider>
  );
}

function useGlpi() {
  const context = useContext(GlpiContext);
  if (!context)
    throw new Error('O Contexto deve ser utilizado dentro de um Provider');
  return context;
}

export { useGlpi, GlpiProvider };
