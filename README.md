# UserDetailsJwtClient

Same as [postman and curl](https://github.com/tdtc-hrb/UserDetails-jwt#test) test.    
![chrome shot](https://gitee.com/xiaobin80/cnblogs/raw/master/images/UserDetailsJwtClient.png)

- NodeJS [v18.x](https://nodejs.org/dist/latest-v18.x/)
- [Angular](https://tdtc-hrb.github.io/cnblogs/post/js-angular-app/)


## Deploy
```bash
npm install --save-dev
```

fix audit:
```bash
npm audit fix
```
or
```
npm audit fix --force
```

## Run
first:    
[web browser](https://localhost:7087/login)

afterwards:
```bash
ng serve --port 4230 --open
```

Last exec:    
http://localhost:4230/
