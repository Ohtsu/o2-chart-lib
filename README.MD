# _o2-chart-lib_ Chart Library for Angular2 by TypeScript2
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

_o2-chart-lib_ is a chart library using d3.js (version 4) for Angular2 written by TypeScript2.

"Demo Page",
<https://ohtsu.github.io/o2-chart/>

## Overview 
   - _o2-chart-lib_ is a wrapper library of d3.js (version 4) for Angular2
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

 There are two types of data:**configData**,**graphData**.
 
 - **configData**
 
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
 
 - ***Sample configData*** 

```json
		configData ={
			"className":{
				"axis":"axis",
				"axisXBorder":"axis_x",
				"axisXText":"axis-x-text",
				"bar":"bar",
				"barValue":"bar-value",
				"line":"line",
				"multiLinePrefix":"line-",
				"grid":"grid",
				"pie":"pie",
				"pieInnerTitle": "pie-inner-title",
				"pieInnerRadius":"total",
				"histogram":"histogram",
				"histogramBar":"histogram-bar",
				"treemap":"treemap",
				"treemapLabel":"treemap-label",
				"packlayout":"packlayout",
				"packlayoutLabel":"packlayout-label",
			},
			"label": {
					"display":true,
			},
			"title": {
				"display": true,
				"name":"Title",
				"className":"chart-title",
				"height":30,
				"leftMargin":-20,
				"bottomMargin":10
			},
			"maxValue":{
				"auto":true,
				"x":100,
				"y":100,
			},
			"legend": {
				"display": true,
				"position": "right",
				"totalWidth":80,
				"initXPos":5,
				"initYPos":10,
				"rectWidth":10,
				"rectHeight":10,
				"xSpacing":2,
				"ySpacing":2
			},
			"color":{
				"auto":true, // 
				"defaultColorNumber":10,
				"opacity":1.0,
				"userColors":[
					"blue",
					"red",
					"green",
					"yellow",
					"PaleGoldenrod",
					"Khaki",
					"DarkKhaki",
					"Gold",
					"Cornsilk",
					"BlanchedAlmond",
					"Bisque",
					"NavajoWhite",
					"Wheat",
					"BurlyWood",
					"Tan",
					"RosyBrown",
					"SandyBrown",
					"Goldenrod",
					"DarkGoldenrod",
					"Peru",
					"Chocolate"
				],
				"focusColor":"red",
			},
			"pie":{
				"innerRadius": {
					"percent":20,
					"title":"Total"
				},
				"value":{
					"display":true,
				},	
				"percent":{
					"display":false,
				}	
			}, 	
			"line": {
				"legend":"lineEnd",
				"interpolate" :"linear",
			},
			"grid":{
				"x":{
					"display":true,
				},
				"y":{
					"display":true,
				},
			},
			"margin":{
				"top":30,
				"left":30,
				"right":10,
				"bottom":20,
				"between":5
			},
			"axis":{
				"rotation":0,
				"borderLineWidth":1,
				"xLabel":{
					"leftMargin":0,
					"bottomMargin":5
				},
				"yLabel":{
					"leftMargin":0,
					"bottomMargin":0
				},
				
			},
			"animation":{
				"enable":true,
				"duration":4000,
			},	
		};
```


 - **graphData**

 Each chart needs its own data in Json format. 

  - ***Sample GraphData for Line*** 

```json
		lineDataJson =
		{
			"series":[
				"year",
				"sell",
			],
			"data":[
				{
					"name": "software",
					"value":[
						{
							"x":"2010",
							"y":18
						},
						{
							"x":"2011",
							"y":22
						},
						{
							"x":"2012",
							"y":30
						},
						{
							"x":"2013",
							"y":31
						},
					]
				},
				{
					"name": "hardware",
					"value":[
						{
							"x":"2010",
							"y":15
						},
						{
							"x":"2011",
							"y":16
						},
						{
							"x":"2012",
							"y":10
						},
						{
							"x":"2013",
							"y":21
						},
					]
				},
				{
					"name": "device",
					"value":[
						{
							"x":"2010",
							"y":25
						},
						{
							"x":"2011",
							"y":26
						},
						{
							"x":"2012",
							"y":30
						},
						{
							"x":"2013",
							"y":31
						},
					]
				},
				{
					"name": "others",
					"value":[
						{
							"x":"2010",
							"y":100
						},
						{
							"x":"2011",
							"y":16
						},
						{
							"x":"2012",
							"y":20
						},
						{
							"x":"2013",
							"y":41
						},
					]
				},
			],
		};

```

  - ***Visual for Line*** 


  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Line01.png" width= "640" >


  - ***Sample GraphData for Bar*** 

