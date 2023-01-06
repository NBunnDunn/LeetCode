// LeetCode Problem No.4
// [Hard] "Median of Two Sorted Arrays"
// (https://leetcode.com/problems/median-of-two-sorted-arrays/)

// ==== Submission 1 ====
// Date: 10/07/22
// Runtime: 198ms (38% faster)
// Memory: 46.2mb (less than 90%)

const findMedianSortedArrays = (nums1, nums2) => {
	const len = nums1.length + nums2.length;
	const mid = (len / 2 + 1) | 0;

	let i = 0,
		j = 0,
		k = 0,
		last,
		beforeLast;
	while (i++ < mid) {
		beforeLast = last;
		last = nums1[j] < (nums2[k] ?? Infinity) ? nums1[j++] : nums2[k++];
	}
	return len % 2 === 1 ? last : (last + beforeLast) / 2;
};

// ====================================
