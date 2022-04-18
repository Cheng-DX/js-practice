/**
 * 来自己写一个promise吧
 * - 由于JavaScript接触不到微任务的分配,直接用宏任务模拟即可 checked
 * - 包含三种状态且能够正确切换 checked
 * - 支持多个回调函数的绑定 checked
 * - then的返回值问题 checked
 * - catch异常事件冒泡 checkd
 * - Promise.resolve(),Promise.reject() checked
 * - finally checked
 * - Promise.all(),Promise.rece() checked
 */

export * from './promise'
export * from './type'
