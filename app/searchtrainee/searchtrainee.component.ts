import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-searchtrainee',
  templateUrl: './searchtrainee.component.html',
  styleUrls: ['./searchtrainee.component.css']
})
export class SearchtraineeComponent implements OnInit {

  traineId : number = 0;
  trainee : Trainee = new Trainee();
 
  constructor(private service : TraineeService) { }
 
  flag : boolean =true ;

  ngOnInit(): void {
  }

  searchTrainee()
  {
    this.service.findTraineeById(this.traineId).subscribe(data=>{this.trainee=data; this.flag=true},error=> this.flag=false);
      // if(this.traineId==this.trainee.traineeId)
      // {
      //   this.flag= true;  
      // }   
      
  }


}
