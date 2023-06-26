import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
/* //部分导入
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  RadarController,
  LineElement,
  PointElement,RadialLinearScale 
} from 'chart.js'

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  RadarController,
  LineElement,
  PointElement, RadialLinearScale 
); */

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ctx = document.getElementById('myChart');
    const data = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [ undefined, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 27, 100, 10],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };
    new Chart(ctx as any, {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Radar Chart',
          }
        },
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
            /* angleLines: {
              color: 'red'
            } */
            ticks: {
              maxTicksLimit: 5,
              count: 5
            }
          }
        }
      },
    });
  }

}
