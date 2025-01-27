import { DProgress } from "./data.progress.js";
import { MoveBtnIndicator } from "./MoveBtnIndicator.js";
import { HideProgressBar } from "./HideProgressBar.js";
import { SetValueInput } from "./SetValueInput.js";

new MoveBtnIndicator(DProgress.root, DProgress.button, DProgress.indicator);

new HideProgressBar(
  DProgress.root,
  DProgress.bar,
  DProgress.buttonVisibilityToggle
);

new SetValueInput(
  DProgress.root,
  DProgress.bar,
  DProgress.circle,
  DProgress.input,
  DProgress.buttonAnimationToggle
);
