export class Progress {
  constructor(
    SelRoot,
    SelBar,
    SelCircle,
    SelInput,
    SelSpaceBtnAnimation,
    SelBtnAnimate,
    SelSpaceBtnVisibility,
    SelBtnVisibil
  ) {
    this.selectors = {
      root: SelRoot,
      bar: SelBar,
      circle: SelCircle,
      input: SelInput,
      spBtnAnim: SelSpaceBtnAnimation,
      btnAnim: SelBtnAnimate,
      spBtnVisib: SelSpaceBtnVisibility,
      btnVisib: SelBtnVisibil,
    };

    this.EmRoot = document.querySelector(this.selectors.root);

    this.EmBar = this.EmRoot.querySelector(this.selectors.bar);
    this.EmCircle = this.EmRoot.querySelector(this.selectors.circle);

    this.EmInput = this.EmRoot.querySelector(this.selectors.input);

    this.EmSpBtnAnim = this.EmRoot.querySelector(this.selectors.spBtnAnim);
    this.EmBtnAnim = this.EmSpBtnAnim.querySelector(this.selectors.btnAnim);

    this.EmSpBtnVisib = this.EmRoot.querySelector(this.selectors.spBtnVisib);
    this.EmBtnVisib = this.EmSpBtnVisib.querySelector(this.selectors.btnVisib);

    this.base();

    this.fromInputToCircle();
    this.hideBtnFunc();
  }

  base = () => {
    this.EmInput.addEventListener("input", this.getCorrectOffset);

    document.addEventListener("DOMContentLoaded", () => {
      if (this.EmInput) {
        this.EmInput.value = "";
      }
    });
  };

  getStateBtn = (btn) => {
    const state = btn.getAttribute("data-active") === "true";
    return state;
  };

  switchStateBtn = (btn) => {
    btn.setAttribute("data-active", String(!this.getStateBtn(btn)));

    if (this.getStateBtn(btn)) {
      btn.classList.remove("is-lock");
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
      btn.classList.add("is-lock");
    }
  };

  inputValidation = (currentOffset) => {
    const value = parseFloat(currentOffset);
    const regex = /^[0-9]+(\.[0-9]*)?$/;

    this.EmInput.classList.remove("error-input");

    if (currentOffset === "") {
      return 0;
    } else if (!regex.test(currentOffset)) {
      this.EmInput.classList.add("error-input");
      return 0;
    } else if (value > 100) {
      return 100;
    } else {
      return value;
    }
  };

  switchAnimateBar = () => {
    if (!this.getStateBtn(this.EmBtnAnim)) {
      this.EmCircle.classList.add("rotate-circle");
    } else {
      this.EmCircle.classList.remove("rotate-circle");
    }
  };

  getCorrectOffset = (event) => {
    const currentOffset = this.inputValidation(event.target.value);
    const newOffset = 346 - currentOffset * (346 / 100);

    this.EmCircle.style.cssText = `stroke-dashoffset: ${newOffset};`;
  };

  fromInputToCircle = () => {
    this.EmSpBtnAnim.addEventListener("click", () => {
      this.EmInput.removeEventListener("input", this.getCorrectOffset);
      this.switchAnimateBar();
      this.switchStateBtn(this.EmBtnAnim);

      if (this.getStateBtn(this.EmBtnAnim)) {
        this.EmInput.addEventListener("input", this.getCorrectOffset);
      } else {
        this.EmInput.addEventListener("input", this.getCorrectOffset);
      }
    });
  };

  onVisibilityChangeBar = (btn) => {
    if (this.getStateBtn(btn)) {
      this.EmBar.classList.remove("is-shown");
      this.EmBar.classList.add("is-hidden");
    } else {
      this.EmBar.classList.remove("is-hidden");
      this.EmBar.classList.add("is-shown");
    }
  };

  hideBtnFunc = () => {
    this.EmSpBtnVisib.addEventListener("click", () => {
      this.switchStateBtn(this.EmBtnVisib);
      this.onVisibilityChangeBar(this.EmBtnVisib);
    });
  };
}
