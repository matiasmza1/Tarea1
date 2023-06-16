import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  titulo: string;
  imagen: string;

  constructor(){
    this.titulo = 'INCUYO';
    this.imagen = 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/310373582_495586489245996_7176748967072740212_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rDWZeLg0cToAX-wDsIS&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfDaKHyPS2FmX0KAd6envp3OiEJWXhkBRBI1aveLBTlTNA&oe=64869512';

  }

}