```json

		barDataJson =
		{
			"series":[
				"English",
				"Math"	
			],
			"data":[
				{
					"x": "suzuki",
					"y": [92,73],
				},
				{
					"x": "inoue",
					"y": [69,45],
				},
				{
					"x": "sato",
					"y": [70,100],
				},
				{
					"x": "tanaka",
					"y": [43,66],
				},
				{
					"x": "ida",
					"y": [60,70],
				},
				{
					"x": "kato",
					"y": [55,63],
				},
			],
		};


```

  - ***Visual for Bar*** 

 <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Bar01.png" width= "640" >


  - ***Sample GraphData for Pie*** 

```json
	
		pieDataJson =
		{
			"data":[
				{
					"name": "software",
					"value":30,
				},
				{
					"name": "hardware",
					"value":25
				},
				{
					"name": "device",
					"value":16
				},
				{
					"name": "others",
					"value":4
				},
			],
		};


```

  - ***Visual for Pie*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Pie01.png" width= "640" >

  - ***Sample GraphData for ScatterPlot*** 

```json
		
		scatterPlotDataJson =
		{
			"series":[
				"seriesA",
				"seriesB",
				"seriesC"	
			],
			"data":[
				{
					"name": "suzuki",
					"value":[
						{"x":30,"y":40,"r":5},   
						{"x":120,"y":115,"r":10},   
						{"x":125,"y":90,"r":2},   
						{"x":150,"y":160,"r":1},   
						{"x":150,"y":160,"r":3},   
						{"x":128,"y":215,"r":5},   
						{"x":130,"y":40,"r":15},   
						{"x":220,"y":115,"r":25},   
					]
				},
				{
					"name": "inoue",
					"value":[
						{"x":130,"y":140,"r":5},   
						{"x":20,"y":15,"r":10},   
						{"x":25,"y":190,"r":2},   
						{"x":250,"y":60,"r":1},   
						{"x":50,"y":60,"r":3},   
						{"x":28,"y":15,"r":5},   
						{"x":230,"y":140,"r":15},   
						{"x":20,"y":215,"r":25},
					]   
				},
			],
		};


```

  - ***Visual for ScatterPlot*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ScatterPlot01.png" width= "640" >


  - ***Sample GraphData for Histogram*** 

```json

		histogramDataJson =
		{
			"range":[0,100],
			"bins": [0,10,20,30,40,50,60,70,80,90,100],
			"data":[
				50,95,60,44,60,50,35,20,10,8,
				56,70,65,42,22,33,40,53,52,89,
				90,55,50,55,65,72,45,35,15,45,
				50,95,60,44,60,50,35,20,10,8,
				56,70,65,42,22,33,40,53,52,89,
				90,55,50,55,65,72,45,35,15,45,
				50,95,60,44,60,50,35,20,10,8,
				56,70,65,42,22,33,40,53,52,89,
				90,55,50,55,65,72,45,35,15,45,
			],
		};
	

```

  - ***Visual for Histogram*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >



  - ***Sample GraphData for StackBar*** 

