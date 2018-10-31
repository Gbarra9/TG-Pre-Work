class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee{
  constructor(name, certifications) {
    super(name);
    this.remainingVacationDays = 20;
    this._certifications = certifications;
  }


  takeVacationDays() {

  }

  addCertification() {

  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])


// extend keyword makes methods of parent class available to child class

// super keyword calls constructor of parent class, passing argument(s) of child class to the constructor of the parent class
// When parent class runs it sets property or properties to new for new child class isntancs

// Always call super on first line of constructor or JavaScript throws reference error
