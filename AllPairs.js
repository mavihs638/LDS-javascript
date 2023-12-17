class AllPairs {
    static printPairs(arr, n, sum) {
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] + arr[j] === sum) {
                    console.log("(" + arr[i] + ", " + arr[j] + ")");
                }
            }
        }
    }

    static main() {
        const arr = [1, 5, 7, -1, 5];
        const n = arr.length;
        const sum = 6;
        this.printPairs(arr, n, sum);
    }
}

AllPairs.main();
