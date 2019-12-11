import { Directive, ElementRef, forwardRef, Host, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const MONEYINPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MoneyInputDirective),
  multi: true
};

@Directive({
  selector: '[appMoneyInput]',
  host: {
    '(blur)': 'onTouchedChange()'
  },
  providers: [MONEYINPUT_VALUE_ACCESSOR]
})
export class MoneyInputDirective implements ControlValueAccessor {
  private onModelChange = _ => {};
  private onTouchedChange = _ => {};
  private count = 0;
  host: {
    '(blur)': 'onTouchedChange'
  };
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // 这里打印了什么时候调用onInput，在输入表单发生input事件的时候调用
    console.log('onInput');
    value = this.formatNumber(value); // 格式化值之后, 重新赋值
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
    this.onModelChange(value);
  }

  // 设置原生表单控件的值
  writeValue(obj: any): void {
    console.log('writeValue: ', obj);
    // count实验了两次使用FormBuilder Api设置formControl值时的情况
    // 第二次调用setValue API重新设置了一下formControl的值，这里不调用onInput更新UI上显示的值，而是重新设置formControl的值
    // UI上的值没有更新，formControl的值是更新的
    if (this.count !== 0) {
      this.onModelChange('23432434' + obj);
      return;
    }

    // 第一次初始化时, 调用onInput, ui上正常显示处理过的值
    obj = this.formatNumber(obj);
    this.onInput(obj);
    this.count++;
  }

  // 注册一个设置formControl值的函数，每次需要更新formControl值的时候，需要调用一下
  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    this.onModelChange = function () {
      console.log('onModelChange', ...arguments);
      return fn(...arguments);
    };
  }

  // 注册用户和控件交互时触发的回调
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
    this.onTouchedChange = function () {
      // 无参
      console.log('onTouchedChange', ...arguments);
      return fn(...arguments);
    };
  }

  // 格式化value
  formatNumber(value: string): string {
    value = value.replace(/,/g, '');
    let result = '', charCount = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      if (/[0-9]/.test(value.charAt(i))) {
        if (charCount === 3) {
          result = ',' + result;
          charCount = 0;
        }
        result = value.charAt(i) + result;
        charCount++;
      }
    }
    return result;
  }

  // 通过enable或者disable来触发的
  // 通过formControl来设置是否禁用，触发这个函数来更新ui的状态
  // this.moneyForm.get('money').disable();
  // this.moneyForm.get('money').enable();
  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }
}
