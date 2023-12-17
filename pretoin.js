class PreToIn {
    static isOperator(x) {
        switch (x) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }

    static convert(str) {
        const stack = [];

        const l = str.length;

        for (let i = l - 1; i >= 0; i--) {
            const c = str.charAt(i);
            if (this.isOperator(c)) {
                const op1 = stack.pop();
                const op2 = stack.pop();

                const temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            } else {
                stack.push(c);
            }
        }
        return stack.pop();
    }

    static main() {
        const exp = "*-A/BC-/AKL";
        console.log("Infix : " + this.convert(exp));
    }
}

// Function call
PreToIn.main();
