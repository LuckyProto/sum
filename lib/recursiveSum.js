'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})
exports.default = recursiveSum
function recursiveSum(n) {
	if (n === 1) return 1
	return recursiveSum(n - 1) + n
}