```json

		stackBarDataJson =
		{
			"config":{
				"timeFormat":"%Y",
			},
			"series":[
				"year",
				"sell",
			],
			"data":[
				{
					"name": "software",
					"value":[
						{
							"x":"2010",
							"y":18
						},
						{
							"x":"2011",
							"y":22
						},
						{
							"x":"2012",
							"y":30
						},
						{
							"x":"2013",
							"y":31
						},
					]
				},
				{
					"name": "hardware",
					"value":[
						{
							"x":"2010",
							"y":15
						},
						{
							"x":"2011",
							"y":16
						},
						{
							"x":"2012",
							"y":10
						},
						{
							"x":"2013",
							"y":21
						},
					]
				},
				{
					"name": "device",
					"value":[
						{
							"x":"2010",
							"y":25
						},
						{
							"x":"2011",
							"y":26
						},
						{
							"x":"2012",
							"y":30
						},
						{
							"x":"2013",
							"y":31
						},
					]
				},
				{
					"name": "others",
					"value":[
						{
							"x":"2010",
							"y":5
						},
						{
							"x":"2011",
							"y":16
						},
						{
							"x":"2012",
							"y":20
						},
						{
							"x":"2013",
							"y":41
						},
					]
				},
			],
		};


```

  - ***Visual for StackBar*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/StackBar01.png" width= "640" >



  - ***Sample GraphData for GeoMap*** 

```json
	
		geoMapDataJson = 
		{
			"map":{
					"baseGeoDataUrl":"https://raw.githubusercontent.com/Ohtsu/data/master/o2-chart/world.geojson",
					"scale":75,
					"keyDataName":"features",
					"targetPropertyName":"properties.name",
			},
			"data":[
				{
					"name":"Australia",
					"color":"red"
				},
				{
					"name":"Antarctica",
					"color":"white"
				},
				{
					"name":"Japan",
					"color":"blue"
				},
			],
		};


```

  - ***Visual for GeoMap*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/GeoMap01.png" width= "640" >


  - ***Sample GraphData for GeoOrthographic*** 

```json
		geoOrthographicDataJson =
		{
			"map":{
					"baseGeoDataUrl":"https://raw.githubusercontent.com/Ohtsu/data/master/o2-chart/world.geojson",
					"keyDataName":"features",
					"targetPropertyName":"properties.name",
					"scale":160,
					"colorNumber":10,
					"rotate":{
						"horizontal":210,
						"vertical":5
					},
					"clipAngle":90,
					"oceanColor":"navy",
					"antarcticaColor":"white",
			},
			"data":[
				{
					"name":"Australia",
					"color":"red"
				},
				{
					"name":"Antarctica",
					"color":"white"
				},
				{
					"name":"Japan",
					"color":"teal"
				},
			]
		}


```

  - ***Visual for GeoOrthographic*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/GeoOrthographic01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >


  - ***Sample GraphData for *** 

```json


```

  - ***Visual for *** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >









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
   - Angular2     : 2.0.0
   - TypeScript   : 2.0.2
   - d3.js        : 4.4.0



## Reference

- "データビジュアライゼーションのためのD3.js徹底入門 Webで魅せるグラフ&チャートの作り方",2014/6/6,by 古籏 一浩, 
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-4-7973-6886-4&rh=i%3Aaps%2Ck%3AISBN978-4-7973-6886-4>

- "D3.js by Example",2015/12/29,by Michael Heydt
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78528-008-5&rh=i%3Aaps%2Ck%3AISBN978-1-78528-008-5>

- "Mastering D3.js",2014/8/25,by Pablo Navarro,
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78328-627-0&rh=i%3Aaps%2Ck%3AISBN978-1-78328-627-0>

- "Data Visualization With D3 and Angularjs",2015/4/27,by Christoph Korner,
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78439-848-4&rh=i%3Aaps%2Ck%3AISBN978-1-78439-848-4>

- "Mastering TypeScript",2015/4/23,by Nathan Rozentals,
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78439-966-5&rh=i%3Aaps%2Ck%3AISBN978-1-78439-966-5>

- "D3 Tips and Tricks v4.x",by Malcolm Maclean,Leanpub,
<https://leanpub.com/d3-t-and-t-v4/read>


## Change Log

 - 2016.12.5 version 0.1 uploaded 

## Copyright

copyright 2016 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](ohtsu@digipub-net.com)
