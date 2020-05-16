import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
  getProjects():ProjectData[]{
    return [
      new ProjectData({client:"Test Client1", project:"Suscipit Nonummy Ltd", subproject:"Ante Dictum Consulting", sprintId:"2020.04.R1.S1", capacityUtilization: 23, releaseSprint: 43, velocity: 12, defectLekage :13, sprintBurndownReport: 14, workItemAge: 15}),
      new ProjectData({client:"Test Client2",project:"Diam Duis Mi Limited", subproject:"Suscipit Nonummy Ltd", sprintId:"2020.04.R1.S1", capacityUtilization: 43, releaseSprint: 34, velocity: 12, defectLekage :13, sprintBurndownReport: 14, workItemAge: 15}),
      new ProjectData({client:"Test Client3",project:"Non Corp.", subproject:"Velit Aliquam LLP", sprintId:"2020.04.R1.S1", capacityUtilization: 54, releaseSprint: 10, velocity: 12, defectLekage :13, sprintBurndownReport: 14, workItemAge: 15}),
      new ProjectData({client:"Test Client4",project:"Vestibulum Neque Ltd", subproject:"Sapien Molestie Corporation", sprintId:"2020.04.R1.S1", capacityUtilization: 65, releaseSprint: 12, velocity: 12, defectLekage :13, sprintBurndownReport: 14, workItemAge: 15}),
      new ProjectData({client:"Test Client5",project:"Lorem Corp.", subproject:"Suscipit Nonummy Ltd", sprintId:"2020.04.R1.S1",  capacityUtilization: 76, releaseSprint: 12, velocity: 12, defectLekage :13, sprintBurndownReport: 14, workItemAge: 15})
    ];
  }
 
}

export class ProjectData {
  client: string;
  project: string;
  subproject: string;
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
      subproject: string;
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
    this.subproject = options.subproject;
    this.sprintId = options.sprintId;
    this.capacityUtilization = options.capacityUtilization;
    this.releaseSprint = options.releaseSprint;
    this.velocity = options.velocity;
    this.defectLekage = options.defectLekage;
    this.sprintBurndownReport = options.sprintBurndownReport;
    this.workItemAge = options.workItemAge;
  }
}