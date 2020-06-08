import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
  clients: string[] = ['EP', 'JetBlue','Citrix'];

  getProjects():ProjectData[]{
    return [
      new ProjectData({client:'EP',project:'Dataservices', sprintId:'2020.02.R1.S01',velocity:46, capacityUtilization:92, defectLekage :2, sprintBurndownReport:100,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Sandeep', sprintId:'2020.02.R1.S01',velocity:12, capacityUtilization:100, defectLekage :1, sprintBurndownReport:90,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Michelle', sprintId:'2020.02.R1.S01',velocity:8, capacityUtilization:90, defectLekage :0, sprintBurndownReport:95,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Nilesh', sprintId:'2020.02.R1.S01',velocity:9, capacityUtilization:86, defectLekage :0, sprintBurndownReport:85,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Syed', sprintId:'2020.02.R1.S01',velocity:9, capacityUtilization:95, defectLekage :1, sprintBurndownReport:80,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Alam', sprintId:'2020.02.R1.S01',velocity:8, capacityUtilization:89, defectLekage :0, sprintBurndownReport:75,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'SmartStart', sprintId:'2020.02.R1.S01',velocity:36, capacityUtilization:80, defectLekage :0, sprintBurndownReport:80,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Vamsi', sprintId:'2020.02.R1.S01',velocity:11, capacityUtilization:95, defectLekage :0, sprintBurndownReport:70,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Vijay', sprintId:'2020.02.R1.S01',velocity:10, capacityUtilization:70, defectLekage :0, sprintBurndownReport:75,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Mohammad', sprintId:'2020.02.R1.S01',velocity:7, capacityUtilization:75, defectLekage :0, sprintBurndownReport:75,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Amit', sprintId:'2020.02.R1.S01',velocity:8, capacityUtilization:80, defectLekage :0, sprintBurndownReport:55,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'IPS', sprintId:'2020.02.R1.S01',velocity:23, capacityUtilization:60, defectLekage :1, sprintBurndownReport:60,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Parsuram', sprintId:'2020.02.R1.S01',velocity:8, capacityUtilization:60, defectLekage :0, sprintBurndownReport:55,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Briyan', sprintId:'2020.02.R1.S01',velocity:6, capacityUtilization:50, defectLekage :1, sprintBurndownReport:50,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Myron', sprintId:'2020.02.R1.S01',velocity:9, capacityUtilization:70, defectLekage :0, sprintBurndownReport:65,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'PSG', sprintId:'2020.02.R1.S01',velocity:40, capacityUtilization:70, defectLekage :3, sprintBurndownReport:70,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Krishna', sprintId:'2020.02.R1.S01',velocity:13, capacityUtilization:70, defectLekage :0, sprintBurndownReport:62,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Prabhu', sprintId:'2020.02.R1.S01',velocity:11, capacityUtilization:50, defectLekage :2, sprintBurndownReport:68,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'EP',project:'Sandeep', sprintId:'2020.02.R1.S01',velocity:16, capacityUtilization:90, defectLekage :1, sprintBurndownReport:65,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Citrix',project:'VM', sprintId:'2020.02.R1.S01',velocity:40, capacityUtilization:70, defectLekage :3, sprintBurndownReport:70,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Citrix',project:'', sprintId:'2020.02.R1.S01',velocity:13, capacityUtilization:70, defectLekage :0, sprintBurndownReport:62,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Citrix',project:'', sprintId:'2020.02.R1.S01',velocity:11, capacityUtilization:50, defectLekage :2, sprintBurndownReport:65,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Citrix',project:'AnyConnect', sprintId:'2020.02.R1.S01',velocity:40, capacityUtilization:70, defectLekage :3, sprintBurndownReport:70,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Citrix',project:'', sprintId:'2020.02.R1.S01',velocity:13, capacityUtilization:70, defectLekage :0, sprintBurndownReport:62,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Citrix',project:'', sprintId:'2020.02.R1.S01',velocity:11, capacityUtilization:50, defectLekage :2, sprintBurndownReport:68,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Citrix',project:'', sprintId:'2020.02.R1.S01',velocity:16, capacityUtilization:90, defectLekage :1, sprintBurndownReport:65,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Jetblue',project:'Project', sprintId:'2020.02.R1.S01',velocity:40, capacityUtilization:70, defectLekage :3, sprintBurndownReport:70,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Jetblue',project:'', sprintId:'2020.02.R1.S01',velocity:13, capacityUtilization:70, defectLekage :0, sprintBurndownReport:62,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42}),
new ProjectData({client:'Jetblue',project:'', sprintId:'2020.02.R1.S01',velocity:11, capacityUtilization:50, defectLekage :2, sprintBurndownReport:68,resourceName:'Sandeep', workItemAge: 7, releaseSprint: 42})






      // new ProjectData({client:"EP", project:"Dataservices", resourceName:"Sandeep", sprintId:"2020.04.R2.S1", capacityUtilization: 80, releaseSprint: 42, velocity: 80, defectLekage :1, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"EP", project:"Dataservices", resourceName:"Syed", sprintId:"2020.04.R2.S1", capacityUtilization: 60, releaseSprint: 42, velocity: 80, defectLekage :1, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"EP", project:"Dataservices", resourceName:"Neelesh", sprintId:"2020.04.R2.S1", capacityUtilization: 80, releaseSprint: 42, velocity: 80, defectLekage :1, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"EP", project:"Dataservices", resourceName:"Michelle", sprintId:"2020.04.R2.S1", capacityUtilization:70, releaseSprint: 42, velocity: 80, defectLekage :1, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"EP", project:"Dataservices", resourceName:"Srinadh", sprintId:"2020.04.R2.S1", capacityUtilization: 70, releaseSprint: 42, velocity: 80, defectLekage :1, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"EP", project:"Smartstart", resourceName:"Krishna", sprintId:"2020.02.R2.S3", capacityUtilization: 80, releaseSprint: 42, velocity: 80, defectLekage :0, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"EP", project:"Smartstart", resourceName:"Vamsi", sprintId:"2020.02.R2.S3", capacityUtilization: 72, releaseSprint: 42, velocity: 80, defectLekage :0, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"EP", project:"Smartstart", resourceName:"Rajesh", sprintId:"2020.02.R2.S3", capacityUtilization: 80, releaseSprint: 42, velocity: 80, defectLekage :0, sprintBurndownReport: 14, workItemAge: 7}),

      // new ProjectData({client:"JetBlue", project:"Airways", resourceName:"Nagarjuna", sprintId:"2020.04.R1.S1", capacityUtilization: 120, releaseSprint: 42, velocity: 80, defectLekage :2, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"JetBlue", project:"Airways", resourceName:"Yagna", sprintId:"2020.04.R1.S1", capacityUtilization: 120, releaseSprint: 42, velocity: 80, defectLekage :2, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"JetBlue", project:"Airways", resourceName:"Keerthi", sprintId:"2020.04.R1.S1", capacityUtilization: 114, releaseSprint: 42, velocity: 80, defectLekage :2, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"JetBlue", project:"Airways", resourceName:"Joe", sprintId:"2020.04.R1.S1", capacityUtilization: 120, releaseSprint: 42, velocity: 80, defectLekage :2, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"JetBlue", project:"Airways", resourceName:"Michelle", sprintId:"2020.04.R1.S1", capacityUtilization: 120, releaseSprint: 42, velocity: 80, defectLekage :2, sprintBurndownReport: 14, workItemAge: 7}),
      // new ProjectData({client:"Citrix", project:"Project1", resourceName:"Nick", sprintId:"2019.12.R1.S5", capacityUtilization: 120, releaseSprint: 42, velocity: 80, defectLekage :0, sprintBurndownReport: 14, workItemAge: 7}),
    ];
  }
 
}

export class ProjectData {
  client: string;
  project: string;
  resourceName: string;
  sprintId: string;
  capacityUtilization: number;
  releaseSprint: number;
  velocity: number;
  defectLekage: number;
  sprintBurndownReport: number;
  workItemAge: number;

  /**
   *
   */
  constructor(options?:
    {
      client: string;
      project: string;
      resourceName: string;
      sprintId: string;
      capacityUtilization: number;
      releaseSprint: number;
      velocity: number;
      defectLekage: number;
      sprintBurndownReport: number;
      workItemAge: number;
    }) {
    this.client = options.client;
    this.project = options.project;
    this.resourceName = options.resourceName;
    this.sprintId = options.sprintId;
    this.capacityUtilization = options.capacityUtilization;
    this.releaseSprint = options.releaseSprint;
    this.velocity = options.velocity;
    this.defectLekage = options.defectLekage;
    this.sprintBurndownReport = options.sprintBurndownReport;
    this.workItemAge = options.workItemAge;
  }
}