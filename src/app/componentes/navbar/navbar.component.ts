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
    this.imagen = 'https://scontent.fmdz11-1.fna.fbcdn.net/v/t39.30808-6/310373582_495586489245996_7176748967072740212_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9t83YESjxvyjiukm-sRDNPlHv1SiToAM-Ue_VKJOgA_FACKyddOTcdqcAr3puWig&_nc_ohc=JV_kM_Yy3uoAX88NoV1&_nc_ht=scontent.fmdz11-1.fna&oh=00_AfDvS-vUR8rWPsleSc2zeQ_MUuqNXUWm5a3nXBVfhc7TnA&oe=64907852';

  }

}
