// 1. Class للمركبات
class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name; // خاصية الأسم
        this.manufacturer = manufacturer; // خاصية الشكرة المصنعه
        this.id = id; // خاصية رقم التعريف
    }
}

// 2. المركبات Class للسيّارة يرث من Class 
class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id); // Super استدعاء البناء من الفئة الأم باستخدام 
        this.type = type; // نوع السيارة (بنزين أو كهرباء)
    }
}

// 3. المركبات Class للطيّارة يرث من Class 
class Plane extends Vehicle {
    constructor(name, manufacturer, id, planeType) {
        super(name, manufacturer, id); // Super استدعاء البناء من الفئة الأم باستخدام 
        this.planeType = planeType; // نوع الطائرة المحدد
    }
}

// 4. Class للموظفين
class Employee {
    constructor(name, id, dateOfBirth) {
        this.name = name; // خاصية الأسم
        this.id = id; // خاصية رقم التعريف
        this.dateOfBirth = dateOfBirth; // خاصية تاريخ الميلاد
    }
}

// 5. الموظفين Class للسائق يرث من Class 
class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth); // استدعاء البناء من الفئة الأم
        this.licenseID = licenseID; // خاصية رقم رخصة القيادة
    }
}

// 6. الموظفين Class للطيّار يرث من Class 
class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth); // استدعاء البناء من الفئة الأم
        this.licenseID = licenseID; // خاصية رقم رخصة الطيران
    }
}

// 7. Class الحجز
class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
        this.reservationDate = reservationDate; // خاصية تاريخ الحجز
        this.employeeId = employeeId; // خاصية رقم تعريف الموظف
        this.vehicleId = vehicleId; // خاصية رقم تعريف المركبة
        this.reservationID = reservationID; // خاصية رقم الحجز
    }
}

// تعريف ثلاث سيارات
const car1 = new Car("Toyota Camry", "Toyota", 1, "gas"); // تعريف سيارة 1
const car2 = new Car("Tesla Model S", "Tesla", 2, "electric"); // تعريف سيارة 2
const car3 = new Car("Ford Mustang", "Ford", 3, "gas"); // تعريف سيارة 3

// تعريف طائرتين
const plane1 = new Plane("Boeing 747", "Boeing", 101, "Commercial"); // تعريف طائرة 1
const plane2 = new Plane("F-16 Falcon", "Lockheed Martin", 102, "Military"); // تعريف طائرة 2

// مصفوفة لتخزين جميع الحجوزات
const reservations = [];

// دالة إنشاء الحجز
function createReservation(employee, vehicle) {
    if (employee instanceof Pilot && vehicle instanceof Car) { // حالة الطيار والسيارة
        console.log("لا يمكن للطيار قيادة سيارة. هذا غير متوافق.");
    } else if (employee instanceof Pilot && vehicle instanceof Plane) { // حالة الطيار والطائرة
        const reservationID = reservations.length + 1; // إنشاء ID جديد للحجز
        const newReservation = new Reservation(new Date(), employee.id, vehicle.id, reservationID); // إنشاء حجز جديد
        reservations.push(newReservation); // تخزين الحجز في المصفوفة
        console.log("تم إنشاء الحجز بنجاح:", newReservation);
    } else if (employee instanceof Driver && vehicle instanceof Car) { // حالة السائق والسيارة
        const reservationID = reservations.length + 1; // إنشاء ID جديد للحجز
        const newReservation = new Reservation(new Date(), employee.id, vehicle.id, reservationID); // إنشاء حجز جديد
        reservations.push(newReservation); // تخزين الحجز في المصفوفة
        console.log("تم إنشاء الحجز بنجاح:", newReservation);
    } else if (employee instanceof Driver && vehicle instanceof Plane) { // حالة السائق والطائرة
        console.log("لا يمكن للسائق قيادة طائرة. هذا غير متوافق.");
    } else { // حالة غير معروفة أو غير متوافقة
        console.log("الحالة غير معروفة أو غير متوافقة.");
    }
}

// دالة لطباعة محتويات المصفوفة باستخدام map
function displayReservations() {
    if (reservations.length === 0) { // التحقق من وجود حجوزات
        console.log("لا توجد حجوزات مسجلة.");
    } else {
        reservations.map((reservation, index) => { // طباعة كل حجز
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
const pilot = new Pilot("أحمد", 1, "1990-05-15", "PL123"); // تعريف طيار
const driver = new Driver("محمد", 2, "1985-07-20", "DL456"); // تعريف سائق
const car = new Car("Toyota Camry", "Toyota", 1, "gas"); // تعريف سيارة
const plane = new Plane("Boeing 747", "Boeing", 101, "Commercial"); // تعريف طائرة

// إنشاء الحجوزات
createReservation(pilot, car);   // حالة غير متوافقة لسائق طائرة
createReservation(pilot, plane); // حالة متوافقة لطيار
createReservation(driver, car);  // حالة متوافقة لسائق سيارة
createReservation(driver, plane); // حالة غير متوافقة لسائق سيارة

// عرض محتويات الحجوزات
displayReservations();