import { flights } from '../data/flight.js';
import { updateFlights} from "./getterAndSetter.js";



document.querySelector('form').addEventListener('submit', function (e) {
  
    e.preventDefault();

    const airline = document.querySelector('#airline').value;
    const airlineLogo = document.querySelector('#airlineLogo').value;
    const from = document.querySelector('#from').value;
    const to = document.querySelector('#to').value;
    const departureTime = document.querySelector('#departureTime').value;
    const price = document.querySelector('#price').value;
    const rating = document.querySelector('#rating').value;
    const reviewsNum = document.querySelector('#reviewsNum').value;

    const newFlight = {
        id: flights.length+1,
        airline: airline,
        logoPic: airlineLogo ,
        flightNumber: "SA123",
        from: from,
        to: to,
        departureTime: departureTime,
        arrivalTime: "2023-12-01 10:30 AM",
        price: price,
        availableSeats: 150,
        rating : rating,
        travelerNum: 1,
        reviewsNum : reviewsNum,
        duration: "2h 30m",
        aircraftType: "Boeing 737",
        baggageAllowance: "20kg included",
        amenities: ["Wi-Fi", "In-flight entertainment"],
        classOptions: {
            economy: { price: 250, availableSeats: 100 },
            business: { price: 450, availableSeats: 40 },
            firstClass: { price: 800, availableSeats: 10 }
        }
    }

    flights.push(newFlight);
    updateFlights(flights);
})