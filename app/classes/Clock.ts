import clock from "clock";

export class Clock {
    public clockCallback: (text: string) => void;
    
    constructor() {
        clock.granularity = "minutes";
        clock.addEventListener("tick", this.updateClock);
    }

    private updateClock = () => {
        if (!this.clockCallback)
            return;
    
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const zeroPad = ((n: number) => (n < 10) ? "0" + n : n);
        const time = `${zeroPad(hours)}:${zeroPad(minutes)}`;

        this.clockCallback(time);
    }
}
export default Clock;