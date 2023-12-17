class ReverseStack {
    static st = [];

    static insertAtBottom(x) {
        if (this.st.length === 0) {
            this.st.push(x);
        } else {
            const a = this.st.pop();
            this.insertAtBottom(x);
            this.st.push(a);
        }
    }

    static reverse() {
        if (this.st.length > 0) {
            const x = this.st.pop();
            this.reverse();
            this.insertAtBottom(x);
        }
    }

    static main() {
        this.st.push('1');
        this.st.push('2');
        this.st.push('3');
        this.st.push('4');

        console.log("Original Stack");
        console.log(this.st);

        this.reverse();

        console.log("Reversed Stack");
        console.log(this.st);
    }
}

// Function call
ReverseStack.main();
