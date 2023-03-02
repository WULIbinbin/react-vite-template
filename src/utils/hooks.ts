import { useState } from 'react';

type TResult = any;
type TError = Error;
type TRun = (p: any) => Promise<any>;
type TAwaitReturn = [TError, TResult, TRun, boolean];

export function useAwait(func: TRun): TAwaitReturn {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const run = async (params: any) => {
    try {
      setLoading(true);
      const res = await func(params);
      setResponse(res);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return [error, response, run, loading];
}
