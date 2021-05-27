import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  tabServers = [
    {
      nom: 'Production Server',
      type: 'small',
      startDate: Date(),
      status: 'stable',
    },
    {
      nom: 'Testing Server',
      type: 'medium',
      startDate: Date(),
      status: 'stable',
    },
    {
      nom: 'Development Server',
      type: 'small',
      startDate: Date(),
      status: 'stable',
    },
    {
      nom: 'Nidhal Server',
      type: 'large',
      startDate: Date(),
      status: 'stable',
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
