export class MoveBtnIndicator {
  constructor(rootSelector, buttonSelector, indicatorSelector) {
    this.selectors = {
      root: rootSelector,
      button: buttonSelector,
      indicator: indicatorSelector,
    };

    this.rootElement = document.querySelector(this.selectors.root);
    this.buttonElements = this.rootElement.querySelectorAll(
      this.selectors.button
    );
    this.btnForEach();
  }

  getStateDataActive = (indicator) => {
    return indicator.getAttribute("data-active") === "true";
  };

  onButtonClick = (indicator) => {
    if (this.getStateDataActive(indicator)) {
      indicator.setAttribute("data-active", "false");
      indicator.classList.remove("is-active");
      indicator.classList.add("is-lock");
    } else {
      indicator.setAttribute("data-active", "true");
      indicator.classList.remove("is-lock");
      indicator.classList.add("is-active");
    }
  };

  btnForEach = () => {
    this.buttonElements.forEach((btnEm) => {
      const indicatorElement = btnEm.querySelector(this.selectors.indicator);
      btnEm.addEventListener("click", () =>
        this.onButtonClick(indicatorElement)
      );
    });
  };
}
