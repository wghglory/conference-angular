# Conference Angular

## Prepare

```bash
npm install -g yarn
npm install -g @angular/cli
npm list -g @angular/cli --depth=0
ng set --global packageManager yarn # Or cnpm
```

## Create Project

In github, create a project with a license but no README. Github will create a initial commit automatically.

```bash
# create local project using angular-cli
ng new conference-angular --routing --prefix app --style scss  # note we already specify to use yarn

# link local to remote
git remote add origin https://github.com/wghglory/conference-angular.git
git rebase origin/master
```

## angular-cli commands

```bash
ng g c navbar -d
```

## Docs

* [Setup CI](docs/CI.md)
* [Install Bootstrap](docs/Bootstrap.md)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
