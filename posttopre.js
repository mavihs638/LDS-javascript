class PostToPre {
    static isOperator(x) {
        switch (x) {
            case '+':
            case '-':
            case '/':
            case '*':
                return true;
        }
        return false;
    }

    static postToPre(postExp) {
        const stack = [];

        const length = postExp.length;

        for (let i = 0; i < length; i++) {
            if (this.isOperator(postExp.charAt(i))) {
                const op1 = stack.pop();
                const op2 = stack.pop();

                const temp = postExp.charAt(i) + op2 + op1;

                stack.push(temp);
            } else {
                stack.push(postExp.charAt(i));
            }
        }

        let ans = "";
        for (const i of stack) {
            ans += i;
        }
        return ans;
    }

    static main() {
        const postExp = "ABC/-AK/L-*";

        console.log("Prefix : " + this.postToPre(postExp));
    }
}

// Function call
PostToPre.main();
