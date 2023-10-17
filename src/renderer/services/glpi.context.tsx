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

import axios, { AxiosInstance } from 'axios';
import { GroupResponse, LoginResponse, UserResponse } from '../models/glpi';
import { User } from '../models/glpi/user';
import { Group } from '../models/glpi/group';

const APIURL = 'http://192.168.1.198/glpi/apirest.php';
const APPTOKEN = 'fPRuSOyh66vngdTb83E2c7rGUx6dHegfnmIfzs4i';
const req = (
  sessionToken: string,
  getUrl: any,
  id: string = '',
  params = { range: '0-999' },
) => {
  return axios
    .create({
      baseURL: `${APIURL}/${getUrl}`,
      headers: {
        'App-Token': APPTOKEN,
        'Session-Token': sessionToken,
      },
      params,
    })
    .get(`${getUrl}/${id}`);
};

interface GlpiContextProps {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  request: (GETURL?: string, params?: any) => AxiosInstance;
  users: User[] | null;
  groups: Group[] | null;
}

const GlpiContext = createContext<GlpiContextProps | undefined>(undefined);

function GlpiProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [sessionToken, setSessionToken] = useState<null | string>(null);
  const [users, setUsers] = useState<User[] | null>([]);
  const [groups, setGroups] = useState<Group[] | null>([]);

  const request = useMemo(
    () =>
      (GETURL?: string, params: any = { range: '0-999' }) => {
        return axios.create({
          baseURL: `${APIURL}/`,
          headers: {
            'App-Token': APPTOKEN,
            'Session-Token': sessionToken,
          },
          params,
        });
      },
    [sessionToken],
  );

  const login = useMemo(
    () => () => {
      return axios.post(`${APIURL}/initSession`, {
        app_token: APPTOKEN,
        user_token: 'B0EHEDyCQIacLKykuPQhMv7HlhRZgplLvBhpeiip',
      });
    },
    [],
  );

  useEffect(() => {
    login()
      .then(async (response: LoginResponse) => {
        setSessionToken(response.data.session_token);
        setAuth(true);
      })
      .catch((err: any) => {
        setAuth(false);
      });
  }, [login]);

  useEffect(() => {
    if (auth) {
      request()
        .get('User')
        .then((response: UserResponse) => {
          setUsers(response.data);
        })
        .catch((err: any) => {
          console.log('error');
        });
    }
  }, [auth, request]);

  useEffect(() => {
    request()
      .get('Group')
      .then((response: GroupResponse) => {
        setGroups(response.data);
      })
      .catch((err: any) => {
        console.log('error');
      });
  }, [auth, request]);

  const contextValue: GlpiContextProps = useMemo(() => {
    return {
      auth,
      setAuth,
      request,
      users,
      groups,
    };
  }, [auth, setAuth, request, users, groups]);
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
