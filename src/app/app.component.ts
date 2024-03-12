import { Component, ViewEncapsulation } from '@angular/core';
import {
  Dimension,
  Measure,
  PivotGridAxis,
  averageAggregate,
  maxAggregate,
  minAggregate,
  sumAggregate,
} from '@progress/kendo-angular-pivotgrid';
import { FilterDescriptor } from '@progress/kendo-data-query';
import { data } from './data';

@Component({
  selector: 'my-app',
  template: `
        <kendo-pivotgrid
            [kendoPivotLocalBinding]="data"
            [filter] = "defaultFilter"
            [dimensions]="dimensions"
            [measures]="measures"
            [rowAxes]="defaultRowAxes"
            [columnAxes]="defaultColumnAxes"
            [measureAxes]="defaultMeasureAxes"
            [configurator]="true"
        > </kendo-pivotgrid>
    `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
        .k-pivotgrid-row-headers table.k-pivotgrid-table {
            table-layout: auto;
        }
    `,
  ],
})
export class AppComponent {
  public data: any[] = data;

  public dimensions: { [key: string]: Dimension } = {
    PIN: {
      caption: 'PIN',
      displayValue: (item) => item.PIN,
      sortValue: (displayValue: string) => displayValue,
    },
    AsmtId: {
      caption: 'AsmtId',
      displayValue: (item) => item.AsmtId,
      sortValue: (displayValue: string) => displayValue,
    },
    TaxYear: {
      caption: 'TaxYear',
      displayValue: (item) => item.TaxYear,
      sortValue: (displayValue: string) => displayValue,
    },
    Attribute1Formatted: {
      caption: 'Attribute1Formatted',
      displayValue: (item) => item.Attribute1Formatted,
      sortValue: (displayValue: string) => displayValue,
    },
    RollCaste: {
      caption: 'RollCaste',
      displayValue: (item) => item.RollCaste,
      sortValue: (displayValue: string) => displayValue,
    },
  };

  public measures: Measure[] = [
    {
      name: 'Total',
      value: (item: any): number => item.ValueAmount,
      aggregate: sumAggregate,
    },
    {
      name: 'Max',
      value: (item: any): number => item.ValueAmount,
      aggregate: maxAggregate,
    },
    {
      name: 'Min',
      value: (item: any): number => item.ValueAmount,
      aggregate: minAggregate,
    },
    {
      name: 'Average',
      value: (item: any): number => item.ValueAmount,
      aggregate: averageAggregate,
    },
  ];

  public defaultMeasureAxes: PivotGridAxis[] = [{ name: ['Total'] }];

  public defaultRowAxes: PivotGridAxis[] = [
    { name: ['PIN'], expand: true },
    { name: ['RollCaste'], expand: true },
    //{ name: ['Attribute1Formatted'], expand: true },
  ];

  public defaultColumnAxes: PivotGridAxis[] = [
    { name: ['TaxYear'], expand: true },
    { name: ['AsmtId'] },
  ];

  public defaultFilter: FilterDescriptor[] = [
    {
      field: 'PIN',
      operator: 'eq',
      value: 52414500,
    },
  ];
}
