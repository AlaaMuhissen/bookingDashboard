export const flights = [
    {
        id: 1,
        airline: "Sample Airlines",
        logoPic: "https://pluspng.com/img-png/emirates-airlines-logo-png-emirates-logo-the-most-famous-brands-and-company-logos-in-the-world-3840x2160.png",
        flightNumber: "SA123",
        from: "New York",
        to: "Los Angeles",
        departureTime: "2023-12-01 08:00 AM",
        arrivalTime: "2023-12-01 10:30 AM",
        price: 250,
        availableSeats: 150,
        rating : 4.2,
        reviewsNum : 54,
        duration: "2h 30m",
        aircraftType: "Boeing 737",
        baggageAllowance: "20kg included",
        amenities: ["Wi-Fi", "In-flight entertainment"],
        classOptions: {
            economy: { price: 250, availableSeats: 100 },
            business: { price: 450, availableSeats: 40 },
            firstClass: { price: 800, availableSeats: 10 }
        }
    },
    {
        id: 2,
        airline: "Another Air",
        logoPic: "https://pluspng.com/img-png/emirates-airlines-logo-png-dubai-flight-emirates-airline-etihad-airways-fly-emirates-logo-910x512.png",
        flightNumber: "AA456",
        from: "Chicago",
        to: "Miami",
        departureTime: "2023-12-01 09:30 AM",
        arrivalTime: "2023-12-01 12:00 PM",
        price: 180,
        availableSeats: 120,

        rating : 4.2,
        reviewsNum : 20,
        duration: "2h 30m",
        aircraftType: "Airbus A320",
        baggageAllowance: "15kg included",
        amenities: ["In-flight meals", "USB chargers"],
        classOptions: {
            economy: { price: 180, availableSeats: 100 },
            business: { price: 350, availableSeats: 15 },
            firstClass: { price: 650, availableSeats: 5 }
        }
    },
    {
        id: 3,
        airline: "Fly Express",
        logoPic: "https://pluspng.com/img-png/emirates-airlines-logo-png-dubai-flight-emirates-airline-etihad-airways-fly-emirates-logo-910x512.png",
        flightNumber: "FE789",
        from: "Los Angeles",
        to: "New York",
        departureTime: "2023-12-02 07:30 AM",
        arrivalTime: "2023-12-02 10:00 AM",
        price: 220,
        availableSeats: 80,
        rating : 4.2,
        reviewsNum : 39,
        duration: "2h 30m",
        aircraftType: "Boeing 737",
        baggageAllowance: "18kg included",
        amenities: ["In-flight entertainment", "Extra legroom"],
        classOptions: {
            economy: { price: 220, availableSeats: 70 },
            business: { price: 400, availableSeats: 10 }
        }
    },
    {
        id: 4,
        airline: "WingStar",
        logoPic: "https://pluspng.com/img-png/emirates-airlines-logo-png-dubai-flight-emirates-airline-etihad-airways-fly-emirates-logo-910x512.png",
        flightNumber: "WS345",
        from: "Miami",
        to: "Chicago",
        departureTime: "2023-12-02 10:30 AM",
        arrivalTime: "2023-12-02 01:00 PM",
        price: 190,
        availableSeats: 100,
        rating : 4.2,
        reviewsNum : 138,
        duration: "2h 30m",
        aircraftType: "Airbus A320",
        baggageAllowance: "16kg included",
        amenities: ["In-flight meals", "Wi-Fi"],
        classOptions: {
            economy: { price: 190, availableSeats: 90 },
            business: { price: 360, availableSeats: 10 }
        }
    },
    {
        id: 5,
        airline: "SkyJet",
        logoPic: "https://pluspng.com/img-png/emirates-airlines-logo-png-dubai-flight-emirates-airline-etihad-airways-fly-emirates-logo-910x512.png",
        flightNumber: "SJ567",
        from: "San Francisco",
        to: "Seattle",
        departureTime: "2023-12-03 08:30 AM",
        arrivalTime: "2023-12-03 10:30 AM",
        price: 150,
        availableSeats: 70,
        rating : 4.2,
        reviewsNum : 10,
        duration: "2h",
        aircraftType: "Airbus A320",
        baggageAllowance: "15kg included",
        amenities: ["Wi-Fi", "In-flight entertainment"],
        classOptions: {
            economy: { price: 150, availableSeats: 50 },
            business: { price: 300, availableSeats: 20 }
        }
   // },
    // {
    //     id: 6,
    //     airline: "SunWings",
    //     flightNumber: "SW234",
    //     from: "Seattle",
    //     to: "San Francisco",
    //     departureTime: "2023-12-03 11:00 AM",
    //     arrivalTime: "2023-12-03 01:00 PM",
    //     price: 160,
    //     availableSeats: 80,
    //     duration: "2h",
    //     aircraftType: "Boeing 737",
    //     baggageAllowance: "17kg included",
    //     amenities: ["In-flight meals", "USB chargers"],
    //     classOptions: {
    //         economy: { price: 160, availableSeats: 60 },
    //         business: { price: 320, availableSeats: 20 }
    //     }
    // },
    // {
    //     id: 7,
    //     airline: "AirWays",
    //     flightNumber: "AW789",
    //     from: "Boston",
    //     to: "Washington, D.C.",
    //     departureTime: "2023-12-04 08:30 AM",
    //     arrivalTime: "2023-12-04 10:30 AM",
    //     price: 120,
    //     availableSeats: 60,
    //     duration: "2h",
    //     aircraftType: "Embraer E190",
    //     baggageAllowance: "15kg included",
    //     amenities: ["In-flight entertainment", "Extra legroom"],
    //     classOptions: {
    //         economy: { price: 120, availableSeats: 50 },
    //         business: { price: 220, availableSeats: 10 }
    //     }
    // },
    // {
    //     id: 8,
    //     airline: "Rainbow Air",
    //     flightNumber: "RA321",
    //     from: "Washington, D.C.",
    //     to: "Boston",
    //     departureTime: "2023-12-04 11:00 AM",
    //     arrivalTime: "2023-12-04 01:00 PM",
    //     price: 110,
    //     availableSeats: 70,
    //     duration: "2h",
    //     aircraftType: "Embraer E190",
    //     baggageAllowance: "15kg included",
    //     amenities: ["Wi-Fi", "In-flight meals"],
    //     classOptions: {
    //         economy: { price: 110, availableSeats: 60 },
    //         business: { price: 210, availableSeats: 10 }
    //     }
    // },
    // {
    //     id: 9,
    //     airline: "Swift Airways",
    //     flightNumber: "SW123",
    //     from: "Los Angeles",
    //     to: "San Francisco",
    //     departureTime: "2023-12-05 08:00 AM",
    //     arrivalTime: "2023-12-05 10:00 AM",
    //     price: 160,
    //     availableSeats: 100,
    //     duration: "2h",
    //     aircraftType: "Airbus A320",
    //     baggageAllowance: "18kg included",
    //     amenities: ["In-flight meals", "USB chargers"],
    //     classOptions: {
    //         economy: { price: 160, availableSeats: 80 },
    //         business: { price: 320, availableSeats: 20 }
    //     }
    // },
    // {
    //     id: 10,
    //     airline: "AirSwift",
    //     flightNumber: "AS456",
    //     from: "San Francisco",
    //     to: "Los Angeles",
    //     departureTime: "2023-12-05 11:30 AM",
    //     arrivalTime: "2023-12-05 01:30 PM",
    //     price: 170,
    //     availableSeats: 90,
    //     duration: "2h",
    //     aircraftType: "Airbus A320",
    //     baggageAllowance: "18kg included",
    //     amenities: ["Wi-Fi", "In-flight entertainment"],
    //     classOptions: {
    //         economy: { price: 170, availableSeats: 70 },
    //         business: { price: 340, availableSeats: 20 }
    //     }
    },
    // Add more flight objects as needed
];
