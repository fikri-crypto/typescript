/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (let index = 0; index < scores.length; index++) {
        callback(scores[index]);
    }
}

function checkPassStatus(score: number) {
    const passingScore = 70;
    if (score >= passingScore) {
        console.log(`Score ${score}: Passed`);
    } else {
        console.log(`Score ${score}: Failed`);
    }
}

function showGrade(score: number) {
    if (score >= 90) {
        console.log(`Score ${score}: Grade A`);
    } else if (score >= 80) {
        console.log(`Score ${score}: Grade B`);
    } else if (score >= 70) {
        console.log(`Score ${score}: Grade C`);
    } else {
        console.log(`Score ${score}: Grade D`);
    }
}

function showBonusScore(score: number) {
    const bonusScore = score + 5;
    console.log(`Score ${score} + Bonus: ${bonusScore}`);
}

function showExcellenceStatus(score: number) {
    if (score > 90) {
        console.log(`Score ${score}: Excellent`);
    } else {
        console.log(`Score ${score}: Reguler`);
    }
}

processScores(scores, checkPassStatus);
processScores(scores, showGrade);
processScores(scores, showBonusScore);
processScores(scores, showExcellenceStatus);