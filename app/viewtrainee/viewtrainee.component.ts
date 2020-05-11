import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-viewtrainee',
  templateUrl: './viewtrainee.component.html',
  styleUrls: ['./viewtrainee.component.css']
})
export class ViewtraineeComponent implements OnInit {

  arr : Trainee [] =[];
  sarr : Trainee [] = [];
  trainee : Trainee = new Trainee();
  temp : Trainee = new Trainee();
  flag: boolean = false;

  constructor(private service : TraineeService)
  {
    //service.getAllTrainees().subscribe( data =>this.arr=data);
    service.getAllTrainees().subscribe( data =>{this.arr = data.body;console.log(data);
    })
  }
  update(trainee : Trainee)
  {
         this.trainee = trainee;
         this.flag = true;
  }
  updateTraineeById()
  {
    console.log(this.trainee);
    this.service.updateTraineeById(this.trainee).subscribe(data=>this.temp=data);
        this.flag = false ;
        this.service.getAllTrainees().subscribe( data => this.arr=data.body);
  }
  delete(traineeId : number)
  {
    this.service.deleteTraineeById(traineeId).subscribe(data=>this.trainee=data);
    //this.service.getAllTrainees().subscribe( data => this.arr=data);
    this.service.getAllTrainees().subscribe( data => this.arr=data.body);
  }

  ngOnInit(): void {
  }

}
