import { Component } from '@angular/core';
import { ChartItem } from 'chart.js/dist/types/index';
import { Chart, registerables} from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  chartColors = {
    belzonte: '#1D967A',
    rioDeJaneiro: '#38ABD2',
    saoPaulo: '#6C50C2',
  };

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createBarGraph();
    this.createHorizontalBarGraph();
    this.createPieGraph();
    this.createBarGraph2();
  }  

  createBarGraph(){
    const ctx = document.getElementById('myChart') as ChartItem; 
    if(ctx){
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Produto 1', 'Produto 1', 'Produto 1', 'Produto 1', 'Produto 1'],
          datasets: [{
            label: '',
            data: [142, 82, 71, 31, 103],
            borderColor: '4px',
            borderRadius: 5,
            backgroundColor: '#17987A',
          }]
        },
        options: {
          scales: {
            y: {
              display: false,
              grid: {
                display: false,
              }
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  family: 'Poppins',
                    size: 15,
                    weight: 'bold',
                }
              }
            }
          },
          plugins:{
            legend: {
              display: false,
            }  
          }
        }
      });
    }
  }

  createHorizontalBarGraph(){
    const ctx = document.getElementById('myChart2') as ChartItem; 
    if(ctx){
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Produto 1', 'Produto 1', 'Produto 1', 'Produto 1', 'Produto 1'],
          datasets: [{
            label: '',
            data: [142, 82, 71, 31, 103],
            borderColor: '4px',
            borderRadius: 8,
            backgroundColor: '#8ED363',
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  family: 'Poppins',
                    size: 15,
                    weight: 'bold',
                }
              }
            },
            x: {
              display: false,
              grid: {
                display: false,
              }
            }
          },
          plugins:{
            legend: {
              display: false,
            }
          }
        }
      });
    }
  }

  createPieGraph(){
    const ctx = document.getElementById('myChart3') as ChartItem; 
    if(ctx){
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Belo Horizonte', 'Rio de Janeiro', 'São Paulo'],
          datasets: [{
            label: '',
            data: [60, 30, 60],
            backgroundColor: Object.values(this.chartColors),
          }]
        },
        options: {
          scales: {
            y: {
              display: false,
              grid: {
                display: false,
              }
            },
            x: {
              display: false,
              grid: {
                display: false,
              }
            }
          },
          plugins:{
            legend: {
              display: true,
              position: 'right',
              labels: {
                font: {
                  family: 'Poppins',
                    size: 14,
                    weight: 'bold',
                }
              }
            }
          }
        }
      });
    }
  }
  createBarGraph2(){
    const ctx = document.getElementById('myChart4') as ChartItem; 
    if(ctx){
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels:  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          datasets: [{
            label: '',
            data: [142, 82, 71, 31, 103,142, 82, 71, 31, 103,29,34],
            borderColor: '4px',
            borderRadius: 5,
            backgroundColor: '#270F42',
          }]
        },
        options: {
          scales: {
            y: {
              display: false,
              grid: {
                display: false,
              }
            },
            x: {
              grid: {
                display: false,
              }, 
              ticks: {
                font: {
                  family: 'Poppins',
                    size: 15,
                    weight: 'bold',
                }
              }
            }
          },
          plugins:{
            legend: {
              display: false,
            }
          }
        }
      });
    }
  }
}
