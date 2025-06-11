function cache(target:any, propertyKey:string, descriptor: PropertyDescriptor){
    const cache: [][] = [];
    const originalMethod = descriptor.value;
    let cacheTime: Date;

    descriptor.value = function() {
        if (cache.length === 0 || (new Date().getTime() - cacheTime.getTime()) > 5000){ // no data or cache expired
            cacheTime = new Date();

            const result = originalMethod.call(this);
            cache.push(result.slice()); // copy the result to cache

            // console.log(cache);
            return result;
        }

        // valid cache
        console.log('Returned from cache');
        return cache[cache.length - 1];
    }
}


class MockWeatherDataService {
    private weatherData: string[] = [
        'Sunny 8° to 20°',
        'Partially Cloudy 7° to 19°',
        'Sunny 5° to 18°'
    ];

    addWeatherData(data: string){ this.weatherData.push(data);  }

    @cache
    getWeatherData() { return this.weatherData; }
}





let service = new MockWeatherDataService();
console.log(service.getWeatherData());
console.log(service.getWeatherData());
service.addWeatherData('Partially Cloudy 5° to 11°');
console.log(service.getWeatherData());

// 7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000);
setTimeout(() => console.log(service.getWeatherData()), 7000);
setTimeout(() => service.addWeatherData('Partially Cloudy 11° to 20°'), 7000);
setTimeout(() => console.log(service.getWeatherData()), 7000);

// 15 seconds later
setTimeout(() => console.log(service.getWeatherData()), 15000);
setTimeout(() => console.log(service.getWeatherData()), 15000);

