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

type TAtot<T> = [T[], { [key: string]: T }];

export function arrayToTree<T>(ary: T[], root: string | null): TAtot<T> {
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
  return [result, map];
}

export const mainKey = 'form-id';

export function getFormId(e = 8) {
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const a = t.length;
  let n = '';
  for (let i = 0; i < e; i++) {
    n += t.charAt(Math.floor(Math.random() * a));
  }
  return `${mainKey}-${n}`;
}
