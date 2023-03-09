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
/**
 * 一维数组转树和hash
 * @param ary 数组，parentId和itemId关联
 * @param root 根级parentId
 * @returns 树和hash
 */
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
      map[pid].children.splice(item.nodeIndex, 0, item);
    }
  }
  return [result, map];
}
/**
 * 树转一位数组，每个元素都设置parentId和itemId等
 * @param child 树
 * @param parent 父级
 * @returns
 */
export function mapSelected<T>(child: T[], mainParent: T): T[] {
  if (!child) return [];
  const tempArr = [];
  function map(arr: T[], parent: T) {
    arr.forEach((s: T, idx: number) => {
      s.itemId = s.itemId || getFormId();
      s.parentId = s.parentId || parent?.itemId || null;
      // nodeIndex始终根据遍历顺序
      s.nodeIndex = idx;
      s.formData = s.formData || {};
      if (s.compType === 'wrap') {
        s.children = s.children || [];
        map(s.children, s);
      }
      tempArr.push(s);
    });
  }
  map(child, mainParent);
  return tempArr;
}

export const mainKey = 'formId';
/**
 * 生成唯一的id
 * @param e 默认8位
 * @returns id
 */
export function getFormId(e = 8) {
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const a = t.length;
  let n = '';
  for (let i = 0; i < e; i++) {
    n += t.charAt(Math.floor(Math.random() * a));
  }
  return `${mainKey}-${n}`;
}

/**
 * 数组一项交换位置
 * @param arr
 * @param oldIdx
 * @param newIdx
 * @returns arr
 */
export function arraySwap(arr: any[], oldIdx, newIdx) {
  const len = Math.abs(oldIdx - newIdx);
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (oldIdx > newIdx) {
      if (i > oldIdx || i < newIdx) {
        tempArr[i] = arr[i];
      }
      if (i === newIdx) {
        tempArr[i] = arr[oldIdx];
        for (let j = 0; j < len; j++) {
          tempArr[i + j + 1] = arr[i + j];
        }
      }
    } else {
      if (i > newIdx || i < oldIdx) {
        tempArr[i] = arr[i];
      }
      if (i === oldIdx) {
        for (let j = 0; j < len; j++) {
          tempArr[i + j] = arr[i + j + 1];
        }
        tempArr[i + len] = arr[oldIdx];
      }
    }
  }
  return tempArr;
}

/**
 * 求group中两个数组的并集
 * @param group [arr,arr]
 * @param key 数组用做对比的key
 * @returns []
 */
export function arrayDistinct<T>(group: [T[], T[]], key: string): T {
  const longer = group[0].length - group[1].length > 0 ? 0 : 1;
  const short = longer ? 0 : 1;
  let result: T;
  group[longer].forEach((l) => {
    if (group[short].findIndex((s) => s[key] === l[key]) === -1) {
      result = l;
    }
  });
  return result;
}
