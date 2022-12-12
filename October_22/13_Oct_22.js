// LeetCode Problem No. 8
// [Med] "String to Int (atoi)"
// (https://leetcode.com/problems/string-to-integer-atoi/)

// ==== Submission 1 ====
// Date: 10/13/22
// Runtime: 128ms (faster than 50%)
// Memory: 43.6mb (less than 88%)

/** Steps
 * 1. Ignore any leading whitespace
 * 2. Check for +/- sign
 * 3. Read input until non-digit OR end of string is reached
 * 4. Convert digits into integers
 * --> if none, integer = 0
 * 5. If digit is out of 32-bit signed int range
 * clamp so it remains in range
 * 6. Return int
 */

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
	let convertedInt = 0;
	let signMultiplier = 1;
	let base10Count = 0;
	let answerArr = [];
	let numberSeen = false;

	for (let i = 0; i < s.length; i++) {
		let currentChar = s[i];

		// Step 1. Ignore any leading whitespace
		if (currentChar === ' ') {
			continue;
		}
		// Step 2. Check for positive/neg sign
		if (currentChar === '-') {
			signMultiplier = -1;
		}

		let currentNumberValue = currentChar - '0';

		// Step 3. Iterate number until non-digit char
		if (isNaN(currentNumberValue) && numberSeen) {
			break;
		}

		if (isNaN(currentNumberValue)) {
			continue;
		}

		numberSeen = true;
		answerArr.push(currentNumberValue);
	}
	answerArr = answerArr.reverse();

	// Step 4. Convert digits into integers
	for (let num of answerArr) {
		base10Num = num * 10 ** base10Count;
		convertedInt += base10Num;
		base10Count++;
	}

	// Step 5 : Clamp out of bounds integers
	let minRange = (-2) ** 31;
	let maxRange = 2 ** 31 - 1;
	if (convertedInt < minRange) {
		s = minRange;
	}
	if (convertedInt > maxRange) {
		s = maxRange;
	}

	// Step 6. Return Int
	if (convertedInt != 0) {
		return convertedInt * signMultiplier;
	} else {
		return convertedInt;
	}
};

console.log(myAtoi('words and 987'));
