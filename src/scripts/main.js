import { DProgress } from "./data.progress.js";
import { MoveBtnIndicator } from "./MoveBtnIndicator.js";
import { HideProgressBar } from "./HideProgressBar.js";

new MoveBtnIndicator(DProgress.root, DProgress.button, DProgress.indicator);

new HideProgressBar(DProgress.root, DProgress.bar, DProgress.switch);
