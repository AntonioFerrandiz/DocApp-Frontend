import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private fb: FormBuilder,
            private toastr: ToastrService,
            private router: Router,
            private loginService: LoginService) {
              this.login = this.fb.group({
                username: ['', Validators.required],
                identityDocument: ['', [Validators.required, Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
                password: ['', Validators.required]
              })
             }

  ngOnInit(): void {}
  log(): void{
    console.log(this.login);
    const user: User = {
      userName: this.login.value.username,
      password: this.login.value.password,
      identityDocument: this.login.value.identityDocument,
      email: '', lastName: '', firstName: ''
    }
    this.loginService.login(user).subscribe(data =>{
      console.log(data);
      this.loginService.setLocalStorage(data.token);
      this.router.navigate(['/dashboard'])
      this.toastr.info('Session successfully logged in','Hello!');
    }, error =>{
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    })
  }
}
