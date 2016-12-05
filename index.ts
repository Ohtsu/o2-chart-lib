import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {O2ChartComponent} from './src/o2chart/o2chart.component';
import {ChartConst} from './src/o2chart/shared/chart-const';


export * from './src/o2chart/o2chart.component';
export * from './src/o2chart/shared/chart-const';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChartConst,
    O2ChartComponent
  ],
  exports: [
    O2ChartComponent
  ]
})
export default class O2ChartModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: O2ChartModule,
      providers: []
    };
  }
}
