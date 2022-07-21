class SeatAssignment {
    [seatNumber: string]: string;
}

const seats = new SeatAssignment();

seats.A1 = 'Arvind';
seats.A2 = 'KK';

console.log(seats.A1);
