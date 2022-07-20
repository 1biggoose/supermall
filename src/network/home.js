import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有的变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['gyb', 'ysh']
// }

// test()

// test()

// const totalNums = []

// const nums1 = [20, 30, 433]

// const nums2 = [40, 440, 4440]

// // for (let n of nums2) {
// //   totalNums = nums2
// // }

// totalNums.push(...nums1)