import { useEffect } from 'react';
import { useAppDispatch, accountActions } from '@/store/index';

export default function Index() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const res = dispatch(accountActions.checkSession());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div>Order</div>;
}
