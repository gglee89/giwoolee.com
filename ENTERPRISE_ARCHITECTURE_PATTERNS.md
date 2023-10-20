> The biggest problem in the development and maintenance of large-scale software is complexity - large systems are hard to understand

-   "Out of the Tarpit - Ben Mosely Peter Marks"

> We believe that the major contributor to this complexity in many systems is the handling of state and the burden that this adds when trying to analyse and reason about the system. Other closely related contributors are code volume, and explicit concern with the flow of control through the system.

-   "Out of the Tarpit - Ben Mosely Peter Marks"

-   Lesson 1: Don't use shared mutable state.
-   Lesson 2: Code Volume
-   Lesson 3: Flow

### **State Management**

#### Problem with HIDDEN STATE

![image](https://github.com/gglee89/giwoolee.com/assets/16644017/0c0004b1-8a1e-4103-91b6-8c5a0fd73d1d)

```js
class Inventory {
  ledger = { total: 1200 }
}

class ItemsComponent {
  ledger: any
  constructor(private inventory: Inventory) {
    this.ledger = inventory.ledger;
  }
  add(x) { this.ledger.total += x; }
}

class WidgetsComponent {
  ledger: any
  constructor(private inventory: Inventory) {
    this.ledger = inventory.ledger;
  }
  add(x) { this.ledger.total += x; }
}
```

#### Violating the SRP (Single Responsibility Principle)

Essentially we need to test two things within a single test based on how the `reCalculateTotal` function is written. This represents an increase in complexity.

Example of a bad code (hard to test)

```
price;
mode;
widgets: Widget[];

reCalculateTotal(widget: Widget) {
  switch (this.mode) {
    case 'create':
      const newWidget = Object.assign({, widget, { id: uuidv4() }});
      this.widgets = [...this.widgets, newWidget]
      break;
    case 'update':
    this.widgets = this.widgets.map(wdgt =>
      (widget.id === wdgt.id) ? Object.assign({}, widget) : wdgt);
      break;
    case 'delete':
      this.widgets = this.widgets.filter(wdgt => widget.id !== wdgt.id);
      break;
    default:
      break;
  }

  this.price = this.widgets.reduce((acc, curr) => acc + curr.price, 0)
}
```

![image](https://github.com/lifebit-ai/web-application/assets/16644017/246a07a2-0436-44c0-a342-42853ad92ad2)

On the surface, you could be tricked into thinking like this is okayish code.

-   I've used all the cool, immutable operators,
-   using ternary functions
-   using Fat arrow functions

Now when we run the code:

```
const testService = new RefactorService();
const testWidget = { id: 100, name: '', price: 100, description: '' };
const testWidgets = [{ id: 100, name: '', price: 200, description: '' }];
testService.widgets = testWidgets;

testService.mode = 'create';
testService.reCalculateTotal(testWidget);

testService.mode = 'update';
testService.reCalculateTotal(testWidget);

testService.mode = 'delete';
testService.reCalculateTotal(testWidget);
```

What are we doing to get as an output of this flow? A: It's really hard to come up with an answer.
The issue is that, using the same parameter, you get different results, potentially every single time.

#### Nested Logic

![image](https://github.com/lifebit-ai/web-application/assets/16644017/5d514df2-95f9-4587-aa60-39e43076e0a0)

Ironically, this is the EASIEST problem to solve. Via, DEPENDENCY INJECTION & the EXTRACT METHOD

-   First step (DEPENDENCY INJECTION):
    -   Instead of using `switch (this.mode)...` we now should use `switch (mode)`
    -   and the `mode` should be now passed as a parameter of the function as `updateCoursesAndRecalculateCosts(course: Course, mode: string)...`
-   Second step (EXTRACT):
    -   Without breaking the enclosing code
    -   We get three methods to test (eg.: createCourse, updateCourse, deleteCourse)
    -   We get three methods we can reuse

![image](https://github.com/lifebit-ai/web-application/assets/16644017/6c3333d3-2866-46a5-9148-6a25c904d496)

-   With this we're `managing state`, `flow control`, and `code volume`
