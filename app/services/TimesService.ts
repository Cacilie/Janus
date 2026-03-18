import { JapiDBFactory } from "./JapiDBFactory";
import { JapiDBService } from "./JapiDBService";
import { type Time } from "../Types/Time";

export class TimesService {
  private times: Time[] = [];
  private nextId: number = 0;
  private japiDBService: JapiDBService;

  // Constructor is public now, but instance will be managed by Factory
  constructor() {
    this.japiDBService = JapiDBFactory.getJapiDBService();
    this.loadTimes()
  }

  loadTimes() : void{
    let savedTimes = this.japiDBService.getTimes()
    this.setTimes(savedTimes)

  }

  setTimes(timesList : Time[]) : void {
    this.times = [...timesList]
  }

  getTimes(): Time[] {
    return [...this.times];
  }

  addTime(totalTime: number): Time {
    const newTime: Time = {
      id: this.nextId++,
      totalTime,
      date: new Date().toISOString(),
    };
    this.times.push(newTime);
    this.japiDBService.pushTime(newTime);
    return newTime;
  }

  clearTimes(): void {
    this.times = [];
    this.nextId = 0;
  }
}
