/* eslint-disable no-undef */
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  useMemo,
} from 'react';

interface FetchContextProps {
  data: string | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string, options?: RequestInit) => Promise<void>;
}
const fetchContext = createContext<FetchContextProps | undefined>(undefined);
type ContextProps = { children: ReactNode };
function FetchProvider({ children }: ContextProps) {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useMemo(
    () => async (url: string, options?: RequestInit) => {
      setLoading(true);
      try {
        const response = await fetch(url, { ...options });
        if (!response.ok) throw new Error('Response error');
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const value: FetchContextProps = useMemo(() => {
    return {
      data,
      loading,
      error,
      fetchData,
    };
  }, [data, loading, error, fetchData]);
  return (
    <fetchContext.Provider value={value}>{children}</fetchContext.Provider>
  );
}

function useFetch() {
  const context = useContext(fetchContext);
  if (!context)
    throw new Error('O Contexto deve ser utilizado dentro de um Provider');
  return context;
}
export { useFetch, FetchProvider };
