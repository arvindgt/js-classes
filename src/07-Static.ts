class Ride {
    private static _activeRide: number = 0;

    start(): void { Ride._activeRide++; }
    stop(): void { Ride._activeRide--; }

    static get activeRide(): number {
        return Ride._activeRide;
    }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start()

const ride3 = new Ride();
ride3.start();

console.log(Ride.activeRide); // 3
