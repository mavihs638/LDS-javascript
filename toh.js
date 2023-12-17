class TowerOfHanoi {
    static towerOfHanoi(n, fromRod, toRod, auxRod) {
        if (n === 0) {
            return;
        }

        this.towerOfHanoi(n - 1, fromRod, auxRod, toRod);
        console.log("Move disk " + n + " from rod " + fromRod + " to rod " + toRod);
        this.towerOfHanoi(n - 1, auxRod, toRod, fromRod);
    }

    static main() {
        const N = 3;
        this.towerOfHanoi(N, 'A', 'C', 'B');
    }
}

// Function call
TowerOfHanoi.main();
