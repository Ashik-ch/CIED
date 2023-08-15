import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  /**Languages for Help */
  languages = [
    { name: 'Hindi', image: 'https://cdn.countryflags.com/thumbs/india/flag-400.png' },
    { name: 'English', image: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png' },
    { name: 'Arabic', image: 'https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png' },
    { name: 'French', image: 'https://cdn.countryflags.com/thumbs/france/flag-400.png' }
  ];
  defaultLanguage = { name: 'English', image: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png' };

  constructor(private route: Router) { }

  Login() {
    this.route.navigateByUrl('/dashboard')
  }

}


