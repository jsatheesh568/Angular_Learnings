# AngularFundamentals

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# 📘 Angular Learning Journey — Day 1

Welcome to my **Angular learning tracker**! 🚀
This log will document my daily progress as I master Angular (v16+ / v17+ / v18 / Angular 20+ compatible concepts).

---

## 📂 Table of Contents

* [Workspace & Project Structure](#workspace--project-structure)
* [Components — Building Blocks](#components--building-blocks)
* [Templates & Data Binding](#templates--data-binding)
* [Directives](#directives)
* [Pipes](#pipes)
* [Lifecycle Hooks](#lifecycle-hooks)
* [Dependency Injection & Services](#dependency-injection--services)
* [Forms (Template-Driven)](#forms-template-driven)
* [Summary](#summary)

---

## 🧭 Workspace & Project Structure

> Angular workspace contains app source, configs, and environment files managed by Angular CLI.

* `src/` — Application source code
* `app/` — Components, modules, services
* `angular.json` — Angular build & project config
* `package.json` — Dependencies & scripts
* Workspace ensures modular, scalable app organization.

---

## 🧱 Components — Building Blocks

> Components control UI sections using HTML, TypeScript, and CSS.

* Define reusable UI pieces
* Contain:

  * **HTML** (template)
  * **TS** (logic)
  * **CSS/SCSS** (styling)
* Decorated with `@Component()`
* Declared in modules, rendered in templates

---

## 🖋 Templates & Data Binding

> Connects UI and component logic.

### Binding Types:

* `{{ }}` — **Interpolation**
* `[prop]` — **Property Binding**
* `(event)` — **Event Binding**
* `[(ngModel)]` — **Two-way Binding**

Enables reactive & dynamic UI updates.

---

## 🎯 Directives

> Extend HTML behavior or change DOM structure.

### Types:

* **Structural:** `*ngIf`, `*ngFor`, `*ngSwitch`
* **Attribute:** `ngClass`, `ngStyle`

Used to manipulate DOM and add logic to elements.

---

## 🔄 Pipes

> Transform data inside templates.

Examples: `date`, `uppercase`, `currency`, `json`

Custom pipes created using `@Pipe()`

```html
{{ value | uppercase }}
```

---

## ♻️ Lifecycle Hooks

> Tap into component life cycle.

Common hooks:

* `ngOnInit()` — after initialization
* `ngOnChanges()` — on input change
* `ngOnDestroy()` — cleanup

Useful for subscriptions, initialization logic, cleanup.

---

## 💉 Dependency Injection & Services

> Share logic across components.

* Services handle business logic, API calls, shared functions
* Provided via Angular DI system
* Promotes reusability & clean architecture

---

## 📝 Forms (Template-Driven)

> Form handling using directives and bindings in HTML.

* Uses `[(ngModel)]`
* Easy validation (`required`, `minlength`)
* Suitable for simple to medium forms

---

## ✅ Day 1 Summary

Learned the core Angular building blocks:

✔ Workspace & Angular CLI
✔ Components & Templates
✔ Data Binding & Directives
✔ Pipes, Lifecycle Hooks
✔ Dependency Injection
✔ Template-Driven Forms

**Strong foundation built 💪 — ready for advanced topics next!**

