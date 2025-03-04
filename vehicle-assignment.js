// 1. Class للمركبات
class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}
// 2. المركبات Class للسيّارة يرث من Class 
class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type; // gas or electric
    }
}
// 3. المركبات Class للطيّارة يرث من Class 
class Plane extends Vehicle {
    constructor(name, manufacturer, id, planeType) {
        super(name, manufacturer, id);
        this.planeType = planeType; // specific type of plane
    }
}
// 4. Class للموظفين
class Employee {
    constructor(name, id, dateOfBirth) {
        this.name = name;
        this.id = id;
        this.dateOfBirth = dateOfBirth;
    }
}
// 5. الموظفين Class للسائق يرث من Class 
class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}
// 6. الموظفين Class للطيّار يرث من Class 
class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}
// 7. Class الحجز
class Reservation {
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationID = reservationID;
    }
}
// 8.  لثلاثة سيّارات وطائرتين objects تعريف
const car1 = new Car("Car1", "Toyota", 1, "gas");
const car2 = new Car("Car2", "Tesla", 2, "electric");
const car3 = new Car("Car3", "Ford", 3, "gas");
const plane1 = new Plane("Plane1", "Boeing", 4, "jet");
const plane2 = new Plane("Plane2", "Airbus", 5, "propeller");
// 9. دالة التحقق وإنشاء الحجز
const reservations = [];

function reserveVehicle(employee, vehicle) {
    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log("الموظف طيّار والمركبة سيّارة، لا يمكنهم التوافق.");
    } else if (employee instanceof Pilot && vehicle instanceof Plane) {
        const reservation = new Reservation(new Date(), employee.id, vehicle.id, reservations.length + 1);
        reservations.push(reservation);
        console.log("تم الحجز بنجاح!");
    } else if (employee instanceof Driver && vehicle instanceof Car) {
        const reservation = new Reservation(new Date(), employee.id, vehicle.id, reservations.length + 1);
        reservations.push(reservation);
        console.log("تم الحجز بنجاح!");
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log("الموظف سائق والمركبة طيّارة، لا يمكنهم التوافق.");
    }
}
// 10. map طباعة محتوى المصفوفة باستخدام
reservations.map(reservation => console.log(reservation));
