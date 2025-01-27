export class HideProgressBar {
  constructor(rootSelector, barSelector, switchSelector) {
    this.selectors = {
      root: rootSelector,
      bar: barSelector,
      switch: switchSelector,
    };

    this.rootElement = document.querySelector(this.selectors.root);
    this.barElement = this.rootElement.querySelector(this.selectors.bar);
    this.switchElement = this.rootElement.querySelector(this.selectors.switch);

    this.onVisibilityChange();
  }

  getStateDataVisibility = (bar) => {
    return bar.getAttribute("data-visibility") === "true";
  };

  getStateDataActive = (indicator) => {
    return indicator.getAttribute("data-active") === "true";
  };

  onButtonClick = (bar) => {
    if (!this.getStateDataActive(this.switchElement)) {
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
    this.switchElement.addEventListener("click", () =>
      this.onButtonClick(this.barElement)
    );
  };
}
