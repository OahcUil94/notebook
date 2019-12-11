import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styleUrls: ['./money-input.component.scss']
})
export class MoneyInputComponent implements OnInit {
  moneyForm: FormGroup;
  @ViewChild('element', {static: true}) element: ElementRef;

  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.moneyForm = fb.group({
      money: fb.control('123')
    });
  }

  ngOnInit() {
  }

  handleClick() {
    this.moneyForm.get('money').setValue('1234567');
    console.log(this.moneyForm.value);
  }

  handleClick2() {
    this.renderer.setProperty(this.element.nativeElement, 'value', '2345');
    console.log(this.moneyForm.value);
  }

  handleClick3() {
    this.moneyForm.get('money').disable();
  }

  handleClick4() {
    this.moneyForm.get('money').enable();
  }
}
