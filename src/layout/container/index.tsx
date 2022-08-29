import { useAppDispatch, useAppSelector } from '@/store';

export default function (props: any) {
  const layout = useAppSelector((state) => state.layout);
  console.log(layout);
  return <div className='g-container'>{props.children}</div>;
}
