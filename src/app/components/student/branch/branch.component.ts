import { Component, OnInit } from '@angular/core';
import { BranchServicesService } from './branch-services.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branchList: any;


  constructor(private branchService: BranchServicesService) { }


  ngOnInit(): void {

    this.branchService.getBranches().subscribe( data => { this.branchList = data},
      err => {err.alert("Not able to fetch Branches")});
      
    }




  }



