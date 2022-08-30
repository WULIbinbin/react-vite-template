import { layoutActions, useAppDispatch, useAppSelector } from '@/store';
import { Breadcrumb, Space } from 'tdesign-react';
import { IContainer } from '@/types/layout.d';
import { useEffect } from 'react';

const { BreadcrumbItem } = Breadcrumb;

export default function Index(props: IContainer) {
  const layout = useAppSelector((state) => state.layout);
  const { layoutStyle, children, breadcrumbs } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(layoutStyle);
    dispatch(layoutActions.setLayoutStyle(layoutStyle));
  }, [layoutStyle]);

  return (
    <div className='g-container'>
      <Breadcrumb maxItemWidth='200px' theme={layout.theme}>
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbItem key={idx}>{item}</BreadcrumbItem>
        ))}
      </Breadcrumb>
      <div className='g-container-body'>{children}</div>
    </div>
  );
}
