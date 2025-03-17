// hometask 4.1
const scores = {
    programming: 88,
    design: 74,
    jurisprudence: false,
    relational_DB: 92,
    computerGraphics: "submitted",
    patterns: 65,
    philosophy: "transferred",
    network: 81
  };

  
 for (const key in scores) {
    if (typeof (scores[key]) !== "number") { 
        delete scores[key];
    } 
 }
 console.log(scores);
  

// hometask4.2
     class Student{
        constructor(fullName, direction) {
        this.fullName = fullName;
        this.direction = direction;
        }
        showName() {
            return this.fullName.split(" ");   
        }

        nameIncludes(data) {
            let result = this.showName();
            if (result.includes(data)) {
                return "true";
            } else {return "false";
            };
        }

        static studentBuilder() {
            return ("fullName: " + (this.fullName = "Ihor Kohut") + ", " + "direction: " + 
            (this.direction = "qc"));
        }
    }

    const stud1 = new Student('Ivan Petrenko', 'web');
    console.log(stud1);
    console.log(stud1.showName());
    console.log(stud1.nameIncludes("Iva"));

    const stud2 = new Student('Sergiy Koval', 'python');
    console.log(stud2.nameIncludes("Koval"));

    console.log(Student.studentBuilder());



    // hometask4.3
    class Plane{
        constructor(model, fuelSupply, fuelConsumption) {
        this.model = model;
        this.fuelSupply = fuelSupply;
        this.fuelConsumption = fuelConsumption;
        }
        calcFlightRange() {
            return (this.fuelSupply / this.fuelConsumption) * 100;
        }

        static sortFlightRange(planesArray) {
            planesArray.sort(function(a, b) {
                return a.calcFlightRange() - b.calcFlightRange();
            })
             planesArray.forEach(function(plane) {
                console.log(`${plane.model}: ${plane.calcFlightRange()} км`);
                });
            }
        }
     
    class TransportPlane extends Plane{
        constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption);
        this.cargo = cargo;
        this.addTank = addTank;
        }
        calcFlightRange() {
        let res = super.calcFlightRange();
        return res + (this.addTank / this.fuelConsumption) * 100;

        }
    }
    
    class PassengerPlane extends Plane{
        constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
        super(model, fuelSupply, fuelConsumption);
        this.passengers = passengers;
        this.refueling = refueling;
        }
        calcFlightRange() {
            let res = super.calcFlightRange();
            return res + (this.refueling / this.fuelConsumption) * 100;
        }
    }

    class WarPlane extends Plane{
        constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
        super(model, fuelSupply, fuelConsumption);
        this.missiles = missiles;
        this.aerodynamicsKoef = aerodynamicsKoef;
        }
        calcFlightRange() {
            let res = super.calcFlightRange();
            return res * this.aerodynamicsKoef;
        }
    }


        console.log("Unsorted range of planes:");
        const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
        console.log("An-225 Mriya: ", plane1.calcFlightRange());
        const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
        console.log("Boeing-747:", plane2.calcFlightRange());
        const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
        console.log("F-22 Raptor:", plane3.calcFlightRange());

        console.log("Sorted range of planes:");
        const planesArray = [plane1, plane2, plane3];
        Plane.sortFlightRange(planesArray);

