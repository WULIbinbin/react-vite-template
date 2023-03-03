type TResult = any;
type TError = Error | null;
type TRun = Promise<any>;
type TAwaitReturn = [TError, TResult];

export function anyAwait(func: TRun): Promise<TAwaitReturn> {
  return new Promise<TAwaitReturn>((resolve) => {
    func
      .then((res) => {
        resolve([null, res]);
      })
      .catch((err) => {
        resolve([err, null]);
      });
  });
}

export function arrayToTree<T>(ary: T[], root: string | null): T[] {
  console.log(root);
  const result = [];
  const map = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const ia of ary) {
    const { parentId: pid, itemId: id } = ia as any;
    map[id] = {
      ...ia,
      children: map[id]?.children || [],
    };

    const item = map[id];

    if (pid === root) {
      result.push(item);
    } else {
      if (!map[pid]) {
        map[pid] = {
          children: [],
        };
      }
      map[pid].children.push(item);
    }
  }
  return result;
}
