# UserDetailsJwtClient

Same as [postman and curl](https://github.com/tdtc-hrb/UserDetails-jwt#test) test.    
![chrome shot](https://gitee.com/xiaobin80/cnblogs/raw/master/images/UserDetailsJwtClient.png)

- NodeJS    
[v16.x](https://nodejs.org/dist/latest-v16.x/)
- Angular Cli    
```bash
npm install -g @angular/cli
```

## Deploy
```bash
npm install --save-dev @angular-devkit/build-angular
```

```bash
npm install --save @angular/animations
npm install --save @angular/common
npm install --save @angular/compiler
npm install --save @angular/core
npm install --save @angular/forms
npm install --save @angular/platform-browser
npm install --save @angular/platform-browser-dynamic
npm install --save @angular/router
npm install --save rxjs
npm install --save tslib
npm install --save zone.js
npm install --save @angular/cli
npm install --save @angular/compiler-cli
npm install --save @types/jasmine
npm install --save @types/node
npm install --save jasmine-core
npm install --save karma
npm install --save karma-chrome-launcher
npm install --save karma-coverage
npm install --save karma-jasmine
npm install --save karma-jasmine-html-reporter
```

fix audit:
```bash
npm audit fix
```
or
```
npm audit fix --force
```

Run:
```bash
ng serve --port 4230 --open
```
