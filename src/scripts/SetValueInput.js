export class SetValueInput {
  constructor(
    rootSelector,
    barSelector,
    circleSelector,
    inputSelector,
    btnAnimateSelector
  ) {
    this.selectors = {
      root: rootSelector,
      bar: barSelector,
      circle: circleSelector,
      input: inputSelector,
      btnAnimate: btnAnimateSelector,
    };

    this.rootElement = document.querySelector(this.selectors.root);
    this.inputElement = this.rootElement.querySelector(this.selectors.input);
    this.barElement = this.rootElement.querySelector(this.selectors.bar);
    this.circleElement = this.barElement.querySelector(this.selectors.circle);
    this.btnAnimateElement = this.rootElement.querySelector(
      this.selectors.btnAnimate
    );

    this.transferInputCircle();
    this.validateInput();
  }

  getStateBtnAnimate = (btn) => {
    return btn.getAttribute("data-active") === "true";
  };

  onAnimated = (event) => {
    setTimeout(() => {
      const currentValue = String(event.target.value);
      let newStyles = "";

      if (currentValue === "") {
        newStyles += "stroke-dashoffset: 346;";
        newStyles += "transition: all 1s ease 0s;";
      } else {
        const newOffset = 346 - parseFloat(currentValue) * (346 / 100);
        newStyles += `stroke-dashoffset: ${newOffset};`;
        newStyles += "transition: all 1s ease 0s;";
      }

      this.circleElement.style.cssText = newStyles;
    }, 1500);
  };

  onNotAnimated = (event) => {
    setTimeout(() => {
      const currentValue = String(event.target.value);
      let newStyles = "";

      if (currentValue === "") {
        newStyles += "stroke-dashoffset: 346;";
      } else {
        const newOffset = 346 - parseFloat(currentValue) * (346 / 100);
        newStyles += `stroke-dashoffset: ${newOffset};`;
      }

      this.circleElement.style.cssText = newStyles;
    }, 1500);
  };

  transferInputCircle = () => {
    this.btnAnimateElement.addEventListener("click", () => {
      if (this.getStateBtnAnimate(this.btnAnimateElement)) {
        this.inputElement.removeEventListener("input", this.onAnimated);
        this.inputElement.addEventListener("input", this.onNotAnimated);
      } else {
        this.inputElement.removeEventListener("input", this.onNotAnimated);
        this.inputElement.addEventListener("input", this.onAnimated);
      }
    });
  };

  validateInput = () => {
    const regex = /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/;

    this.inputElement.addEventListener("input", (event) => {
      let value = event.target.value;

      value = value.replace(/[^\d.]/g, "");

      if (value.includes(".")) {
        const [integer, decimal] = value.split(".");
        value = `${integer}.${decimal.slice(0, 2)}`;
      }

      if (parseFloat(value) > 100) {
        value = "100";
      }

      event.target.value = value;
    });
  };
}
