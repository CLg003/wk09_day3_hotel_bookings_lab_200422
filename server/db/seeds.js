use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    { 
        name: "Ella Bendall",
        email: "ella@email.com",
        checkedIn: false
    },
    {
        name: "Abi Wingate",
        email: "abi@fakeemail.co.uk",
        checkedIn: true
    },
    {
        name: "Robbie Johnstone",
        email: "r.m.j@gmail.com",
        checkedIn: false 
    },
    {
        name: "Ethan Laing",
        email: "laing@hotmail.com",
        checkedIn: true
    }
]);