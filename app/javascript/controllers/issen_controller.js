import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="issen"
export default class extends Controller {
  static targets = ["element0", "element1", "element2", "element3", "element4", "element5", "element6", "element7", "element8", "element9", "element10", "element11"];

  connect() {
    setTimeout(() => {
      this.switchDisplay1();
    }, 3000);

    setTimeout(() => {
      this.switchDisplay2();
    }, 6000);

    setTimeout(() => {
      this.switchDisplay3();
    }, 9000);

    setTimeout(() => {
      this.switchDisplay4();
    }, 12000);

    setTimeout(() => {
      this.switchDisplay5();
    }, 15000);

    setTimeout(() => {
      this.switchDisplay6();
    }, 18000);

    setTimeout(() => {
      this.switchDisplay7();
    }, 21000);

    setTimeout(() => {
      this.switchDisplay8();
    }, 24000);

    setTimeout(() => {
      this.switchDisplay9();
    }, 27000);

    setTimeout(() => {
      this.switchDisplay10();
    }, 30000);

    setTimeout(() => {
      this.switchDisplay11();
    }, 33000);
  }

  switchDisplay1() {
    this.element0Target.classList.add("invisible");
    this.element1Target.classList.remove("invisible", "opacity-0");
    this.element1Target.classList.add("opacity-100");
  }

  switchDisplay2() {
    this.element1Target.classList.add("invisible");
    this.element2Target.classList.remove("invisible", "opacity-0");
    this.element2Target.classList.add("opacity-100");
  }

  switchDisplay3() {
    this.element2Target.classList.add("invisible");
    this.element3Target.classList.remove("invisible", "opacity-0");
    this.element3Target.classList.add("opacity-100");
  }

  switchDisplay4() {
    this.element3Target.classList.add("invisible");
    this.element4Target.classList.remove("invisible", "opacity-0");
    this.element4Target.classList.add("opacity-100");
  }

  switchDisplay5() {
    this.element4Target.classList.add("invisible");
    this.element5Target.classList.remove("invisible", "opacity-0");
    this.element5Target.classList.add("opacity-100");
  }

  switchDisplay6() {
    this.element5Target.classList.add("invisible");
    this.element6Target.classList.remove("invisible", "opacity-0");
    this.element6Target.classList.add("opacity-100");
  }

  switchDisplay7() {
    this.element6Target.classList.add("invisible");
    this.element7Target.classList.remove("invisible", "opacity-0");
    this.element7Target.classList.add("opacity-100");
  }

  switchDisplay8() {
    this.element7Target.classList.add("invisible");
    this.element8Target.classList.remove("invisible", "opacity-0");
    this.element8Target.classList.add("opacity-100");
  }

  switchDisplay9() {
    this.element8Target.classList.add("invisible");
    this.element9Target.classList.remove("invisible", "opacity-0");
    this.element9Target.classList.add("opacity-100");
  }

  switchDisplay10() {
    this.element9Target.classList.add("invisible");
    this.element10Target.classList.remove("invisible", "opacity-0");
    this.element10Target.classList.add("opacity-100");
  }

  switchDisplay11() {
    this.element10Target.classList.add("invisible");
    this.element11Target.classList.remove("invisible", "opacity-0");
    this.element11Target.classList.add("opacity-100");
  }
}
