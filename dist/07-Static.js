"use strict";
class Ride {
    start() { Ride._activeRide++; }
    stop() { Ride._activeRide--; }
    static get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 0;
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
const ride3 = new Ride();
ride3.start();
console.log(Ride.activeRide); // 3
