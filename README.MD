# _o2-chart-lib_ Chart Library for Angular2 by TypeScript2
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

"o2-chart-lib" is a chart library using d3.js (version 4) for Angular2 written by TypeScript2.

"Demo Page",
<https://ohtsu.github.io/o2-chart/>

## Overview 
   - "o2-chart" is a wrapper library of d3.js (version 4) for Angular2
   - 12 main charts are supported

    (Line,Bar,Pie,ScatterPlot,Histogram,Stack Bar, Geo Map, Geo Orthographic, Tree, Pack Layout, Choropleth,Force)
    
   - Axis

    You can include axis automatically by the configuration file.
   
   - Legend 

    You can include legend automatically by the configuration file.

   - Animation

    You can animate such charts as Bar, Pie, Histogram, Stack Bar,Geo Orthographic and Pack Layout charts by the configuration file.

## Prerequisite

   - node.js
   - Typescript2
   - Angular2


## Installation

To install this library, run:

```bash
$ npm install o2-chart-lib --save
```


## Chart Data

 There are two types of data:"configData","graphData".
 
 - configData
 
 This is a common setting data of all charts. In this file, you can set info as follows.
 
 -Class name defined by "html" file
 
 -Title Name
 
 -Legend (display or not, position, size)
 
 -Color (Auto color number: 10 or 20, Opacity) 
 
 -Line (interpolate)
 
 -Grid (display or not, position, size)

 -Animation (enable or not, duration)
 
 -Margin (top, left, right,bottom,between)
 
 -Axis (left margin, bottom mergin)
 
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/DisplayLayout01.png" width= "640" >
 
 - graphData

 Each chart needs its own data in Json format. You can understand the format easily by referencing to the Json Data. For example, if you want to know Line chart data format, please refer to "this.lineDataJson" in app.components.ts.



## Consuming this library

You can import o2-chart-lib library in any Angular application by running:

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its component in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<!-- You need specify chart type,config data, graph data,width and height as follows -->
<o2-chart [chartType]="barTypeName" [configData]="configData"  [graphData]="barDataJson" [svgWidth]="'600'" [svgHeight]="'400'"></o2-chart>
```

## Version

   - o2-chart-lib : 0.1
   - Angular2   : 2.0.0
   - TypeScript : 2.0.2
   - d3.js      : 4.4.0


## License

MIT © [Shuichi Ohtsu](ohtsu@digipub-net.com)
