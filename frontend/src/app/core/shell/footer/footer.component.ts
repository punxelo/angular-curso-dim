import { Component, OnInit } from '@angular/core';
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faEnvelopeOpen = faEnvelopeOpen;
  faWhatsapp = faWhatsapp;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
