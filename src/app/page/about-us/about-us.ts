import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-about-us',
  styleUrl: './about-us.css',
  templateUrl: './about-us.html',
})
export class AboutUs implements OnInit, OnDestroy {
  typedName = '';

  constructor(private readonly cdr: ChangeDetectorRef) {}
  private typingTimer?: ReturnType<typeof setInterval>;
  private readonly fullName = 'Fasih Shahzad';

  ngOnInit(): void {
    let index = 0;
    this.typingTimer = setInterval(() => {
      if (index < this.fullName.length) {
        this.typedName += this.fullName[index++];
        // Explicitly refresh the view so typing works in zoneless Angular setups.
        this.cdr.detectChanges();
      } else {
        if (this.typingTimer) clearInterval(this.typingTimer);
      }
    }, 115);
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearInterval(this.typingTimer);
  }
}
