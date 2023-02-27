import { Injectable } from '@angular/core';
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from '@ngrx/data';
@Injectable()
export class CustomurlHttpGenerator extends DefaultHttpUrlGenerator {
  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
  }
 
  protected override getResourceUrls(
    entityName: string,
    root: string,
    trailingSlashEndpoints?: boolean
  ): HttpResourceUrls {
    let resourceURLs = this.knownHttpResourceUrls[entityName];
    if (entityName == 'Cake') {
      resourceURLs = {
        collectionResourceUrl: 'https://angular3nypwa-yihv--3000.local-credentialless.webcontainer.io/cakes/',
        entityResourceUrl: 'https://angular3nypwa-yihv--3000.local-credentialless.webcontainer.io/cakes/',
      };
      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }
    return resourceURLs;
  }
}