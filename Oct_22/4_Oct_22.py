# LeetCode Problem No. 1155
# [Med] "Number of Dice Rolls with Target Sum"
# (https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)

# ==== Submission 1 ====
# Date: 10/04/22
# Runtime: 706ms (faster than 58%)
# Memory: 19.3mb (less than 37%)
class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        
        dp_table = {}
        
        def roll( diceCount, points ):
            
            # Base case aka stop condition:
            # Impossible to roll negative points
            if points < 0:
                return 0
            
            
            # Base case aka stop condition:
            # Already used all dice, check if we meet the points we want
            
            if diceCount == 0:
                return points == 0
            
            # look-up table to avoid repeated computation
            if ( diceCount, points ) in dp_table:
                return dp_table[ ( diceCount, points ) ]

            
            # General cases:
            # For currnet die, it could roll from1 points to k points
            # Then we use remaing (diceCount-1) dice to roll (points-curDicePoint) points
            
            dp_table[ ( diceCount, points ) ] = sum( roll(diceCount-1, points-curDicePoint) for curDicePoint in range(1, k+1) ) 
            return dp_table[ ( diceCount, points ) ]
        
        # --------------------------------
        
        constant = 10**9 + 7
        
        return roll(diceCount = n, points=target) % constant