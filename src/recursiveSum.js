export default function recursiveSum(n) {
	if( n === 1) return 1
	return recursiveSum(n-1) + n
}