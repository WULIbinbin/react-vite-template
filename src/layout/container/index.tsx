import { layoutActions, useAppDispatch, useAppSelector } from '@/store';
import { Breadcrumb } from 'tdesign-react';
import { IContainer } from '@/types/layout.d';
import { useEffect, memo } from 'react';

const { BreadcrumbItem } = Breadcrumb;

export default memo((props: IContainer) => {
  const layout = useAppSelector((state) => state.layout);
  const { layoutStyle, children, breadcrumbs } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(layoutActions.setLayoutStyle(layoutStyle));
  }, [layoutStyle]);

  return (
    <div className='g-container'>
      {breadcrumbs.length > 0 && (
        <Breadcrumb maxItemWidth='200px' theme={layout.theme}>
          {breadcrumbs.map((item, idx) => (
            <BreadcrumbItem key={idx}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
      <div className='g-container-body'>{children}</div>
    </div>
  );
});
