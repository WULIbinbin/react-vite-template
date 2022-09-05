import { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { checkSession } from '@/store/modules/account';

export default function Index() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const res = dispatch(checkSession());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div>Order</div>;
}
