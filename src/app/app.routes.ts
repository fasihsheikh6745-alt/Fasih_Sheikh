import { Routes } from '@angular/router';

import { AboutUs } from './page/about-us/about-us';
import { Education } from './page/education/education';
import { Skills } from './page/skills/skills';
import { Project } from './page/project/project';
import { ContactUs } from './page/contact-us/contact-us';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: AboutUs, title: 'Home | Fasih Shahzad' },
  { path: 'about', component: AboutUs, title: 'About | Fasih Shahzad' },
  { path: 'education', component: Education, title: 'Education | Fasih Shahzad' },
  { path: 'skills', component: Skills, title: 'Skills | Fasih Shahzad' },
  { path: 'projects', component: Project, title: 'Projects | Fasih Shahzad' },
  { path: 'contact', component: ContactUs, title: 'Contact | Fasih Shahzad' },
  { path: '**', redirectTo: 'home' }
];
