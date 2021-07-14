/**
  插入排序（Insertion Sort）
  插入排序的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，
  在已排序序列中从后向前扫描，找到相应位置并插入。

  算法描述
  一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：
    1.从第一个元素开始，该元素可以认为已经被排序；
    2.取出下一个元素，在已经排序的元素序列中从后向前扫描；
    3.如果该元素（已排序）大于新元素，将该元素移到下一位置；
    4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
    5.将新元素插入到该位置后；
    重复步骤2~5。

  算法分析
  插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，
  需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
  
  动画演示
  https://pic4.zhimg.com/v2-c3ef63efdfc34909bf9bfe17dc76ba97_b.webp
*/

function InsertionSort(arr = []) {
  let prevIndex, current;
  const len = arr.length;
  //1
  for (let i = 1; i < len; i++) {
    prevIndex = i - 1;
    current = arr[i];
    //2
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      //3
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    //5
    arr[prevIndex + 1] = current;
  }
  console.table(arr);
}

InsertionSort([90, 12, 5, 64, 32, 44, 78, 19, 1, 9, 27, 83, 56]);
