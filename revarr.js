class ReverseArray {
    static reverseArray(arr, start, end) {
        let temp;

        while (start < end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    static printArray(arr, size) {
        for (let i = 0; i < size; i++) {
            process.stdout.write(arr[i] + " ");
        }

        console.log();
    }

    static main() {
        const arr = [1, 2, 3, 4, 5, 6];
        this.printArray(arr, 6);
        this.reverseArray(arr, 0, 5);
        console.log("Reversed array is");
        this.printArray(arr, 6);
    }
}

// Function call
ReverseArray.main();
