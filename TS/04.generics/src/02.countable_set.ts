interface CountableSet<T> {
    add(item:T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
} 

class CountedSet<T> implements CountableSet<T> {
    
    add(item: T): void {
        if (!this.map.has(item)){
            this.map.set(item, 1);
            return;
        }

        this.map.set(item, this.map.get(item) + 1);
    }

    remove(item: T): void {
        if (!this.map.has(item) || this.map.get(item) === 0){
            return;
        }

        this.map.set(item, this.map.get(item) - 1);
    }

    contains(item: T): boolean {        
        return this.map.has(item) && this.map.get(item) > 0;
    }

    getNumberOfCopies(item: T): number {
        if (!this.map.has(item)){
            return 0;
        }

        return this.map.get(item);
    }

    private map = new Map<T, number>();
}


let countedSet = new CountedSet<string>();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test')
countedSet.remove('test')
countedSet.remove('test')
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));

console.log("---------------------");

let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));
// codesCounterSet.add(205); //TS Error
// codesCounterSet.getNumberOfCopies(350); //TS Error 