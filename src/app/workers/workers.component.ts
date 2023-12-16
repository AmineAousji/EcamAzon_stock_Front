import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Worker, WorkerService} from '../worker.service'

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {
  worker = new Worker();

  constructor(private workerService: WorkerService, private router: Router) {}

  WorkerLogin( name : string, password : string){
    this.worker.name = name;
    this.worker.password = password;
    console.log(name);
    console.log(password);

    this.workerService.check(this.worker).subscribe(
      data => {
      if (data){
        this.worker = data
        this.workerService.login(this.worker).subscribe(data =>{
          console.log(data.token);
          localStorage.setItem('token', data.token);
          console.log(localStorage)
          this.router.navigate(['parcels/list'])
        })
      }else {
        console.log("user not found");
      }
    })
  }


}
