import Clock from "./classes/Clock";
import document from "document";

const timeElement = document.getElementById("time") as TextElement;
const clock = new Clock();
clock.clockCallback = (t) => timeElement.text = t;