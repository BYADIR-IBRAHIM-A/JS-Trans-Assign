// 1. Class للمركبات
class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name; // خاصية الأسم
        this.manufacturer = manufacturer; // خاصية الشكرة المصنعه
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
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationID = reservationID;
    }
}

// تعريف ثلاث سيارات
const car1 = new Car("Toyota Camry", "Toyota", 1, "gas");
const car2 = new Car("Tesla Model S", "Tesla", 2, "electric");
const car3 = new Car("Ford Mustang", "Ford", 3, "gas");

// تعريف طائرتين
const plane1 = new Plane("Boeing 747", "Boeing", 101, "Commercial");
const plane2 = new Plane("F-16 Falcon", "Lockheed Martin", 102, "Military");

// مصفوفة لتخزين جميع الحجوزات
const reservations = [];

// دالة إنشاء الحجز
function createReservation(employee, vehicle) {
    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log("لا يمكن للطيار قيادة سيارة. هذا غير متوافق.");
    } else if (employee instanceof Pilot && vehicle instanceof Plane) {
        const reservationID = reservations.length + 1; // إنشاء ID جديد للحجز
        const newReservation = new Reservation(new Date(), employee.id, vehicle.id, reservationID);
        reservations.push(newReservation); // تخزين الحجز في المصفوفة
        console.log("تم إنشاء الحجز بنجاح:", newReservation);
    } else if (employee instanceof Driver && vehicle instanceof Car) {
        const reservationID = reservations.length + 1; // إنشاء ID جديد للحجز
        const newReservation = new Reservation(new Date(), employee.id, vehicle.id, reservationID);
        reservations.push(newReservation); // تخزين الحجز في المصفوفة
        console.log("تم إنشاء الحجز بنجاح:", newReservation);
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log("لا يمكن للسائق قيادة طائرة. هذا غير متوافق.");
    } else {
        console.log("الحالة غير معروفة أو غير متوافقة.");
    }
}

// دالة لطباعة محتويات المصفوفة باستخدام map
function displayReservations() {
    if (reservations.length === 0) {
        console.log("لا توجد حجوزات مسجلة.");
    } else {
        reservations.map((reservation, index) => {
            console.log(`الحجز ${index + 1}:`);
            console.log(`- تاريخ الحجز: ${reservation.reservationDate}`);
            console.log(`- رقم الموظف: ${reservation.employeeId}`);
            console.log(`- رقم المركبة: ${reservation.vehicleId}`);
            console.log(`- رقم الحجز: ${reservation.reservationID}`);
            console.log("---------------------------");
        });
    }
}

// أمثلة عملية:
// تعريف كائنات طيّار ومركبات
const pilot = new Pilot("أحمد", 1, "1990-05-15", "PL123");
const driver = new Driver("محمد", 2, "1985-07-20", "DL456");
const car = new Car("Toyota Camry", "Toyota", 1, "gas");
const plane = new Plane("Boeing 747", "Boeing", 101, "Commercial");

// إنشاء الحجوزات
createReservation(pilot, car);   // حالة غير متوافقة
createReservation(pilot, plane); // حالة متوافقة
createReservation(driver, car);  // حالة متوافقة
createReservation(driver, plane); // حالة غير متوافقة

// عرض محتويات الحجوزات
displayReservations();