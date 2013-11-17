## Код и Модули

 * Все в куче
 * Модули - просто файлы
 * Модульные подходы и сборка
   * CommonJS/Modules + Browserify
   * CommonJS/Modules + [LMD](https://github.com/azproduction/lmd)
   * AMD + r.js
 * [Путь JavaScript модуля](http://habrahabr.ru/post/181536/)

## Документация

 * Код плохо документирован
 * Код не правильно документирован
   * Не корректно оформленный JSDoc

```
/**
 * Функция ololo, преобразовывает pewpew
 * @param pewpew
 */
function ololo(pewpew) {

}
```
 
 * Подходы
   * JSDoc
   * jsdoc-toolkit
   * jsdoc3
   * Closure Compiler JSDoc
 * Чем проверить
   * [jscs](https://github.com/mdevils/node-jscs)

## Кодстайл
 
 * [airbnb/javascript](https://github.com/airbnb/javascript)
 * Чем проверить
   * .editorconfig (табы/пробелы)
   * jshint (общий стиль и баги)
   * [jscs](https://github.com/mdevils/node-jscs) (конкретные случаи)

## Сложность кода

 * Logical Lines of code (LLOC)
 * Statements per function
   * 12 и меньше - ОК
 * Cyclomatic complexity
   * 5 и меньше - ОК
 * Nested loops
   * 2 и меньше - ОК
 * Halstead complexity measures (Маурис Говард)
   * Difficulty (на сколько сложно понимать, развивать и ревьюить такой код)

```
(#distinct_operators / 2) * (#operands / #distinct_operands)
```

   * Volume (количество кода)

```
(#operators + #operands) * log2(#distinct_operators + #distinct_operands)
```

   * Effort (усилие на создание такого кода)

```
difficulty * volume
```

   * Time (время на написание всего кода, секунд) 

```
effort / 18
```

   * Bugs (оценка количства скрытых багов в таком коде)

```
pow(effort, 2/3) / 3000
```

 * Maintainability index [-Infinity...171] больше - лучше; 65 - OK

```
171 -
(3.42 * ln(mean_effort)) -
(0.23 * ln(mean_cyclomatic_complexity)) -
(16.2 * ln(mean_lloc))
```
 
 * Чем проверить
   * [plato](http://jsoverson.github.io/plato/examples/jquery/)


Конфиги с типовыми настройками https://github.com/azproduction/npm-package
 