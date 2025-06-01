class Counter {    
    public static increment(){
        this.count++;
    }

    public static getCount(){
        return this.count;
    }

    private static count = 0;
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount());
// Counter.count = 10; // ts error