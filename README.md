## g-menu-for-share-point-online

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

## Real Deplyment ##
gulp bundle --ship
gulp package-solution --ship

## debug mode ###
gulp bundle
gulp package-solution
gulp serve --nobrowser

## installed package ##
npm install @microsoft/sp-lodash-subset

## Tenant-scoped solution deployment ##
 "skipFeatureDeployment": true  tenant-scoped  , "clientsideinstance.xml"  add
 "skipFeatureDeployment": false App-scoped     , "clientsideinstance.xml"  remove

## How to dubugging  ###
# launch.json
    Hosted-workbend => "url": "https://epiencelab.sharepoint.com/sites/mymodernteamsite/Shared%20Documents/Forms/AllItems.aspx", => deubugging Url Setting
# add url in end browser url
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"6117e91e-8fa7-4321-9590-b87fc4c62c25":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"testMessage":"Hello as property!"}}}


## git Source Control ##
https://git-scm.com/download/win
git에 가입하고(구글계정) 클라이언트 프로그램 설치
#설정 방법
https://demun.github.io/vscode-tutorial/git/ 





## 참고 사이트 ###
https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/using-page-placeholder-with-extensions
http://sharepoint.handsontek.net/2017/10/11/build-a-breadcrumb-using-spfx-extensions/

## HOW TO USE REST API ## 
https://www.c-sharpcorner.com/article/sharepoint-rest-calls-with-sphttpclient-class-in-spfx-webparts/
https://docs.microsoft.com/en-us/sharepoint/dev/spfx/connect-to-sharepoint
https://blog.hubfly.com/solutions/how-to-work-with-list-items-in-spfx-using-rest-api-part-1-retrieve-list-data
https://www.c-sharpcorner.com/article/retrieve-sharepoint-list-items-using-sharepoint-framework-development-model/ ( 내일 이걸로 데이터를 가쟈온다.)

## HOT TO USE PNP API  ###
https://social.technet.microsoft.com/Forums/en-US/d8c3eabb-9b93-49f1-82c0-10207e1a89f2/how-to-access-to-sharepoint-objects-list-listitem-user-ect-using-react-and-pnpjs-core-with?forum=SP2016
https://github.com/SharePoint/PnP-JS-Core/wiki/Basic--Operations
https://github.com/SharePoint/PnP-JS-Core/wiki/Developer-Guide

## HOT TO USER REACT API ####
https://social.technet.microsoft.com/wiki/contents/articles/37948.sharepoint-framework-retrieve-and-display-sharepoint-list-items-using-rest-api-and-react-js.aspx

## Woring after 2019/03/24 ##
## Working with the REST API in SharePoint Framework (SPFx) ##
https://www.vrdmn.com/2017/01/working-with-rest-api-in-sharepoint.html

	
## How To Work With List Items In SPFx Using REST API - Retrieve List Data - Part One ## ( TS CLASS based this Site)
https://www.c-sharpcorner.com/article/how-to-work-with-list-items-in-spfx-using-rest-api-retrieve-list-data-part-o/

## 중요사이트임 (git 사용하는 방법인)
https://promobile.tistory.com/378