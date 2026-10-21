
import { Component } from '@angular/core';

import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

import { AboutUs } from './page/about-us/about-us';
import { Education } from './page/education/education';
import { Skills } from './page/skills/skills';
import { Project } from './page/project/project';
import { ContactUs } from './page/contact-us/contact-us';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    AboutUs,
    Education,
    Skills,
    Project,
    ContactUs
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
