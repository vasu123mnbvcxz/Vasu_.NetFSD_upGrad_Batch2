// Store student marks in an array
const marks = [78, 85, 67, 90, 88];

// Display each mark using map()
marks.map((mark, index) => {
    console.log(`Subject ${index + 1}: ${mark} marks`);
});

// Calculate total using reduce()
const totalMarks = marks.reduce((total, mark) => total + mark, 0);

// Calculate average using arrow function
const calculateAverage = (total, count) => total / count;

const averageMarks = calculateAverage(totalMarks, marks.length);

// Determine pass/fail (Pass if average >= 40)
const result = averageMarks >= 40 ? "PASS" : "FAIL";

// Display output using template literals
console.log(`\nTotal Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Result: ${result}`);