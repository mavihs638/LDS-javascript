function areBracketsBalanced(s) {
    let i = -1;
    const stack = [];

    for (const ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
            i++;
        } else {
            if (
                i >= 0 &&
                ((stack[i] === '(' && ch === ')') ||
                    (stack[i] === '{' && ch === '}') ||
                    (stack[i] === '[' && ch === ']'))
            ) {
                stack.pop();
                i--;
            } else {
                return false;
            }
        }
    }

    return i === -1;
}

// Example usage
const expr = "{()}[]";

// Function call
if (areBracketsBalanced(expr)) {
    console.log("Balanced");
} else {
    console.log("Not Balanced");
}
