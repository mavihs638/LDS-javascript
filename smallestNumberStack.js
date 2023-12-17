class SmallestNumberStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);

        if (this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }

        this.minStack.pop();
        return this.stack.pop();
    }

    getMinimum() {
        if (this.minStack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage
const smallestNumberStack = new SmallestNumberStack();

smallestNumberStack.push(3);
smallestNumberStack.push(5);
smallestNumberStack.push(2);
smallestNumberStack.push(8);

console.log("Current minimum: " + smallestNumberStack.getMinimum()); // Output: 2
