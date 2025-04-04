
// hometask9.1

type SortDirection = "asc" | "desc";
type SortFunction = (arr: string[], direction: SortDirection) => string[];

const superSort: SortFunction = (arr, direction) => {
    return [...arr].sort((a, b) => 
        direction === "asc" ? a.localeCompare(b) : b.localeCompare(a)
    );
};


const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc")); // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result); // [ 'D', 'C', 'B', 'A' ]





// hometask9.2

enum PackageStatus {
    Pending,
    InTransit,
    Delivered,
    Lost
}


interface Dimensions {
    length: number;
    width: number;
    height: number;
}


interface Parcel {
    readonly id: number; 
    weight: number;
    dimensions: Dimensions;
    description?: string; 
    sender: string | number; 
    status: PackageStatus;
    
    deliver(isSuccess: boolean): void;
    readonly statusName: string;
}

//Приклад роботи
const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    
    deliver(isSuccess) {
        this.status = isSuccess 
            ? PackageStatus.Delivered 
            : PackageStatus.Lost;
    },
    
    get statusName() {
        return PackageStatus[this.status];
    }
};

item.deliver(true);
console.log(item.statusName);  // Delivered
