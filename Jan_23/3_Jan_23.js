// LeetCode Problem No. 29
// [Med] "Divide Two Integers"
// (https://leetcode.com/problems/divide-two-integers/)

// ==== Submission 1 ====
// Date: 1/3/23
// Runtime: 9079ms (faster than 5%) --> OOF!
// Memory: 43.9mb (less than 67%)

divide = function (dividend, divisor) {
	let result = 0;
	let sign = 1;
	let originalDivisor = divisor;

	//Convert dividend & divisor to positive numbers
	if (dividend < 0) {
		dividend = -dividend;
		sign = -sign;
	}

	if (divisor < 0) {
		divisor = -divisor;
		originalDivisor = divisor;
		sign = -sign;
	}

	//Shortcut for predetermined result
	if (dividend === divisor) return sign;

	/**
	 * Use left shift to multiply the previous divisor by 2, and the same for the result,
	 * which decrease the run time.
	 * @example
	 * 53/3 ====> divisor: 3 => 6 => 12 => 24 => 48 => (remains 5 handled in the next loop)
	 * 			  result : 0 => 2 => 4 =>  8  => 16 => (remains 1 handled in the next loop)
	 *
	 */
	while (divisor < dividend) {
		const shift = divisor << 1;

		if (shift > dividend || shift <= 0) {
			break;
		}

		if (!result) {
            result = 2;
        }
		else result = result << 1;

		divisor = shift;
	}

	/**
	 * Loop to increase by the original divisor value if there are remainder.
	 * @example Using the previous example we've got 5 left, so we add them 3 by 3
	 * in this case we add only 3 before we exceed the dividend value.
	 * 53/3 ====> divisor: 48 + 3 => 51
	 * 			  result: 16 + 1  => 17
	 */
	while (divisor + originalDivisor <= dividend) {
        divisor += originalDivisor;
		result++;
	}

	/**
	 * Fix the problem of below multiplication divisors.
	 * @example 10/7 => will not pass any of the above loops, so the result would've been 0.
	 * */
	if (!result && dividend - divisor >= 0) {
		result++;
	}

	result = result * sign;

	// Number Boundaries
	if (result < -2147483648) return -2147483648;
	if (result > 2147483647) return 2147483647;

	return result;
};

const result = divide(53, 3);

// ==== Submission 2 (Java) ====
// Date: 1/3/23
// Runtime: 2ms (faster than 65.16%)
// Memory: 42mb (less than 12.55%)

// class Solution {
//     public int divide(int dividend, int divisor) {
//         int sign,result=0,value=31;
// 		if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) sign = 1;  else sign = -1;
// 		long ldividend = Math.abs((long) dividend);
// 		long ldivisor = Math.abs((long) divisor);
// 		while (ldividend >= ldivisor) {
// 			while (ldividend < ldivisor << value) {
// 				value--;
// 			}
// 			ldividend -= ldivisor << value;
// 			result += 1 << value;
// 		}
// 		if (result > Integer.MAX_VALUE) result = Integer.MAX_VALUE;
// 		if(dividend==Integer.MIN_VALUE && divisor==-1) result=Integer.MAX_VALUE;
//         result= sign > 0 ? result : -result; return result;
//     }
// }