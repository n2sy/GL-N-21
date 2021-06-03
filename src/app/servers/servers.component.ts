import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  tabServers = [
    {
      nom: 'production server',
      type: 'small',
      startDate: new Date(),
      status: 'stable',
    },
    {
      nom: 'Testing Server',
      type: 'medium',
      startDate: new Date(),
      status: 'critical',
    },
    {
      nom: 'Development Server',
      type: 'small',
      startDate: new Date(),
      status: 'stable',
    },
    {
      nom: 'Nidhal Server',
      type: 'large',
      startDate: new Date(),
      status: 'offline',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  changeClass(serv) {
    return {
      'list-group-item-success': serv.status == 'stable',
      'list-group-item-danger': serv.status == 'critical',
      'list-group-item-warning': serv.status == 'offline',
    };
  }
}
