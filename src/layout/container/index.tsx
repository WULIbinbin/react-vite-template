import { useAppDispatch, useAppSelector } from '@/store';

export default function (props: any) {
  const globalState = useAppSelector((state) => state.layout);
  console.log(globalState);
  return <div className='g-container'>{props.children}</div>;
}
