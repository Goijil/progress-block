import { MoveBtnIndicator } from "./MoveBtnIndicator.js";

const Progress = {
  root: "[data-js-progress]",
  button: "[data-js-progress-button]",
  indicator: "[data-js-progress-indicator]",
};

new MoveBtnIndicator(Progress.root, Progress.button, Progress.indicator);
