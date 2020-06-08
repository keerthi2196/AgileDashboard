import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public applicationService: ApplicationService) { }
  clients1: string[] = ['EP', 'JetBlue','Citrix'];
  selectedClient:string;
  selectedClient1:string;
  selectedProject: string;
  selectedProject1: string;

  getProjects():string[]{
    if(this.selectedClient == 'JetBlue')
      return ['Project'];
    else if(this.selectedClient == 'Citrix')
       return ['AnyConnect'];
    else if(this.selectedClient == 'EP')
       return ['Dataservices','SmartStart','IPS','PSG'];
    else
      return [];
  }
  onClientSearch():void{
    this.selectedProject1 = this.selectedProject;
    this.selectedClient1 = this.selectedClient;
  }


  velocityChartLabels = [
    'Sprint01',
    'Sprint02',
    'Sprint03',
    'Sprint04',
    'Sprint05',
    'Sprint06',
    'Sprint07'
  ];

  velocityChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Accepted During Iteration' },
    { data: [50, 69, 70, 60, 46, 45, 10], label: 'Accepted After Iteration' },
    { data: [28, 48, 40, 19, 46, 27, 38], label: 'Not Accepted' }
  ];
  defectsChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Low' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Normal' },
    { data: [50, 69, 70, 60, 46, 45, 10], label: 'High Attention' },
    { data: [28, 48, 40, 19, 46, 27, 38], label: 'Resolve Immediately' }
  ];
  defectsStateChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Submitted' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Open' },
    { data: [50, 69, 70, 60, 46, 45, 10], label: 'Fixed' },
    { data: [50, 69, 70, 60, 46, 45, 10], label: 'Known Issue' },
    { data: [28, 48, 40, 19, 46, 27, 38], label: 'Closed' }
  ];
  throughputChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Defects' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Stories' }
  ];

  clients = [{
    "name": "EP",
    "project":"Dataservices",
    "data": {
      "throughputChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Defects' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Stories' }
      ],
      "defectsStateChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Submitted' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Open' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'Fixed' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'Known Issue' },
        { data: [28, 48, 40, 19, 46, 27, 38], label: 'Closed' }
      ],
      "defectsChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Low' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Normal' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'High Attention' },
        { data: [28, 48, 40, 19, 46, 27, 38], label: 'Resolve Immediately' }
      ],
      "velocityChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Accepted During Iteration' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'Accepted After Iteration' },
        { data: [28, 48, 40, 19, 46, 27, 38], label: 'Not Accepted' }
      ]
    }
  },
  {
    "name": "EP",
    "project":"SmartStart",
    "data": {
      "throughputChartData": [
        { data: [65, 59, 60, 81, 76, 15, 40], label: 'Defects' },
        { data: [65, 59, 56, 41, 56, 55, 10], label: 'Stories' }
      ],
      "defectsStateChartData": [
        { data: [55, 29, 20, 11, 86, 65, 50], label: 'Submitted' },
        { data: [15, 59, 80, 31, 76, 25, 40], label: 'Open' },
        { data: [40, 49, 30, 30, 36, 25, 30], label: 'Fixed' },
        { data: [50, 69, 40, 60, 46, 15, 50], label: 'Known Issue' },
        { data: [68, 38, 40, 29, 16, 27, 28], label: 'Closed' }
      ],
      "defectsChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Low' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Normal' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'High Attention' },
        { data: [28, 48, 40, 19, 46, 27, 38], label: 'Resolve Immediately' }
      ],
      "velocityChartData": [
        { data: [35, 69, 50, 21, 36, 35, 20], label: 'Accepted During Iteration' },
        { data: [40, 49, 30, 40, 66, 55, 30], label: 'Accepted After Iteration' },
        { data: [68, 38, 80, 39, 76, 47, 48], label: 'Not Accepted' }
      ]
    }
  },
  {
    "name": "EP",
    "project":"IPS",
    "data": {
      "throughputChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Defects' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Stories' }
      ],
      "defectsStateChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Submitted' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Open' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'Fixed' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'Known Issue' },
        { data: [28, 48, 40, 19, 46, 27, 38], label: 'Closed' }
      ],
      "defectsChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Low' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Normal' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'High Attention' },
        { data: [28, 48, 40, 19, 46, 27, 38], label: 'Resolve Immediately' }
      ],
      "velocityChartData": [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Accepted During Iteration' },
        { data: [50, 69, 70, 60, 46, 45, 10], label: 'Accepted After Iteration' },
        { data: [28, 48, 40, 19, 46, 27, 38], label: 'Not Accepted' }
      ]
    }
  },
  {
    "name": "EP",
    "project":"PSG",
    "data": {
      "throughputChartData": [
        { data: [65, 69, 60, 61, 76, 25, 30], label: 'Defects' },
        { data: [35, 39, 80, 71, 46, 35, 20], label: 'Stories' }
      ],
      "defectsStateChartData": [
        { data: [65, 29, 40, 31, 36, 25, 30], label: 'Submitted' },
        { data: [65, 39, 50, 41, 46, 25, 50], label: 'Open' },
        { data: [50, 39, 50, 50, 66, 35, 60], label: 'Fixed' },
        { data: [50, 39, 60, 40, 66, 35, 50], label: 'Known Issue' },
        { data: [28, 48, 20, 39, 36, 47, 28], label: 'Closed' }
      ],
      "defectsChartData": [
        { data: [65, 59, 80, 81, 36, 55, 20], label: 'Low' },
        { data: [65, 59, 80, 31, 36, 55, 30], label: 'Normal' },
        { data: [50, 69, 70, 40, 86, 45, 10], label: 'High Attention' },
        { data: [28, 48, 40, 59, 66, 27, 28], label: 'Resolve Immediately' }
      ],
      "velocityChartData": [
        { data: [65, 59, 40, 41, 16, 55, 20], label: 'Accepted During Iteration' },
        { data: [50, 39, 80, 30, 46, 45, 10], label: 'Accepted After Iteration' },
        { data: [28, 28, 20, 29, 36, 27, 28], label: 'Not Accepted' }
      ]
    }
  },
  {
    "name": "JetBlue",
    "project":"Project",
    "data": {
      "throughputChartData": [
        { data: [54, 34, 54, 78, 65, 43, 54], label: 'Defects' },
        { data: [45, 44, 54, 65, 87, 55, 30], label: 'Stories' }
      ],
      "defectsStateChartData": [
        { data: [65, 59, 76, 76, 46, 54, 30], label: 'Submitted' },
        { data: [65, 59, 34, 54, 34, 76, 43], label: 'Open' },
        { data: [50, 54, 65, 65, 47, 87, 23], label: 'Fixed' },
        { data: [50, 43, 34, 43, 65, 43, 13], label: 'Known Issue' },
        { data: [28, 48, 40, 19, 46, 33, 34], label: 'Closed' }
      ],
      "defectsChartData": [
        { data: [65, 76, 43, 43, 65, 65, 34], label: 'Low' },
        { data: [43, 43, 45, 43, 75, 54, 23], label: 'Normal' },
        { data: [34, 43, 54, 76, 65, 34, 32], label: 'High Attention' },
        { data: [13, 12, 12, 23, 23, 34, 43], label: 'Resolve Immediately' }
      ],
      "velocityChartData": [
        { data: [76, 45, 54, 54, 43, 33, 10], label: 'Accepted During Iteration' },
        { data: [34, 34, 45, 23, 43, 54, 34], label: 'Accepted After Iteration' },
        { data: [65, 55, 34, 65, 54, 34, 15], label: 'Not Accepted' }
      ]
    }
  },
  {
    "name": "Citrix",
    "project":"AnyConnect",
    "data": {
      "throughputChartData": [
        { data: [23, 54, 44, 36, 78, 54, 54], label: 'Defects' },
        { data: [76, 76, 76, 65, 23, 23, 89], label: 'Stories' }
      ],
      "defectsStateChartData": [
        { data: [65, 76, 76, 45, 54, 23, 43], label: 'Submitted' },
        { data: [54, 67, 34, 34, 54, 43, 75], label: 'Open' },
        { data: [43, 75, 65, 54, 54, 65, 76], label: 'Fixed' },
        { data: [65, 76, 78, 56, 43, 12, 54], label: 'Known Issue' },
        { data: [34, 35, 65, 65, 54, 54, 28], label: 'Closed' }
      ],
      "defectsChartData": [
        { data: [65, 43, 84, 53, 43, 66, 30], label: 'Low' },
        { data: [56, 23, 43, 23, 23, 43, 43], label: 'Normal' },
        { data: [34, 65, 65, 87, 54, 43, 11], label: 'High Attention' },
        { data: [10, 32, 40, 42, 23, 54, 43], label: 'Resolve Immediately' }
      ],
      "velocityChartData": [
        { data: [50, 53, 54, 89, 43, 53, 32], label: 'Accepted During Iteration' },
        { data: [54, 76, 45, 54, 54, 32, 30], label: 'Accepted After Iteration' },
        { data: [76, 65, 45, 54, 54, 32, 43], label: 'Not Accepted' }
      ]
    }
  }
];

getMetricData(metricType):any{
  if(this.selectedClient != undefined && this.selectedClient != ''){
    if(metricType == 'defectsChartData')
    return this.clients.filter(it => (it.name == this.selectedClient1 && it.project == this.selectedProject1))[0].data.defectsChartData;
  else if(metricType == 'defectsStateChartData')
    return this.clients.filter(it => it.name == this.selectedClient1 && it.project == this.selectedProject1)[0].data.defectsStateChartData;
  else if(metricType == 'throughputChartData')
    return this.clients.filter(it => it.name == this.selectedClient1 && it.project == this.selectedProject1)[0].data.throughputChartData;
  else if(metricType == 'velocityChartData')
    return this.clients.filter(it => it.name == this.selectedClient1 && it.project == this.selectedProject1)[0].data.velocityChartData;
  }
}
  ngOnInit() {
    
   }
}
