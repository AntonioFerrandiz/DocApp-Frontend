import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) {
    this.register = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      identityDocument: ['', [Validators.required, Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPassword })
  }

  ngOnInit(): void { }
  registerUser(): void {
    const user: User = {
      firstName: this.register.value.firstname,
      lastName: this.register.value.lastname,
      userName: this.register.value.username,
      identityDocument: this.register.value.identityDocument,
      email: this.register.value.email,
      password: this.register.value.password,
    }
    this.userService.saveUser(user).subscribe(data => {
      console.log(data);
    }, error => {
      this.toastr.error(error.error.message, 'Error');
      // console.log(error.error.message);
    })
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
