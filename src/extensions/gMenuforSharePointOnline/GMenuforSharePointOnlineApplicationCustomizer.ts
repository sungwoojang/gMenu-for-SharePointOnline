import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderName,
  PlaceholderContent
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import { SPHttpClient, SPHttpClientResponse, SPHttpClientConfiguration } from '@microsoft/sp-http';  // sharepoint rest api 호출시

import * as strings from 'GMenuforSharePointOnlineApplicationCustomizerStrings';
import styles from './AppCustomizer.module.scss';

import { escape } from '@microsoft/sp-lodash-subset';
const LOG_SOURCE: string = 'GMenuforSharePointOnlineApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IGMenuforSharePointOnlineApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}



/** A Custom Action which can be run during execution of a Client Side Application */
export default class GMenuforSharePointOnlineApplicationCustomizer
  extends BaseApplicationCustomizer<IGMenuforSharePointOnlineApplicationCustomizerProperties> {

    private _topPlaceholder: PlaceholderContent | undefined;
    private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {    
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);    

    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);

    return Promise.resolve();
  }  

  private _renderPlaceHolders(): void {

    const spHttpClient: SPHttpClient = this.context.spHttpClient;
    const currentWebUrl: string = this.context.pageContext.web.absoluteUrl;
    var jsonValue: string = "";
    
   
    // Handling the top placeholder
    if (!this._topPlaceholder) {
        this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
            PlaceholderName.Top,
            { onDispose: this._onDispose }
        );

        // The extension should not assume that the expected placeholder is available.
        if (!this._topPlaceholder) {
            console.error("The expected placeholder (Top) was not found.");
            return;
        } 

        debugger; 
        console.debug("OUTPUT==");

        //let requestUrl: string = currentWebUrl.concat("/_api/site/rootweb?$select=Title,ServerRelativeUrl,URL");
        //let requestUrl: string = currentWebUrl.concat("/_api/site/rootweb/webinfos");
        let requestUrl: string = currentWebUrl.concat("/_api/web/lists/getbytitle('문서')/items");
       

        spHttpClient.get(requestUrl, SPHttpClient.configurations.v1)  
          .then((response: SPHttpClientResponse) => {  
          if (response.ok) {  
              response.json().then((responseJSON) => {  
                  if (responseJSON!=null && responseJSON.value!=null){                      
                    if (this.properties) {                 
                      let topString: string = "홈 >> ";
                      if (!topString) {
                          topString = "Top property was not defined";
                      }
                      
                      if (this._topPlaceholder.domElement) {
                          this._topPlaceholder.domElement.outerHTML= `
                          <div class="${styles.app}">
                              <div class="${styles.top2}">
                                  <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(                                    
                                    responseJSON.value.toString()
                                  )}
                              </div>
                          </div>`;
                          console.log(currentWebUrl);                
                      }
                    }

                  }  
              });  
          } else {
            jsonValue.concat("11111-error");
          } 
        });        


       
    }    
  }

  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }
 
}
