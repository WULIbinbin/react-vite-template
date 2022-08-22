export enum COMPARE {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

// 默认大小对比
export function defaultCompare(a, b) {
  if (a === b) {
    return COMPARE.EQUALS;
  } else if (a > b) {
    return COMPARE.BIGGER_THAN;
  } else if (a < b) {
    return COMPARE.LESS_THAN;
  }
}

// 翻转大小对比
export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

// 大于等于
export function biggerEquals(a, b) {
  const result = defaultCompare(a, b);
  return result === COMPARE.BIGGER_THAN || result === COMPARE.EQUALS;
}

// 小于等于
export function lesserEquals(a, b) {
  const result = defaultCompare(a, b);
  return result === COMPARE.LESS_THAN || result === COMPARE.EQUALS;
}
