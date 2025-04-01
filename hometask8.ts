
// hometask8.1

const employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};

const premiumData = {
    isPremium: true,
    premium: 1000
};

const payPerHour: number = 32;
const workingDays: number = 14;

const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = function (
    employeeData: {name: string; profession: string; workingHoursPerDay: number}, 
    premiumData: {isPremium: boolean; premium: number}, 
    payPerHour: number, 
    workingDays: number, 
    experienceCoefficient: number
): string {
    let salary: number = 
        employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    
    if (premiumData.isPremium) {
        salary += premiumData.premium;
    }
    
    return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};

const salaryInfo: string = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceCoefficients[2]);

console.log(salaryInfo);




// hometask8.2

function processData(param: string | number | boolean | number[]): string | number | boolean | number[] {
    if (typeof param === "string") {
        return param.toUpperCase();
    } else if (typeof param === "number") {
        return param * param;
    } else if (typeof param === "boolean") {
        return !param;
    } else if (Array.isArray(param)) {
        return param.length === 0 ? "Empty array: []" : param.map(num => num * num);
    }
    
    throw new Error("Invalid input");
}

console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // "Empty array: []"



// hometask8.3

type Triangle = { type: "triangle"; base: number; height: number };
type Rectangle = { type: "rectangle"; width: number; height: number };
type Circle = { type: "circle"; radius: number };

type Figure = Triangle | Rectangle | Circle;

function getFigureInfo(figure: Figure): string {
    switch (figure.type) {
        case "triangle":
            const triangleArea = (figure.base * figure.height) / 2;
            return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${triangleArea}`;
        case "rectangle":
            const rectangleArea = figure.width * figure.height;
            return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${rectangleArea}`;
        case "circle":
            const circleArea = (Math.PI * figure.radius ** 2).toFixed(2);
            return `Circle with radius ${figure.radius} has an area of ${circleArea}`;
        default:
            throw new Error("Unknown figure type");
    }
}


const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
const circle: Circle = { type: "circle", radius: 8 };

console.log(getFigureInfo(triangle)); // "Triangle with base 5 and height 10 has an area of 25"
console.log(getFigureInfo(rectangle)); // "Rectangle with width 8 and height 14 has an area of 112"
console.log(getFigureInfo(circle)); // "Circle with radius 8 has an area of 201.06"