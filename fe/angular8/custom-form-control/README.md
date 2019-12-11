# CustomFormControl

## 自定义FormControl

## forwardRef作用

Angular通过引入forwardRef让我们可以在使用构造注入时，使用尚未定义的依赖对象类型。
下面我们先看一下如果没有使用forwardRef，在开发中可能会遇到的问题：

```typescript
@Injectable()
class Socket {
  constructor(private buffer: Buffer) { }
}

console.log(Buffer); // undefined

@Injectable()
class Buffer {
  constructor(private size: Number) { }
}

console.log(Buffer); // [Function: Buffer]
```

若运行上面的例子，将会抛出以下异常：

```
Error: Cannot resolve all parameters for Socket(undefined).
Make sure they all have valid type or annotations
```

除了可以交换顺序，还可以使用angular提供的`forward reference`特性来解决问题，具体如下：

```typescript
@Injectable()
export class Socket {
    constructor(@Inject(forwardRef(() => Buffer)) private buffer) { }
}

@Injectable()
export class Buffer {
    constructor(private size: Number) { }
}
```

## ControlValueAccessor官方文档

定义一个接口，该接口充当Angular表单API和DOM中的本机元素之间的桥梁。

```typescript
interface ControlValueAccessor {
  writeValue(obj: any): void
  registerOnChange(fn: any): void
  registerOnTouched(fn: any): void
  setDisabledState(isDisabled: boolean)?: void
}
```

类的实现：

```
CheckboxControlValueAccessor
DefaultValueAccessor
NumberValueAccessor
RadioControlValueAccessor
RangeValueAccessor
SelectControlValueAccessor
SelectMultipleControlValueAccessor
```

实现此接口以创建与Angular表单集成的自定义表单控件指令

将新值写入元素。
当请求从模型到视图的编程更改时，表单API调用此方法以将其写入视图。
以下示例将一个值写入本机DOM元素。

```typescript
writeValue(value: any): void {
  this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
}
```

registerOnChange(): 
注册一个回调函数，当控件的值在UI中更改时调用该回调函数。

当值从视图传播到模型时，表单API会在初始化时调用此方法以更新表单模型。
在您自己的值访问器中实现registerOnChange方法时，请保存给定的函数，以便您的类在适当的时间调用它。

以下示例将提供的函数存储为内部方法。
```typescript
registerOnChange(fn: (_: any) => void): void {
  this._onChange = fn;
}
```

当UI中的值更改时，请调用已注册的函数以允许表单API自行更新：
```typescript
host: {
   '(change)': '_onChange($event.target.value)'
}
```

registerOnTouched()

注册一个回调函数，由初始化时的表单API调用，以在模糊时更新表单模型。
在您自己的值访问器中实现registerOnTouched时，保存给定函数，以便您的类在应将控件视为模糊或“触摸”时调用它。
存储回调函数

以下示例将提供的函数存储为内部方法。
```typescript
registerOnTouched(fn: any): void {
  this._onTouched = fn;
}
```

在模糊（或等效）时，您的类应调用已注册的函数以允许表单API自行更新：
```typescript
host: {
   '(blur)': '_onTouched()'
}
```

setDisabledState()

当控件状态更改为“禁用”或从“禁用”更改时，由表单API调用的函数。 根据状态，它启用或禁用适当的DOM元素。
以下是将disabled属性写入本机DOM元素的示例：

```typescript
setDisabledState(isDisabled: boolean): void {
  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
}
```

Angular需要一种通用机制来桥接原生/自定义表单控件和formControl指令，而这正是ControlValueAccessor干的事情，这个对象桥接原生表单控件和formControl指令，并同步两者的值

任何一个组件或者指令都可以通过实现ControlValueAccessor接口并注册为`NG_VALUE_ACCESSOR`，从而转变成ControlValueAccessor类型的对象



## 参考资料

- [如何利用 ControlValueAccessor 实现自定义表单](https://zhuanlan.zhihu.com/p/37270220)
- [Angular 4.x 自定义表单控件](https://segmentfault.com/a/1190000009070500)
- [Angular 4.x ngModel 双向绑定原理揭秘](https://segmentfault.com/a/1190000009126012)

