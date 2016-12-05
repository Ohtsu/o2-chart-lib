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

  - ***GraphData for Line*** 

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
