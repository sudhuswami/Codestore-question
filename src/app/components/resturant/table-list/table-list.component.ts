import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  title: string = 'List of Table ';
  tablelists: any[] = [{
    "id": 1,
    "name": "Table1",
    "capacity": 2,
    "time": "3am"
  },
  {
    "id": 2,
    "name": "Table2",
    "capacity": 3,
    "time": "5am"
  },
  {
    "id": 3,
    "name": "Table3",
    "capacity": 4,
    "time": "7am"
  },
  {
    "id": 5,
    "name": "Table4",
    "capacity": 5,
    "time": "9am"
  },
  {
    "id": 6,
    "name": "Table5",
    "capacity": 6,
    "time": "10am"
  },
  {
    "id": 7,
    "name": "Table7",
    "capacity": 8,
    "time": "11am"
  }, {
    "id": 8,
    "name": "Table8",
    "capacity": 10,
    "time": "6am"
  },]

  searchText: any;
  constructor() { }

  ngOnInit(): void {
  }

}
