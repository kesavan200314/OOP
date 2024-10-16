 

class Car {
  #year;
      constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.#year = year;
  }    getYear() {
      return this.#year;
  }    getDetails() {
      return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.#year}`;
  }    get model() {
      return this._model;
  }    set model(newModel) {
      if (typeof newModel === 'string' && newModel.trim() !== '') {
          this._model = newModel;
      } else {
          throw new Error('Model must be a non-empty string');
      }
  }}class ElectricCar extends Car {
  constructor(brand, model, year, batteryRange) {
      super(brand, model, year);
      this.batteryRange = batteryRange;
  }    getRange() {
      return `Battery Range: ${this.batteryRange} km`;
  }    getDetails() {
      return `${super.getDetails()}, Battery Range: ${this.batteryRange} km`;
  }
}const myElectricCar = new ElectricCar('Tesla', 'Model S', 2022, 600);
const myCar = new Car('Toyota', 'Corolla', 2022);// console.log ('mycar',myCar.model);
// myCar.model = '';
console.log(myElectricCar.getDetails());
console.log(myElectricCar.getRange());

