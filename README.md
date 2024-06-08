# User Details JWT Client For Cordova
- Prepare
```
npm i cordova -g
npm install -g @angular/cli
```

## Cordova project
- create
```
cordova create AppWrapper com.tdtc.usedetails.jwt AppWrapper
```
> cordova create path [id [name]]

- Add Platforms
```
cd AppWrapper
cordova platform add browser
```

## Angular project
index.html:
```
<script type="text/javascript" src="cordova.js"></script>
```
connects your Angular project to Cordova

## run
Gen Angular dist files:
```
cd jwt-client
ng build --output-path=../AppWrapper/www --base-href=./
```

### verify
- [browser](http://localhost:4230/browser/index.html)
```
cd AppWrapper
cordova run browser --port=4230
```
