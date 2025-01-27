export class HideProgressBar {
  constructor(rootSelector, barSelector, buttonSelector) {
    this.selectors = {
      root: rootSelector,
      bar: barSelector,
      button: buttonSelector,
    };

    this.rootElement = document.querySelector(this.selectors.root);
    this.barElement = this.rootElement.querySelector(this.selectors.bar);
    this.buttonElement = this.rootElement.querySelector(this.selectors.button);

    this.onVisibilityChange();
  }

  getStateDataVisibility = (bar) => {
    return bar.getAttribute("data-visibility") === "true";
  };

  getStateDataActive = (indicator) => {
    return indicator.getAttribute("data-active") === "true";
  };

  onButtonClick = (bar) => {
    if (!this.getStateDataActive(this.buttonElement)) {
      bar.setAttribute("data-visibility", "false");
      bar.classList.remove("is-shown");
      bar.classList.add("is-hidden");
    } else {
      bar.setAttribute("data-visibility", "true");
      bar.classList.remove("is-hidden");
      bar.classList.add("is-shown");
    }
  };

  onVisibilityChange = () => {
    this.buttonElement.addEventListener("click", () =>
      this.onButtonClick(this.barElement)
    );
  };
}
