
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-cricketcreate',
  templateUrl: './cricketcreate.component.html',
  styleUrls: ['./cricketcreate.component.scss'] 
})
export class CricketerCreateComponent implements OnInit {

  cricketForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cricketForm = this.fb.group({
      cricketId: [null,[Validators.required,Validators.minLength(1)]],
      teamId: [null, [Validators.required, Validators.minLength(1)]],
      cricketerName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', Validators.required],
      nationality: ['', Validators.required],
      experince: ['', Validators.required],
      totalRuns: ['',Validators.required],
      totalWickets: ['',Validators.required]
    });
  }

  onSubmit(): void {
    if (this.cricketForm.valid) {
      this.successMessage = 'Cricket has been successfully created!';
      this.errorMessage = null;
      console.log('Cricket Created: ', this.cricketForm.value);
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

  resetForm(): void {
    this.cricketForm.reset({
    
        cricketId: null,
        teamId: null,
        cricketerName: '',
        age: '',
        nationality: '',
        experince: '',
        totalRuns: '',
        totalWickets: ''
    });
  }
}
