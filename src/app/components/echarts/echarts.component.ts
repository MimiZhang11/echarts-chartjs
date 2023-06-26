import { Component, OnInit } from '@angular/core';

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponentOption,
  LegendComponentOption
} from 'echarts/components';
import { RadarChart, RadarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  RadarChart,
  CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
  TitleComponentOption | LegendComponentOption | RadarSeriesOption
>;

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.css']
})
export class EchartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chartDom = document.getElementById('main')!;
    //let myChart = echarts.init(chartDom);
    //初始化时黑色theme
    let myChart = echarts.init(chartDom, 'dark');
    let option: EChartsOption;
    if (false) {
      option = {
        title: {
            text: '暂无数据',
            textStyle: {
              fontSize: 20,
              fontWeight: 'normal',
            }
          }
      }
    } else{
      option  = {
        title: {
          text: 'echarts',
          /* left: 'center', */
        },
        //鼠标移上去的tooltip
        tooltip: {
          formatter: () => {
            return '56%'
          }
        },
        legend: {
          data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          //放大放小
          //radius: 80,
          indicator: [
            { name: 'Sales', max: 100, axisLabel: {show: true, } },
            { name: 'Administration', max: 100 },
            { name: 'Information Technology', max: 100 },
            { name: 'Customer Support', max: 100 },
            { name: 'Development', max: 100 },
            { name: 'Marketing', max: 100 },
          ],
          splitArea: {
            show: false
          },
          splitNumber: 4,
          axisName: {
            fontStyle: "normal",
            fontWeight: "normal",
            //color: "rgba(18, 16, 16, 1)",
            fontSize: 14
          },
        },
        series: [
          {
            name: 'Allocated Budget',
            type: 'radar',
            data: [
              {
                value: [25, null as any,  45, 78, 80, 85],
                
                //区域背景色
                areaStyle: {
                  color: 'rgb(142, 164, 233, 0.6)'
                }
              },
            ]
          },
          {
            name: 'Actual Spending',
            type: 'radar',
            data: [
              {
                value: [ 56, 32, 67, 87, 100],
                name: 'Actual Spending',
                 //区域背景色
                 areaStyle: {
                  color: 'rgb(186, 243, 159, 0.6)'
                }
              },
            ]
          }
        ]
      }; 
    }
    
    
    option && myChart.setOption(option);
  }

}
