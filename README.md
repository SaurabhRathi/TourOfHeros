# How to deploy Angular apps to github pages
1) In angular.json file, change the outputpath value to “docs/”.
2) ng build --prod --base-href "https://SaurabhRathi.github.io/heroes/". This will generate static files in docs folder
3) --base-href option is for setting base path to your remote repo "heroes" on github
4) push the changes
5) in the repo settings, go to gitpages section and set the branch and folder (set folder to /docs)

# Ngrx 
Ngrx = Redux(Store)(React's state mgmt library) + rxjs(Observable)
Ngrx=  State Mgmt using observable

Action  : just defines what all actions that can be taken which can modify state (actions.ts = defines all actions and their the payload)
         
Reducer : way to get data from store given the action (reducer.ts = what happens on each action like switch(action) { case Action.A : return ...state;})

effects : way to pass action to another action like getDataAction 
            ssucess



# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
