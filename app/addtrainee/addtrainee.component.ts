import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addtrainee',
  templateUrl: './addtrainee.component.html',
  styleUrls: ['./addtrainee.component.css']
})
export class AddtraineeComponent implements OnInit {

  trainee : Trainee = new Trainee();
  temp : Trainee = new Trainee();
  constructor(private service : TraineeService , private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  addTrainee()
  {
    console.log(this.trainee);
    this.service.addTrainee(this.trainee).subscribe(data=>this.temp=data);
    this.list();
  }

  list(){
    this.router.navigate(['view']);
  }

}
