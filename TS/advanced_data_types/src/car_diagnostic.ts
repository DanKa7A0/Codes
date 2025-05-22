type process = { partName: string, runDiagnostics(): string };
type carBody = { material: string, state: string } & process;
type tires = { airPressure: number, condition: string } & process;
type engine = { horsepower: number, oilDensity: number } & process;

function CarDiagnostic(carBody: carBody, tires: tires, engine: engine){}

CarDiagnostic(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName } },
    { airPressure: 30, condition: 'needs change', partName: 'Tires',  runDiagnostics() { return this.partName } },
    { horsepower: 300, oilDensity: 780, partName: 'Engine',  runDiagnostics() { return this.partName } }
);