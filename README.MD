# o2-chart-lib

## Installation

To install this library, run:

```bash
$ npm install o2-chart-lib --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install o2-chart-lib
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { O2ChartComponent,ChartConst } from 'o2-chart-lib';


@NgModule({
  declarations: [
    O2ChartComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    O2ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<!-- You need specify chart type,config data, graph data,width and height as follows -->
<o2-chart [chartType]="barTypeName" [configData]="configData"  [graphData]="barDataJson" [svgWidth]="'600'" [svgHeight]="'400'"></o2-chart>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Shuichi Ohtsu](ohtsu@digipub-net.com)
