import { Component, OnInit } from '@angular/core';
import { TokenInformationService } from '../services/token-information.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   *
   */
  constructor(
    public tokenInformationServices: TokenInformationService
  ) {}

  ngOnInit() {
    window.addEventListener('message', (event) => {
      console.log('Message origin in SPA:', event.origin);
      if (event.origin !== 'http://localhost:50817') {
        return;
      }

      const message = event.data;
      console.log('Message received in SPA:', message);
      this.processMessage(message);
    });
  }

  processMessage(message: any) {
    switch (message.type) {
      case 'INIT_DATA':
        this.initData(message.data);
        break;
      default:
        console.warn('Mensaje desconocido recibido:', message);
    }
  }

  initData(data: any) {
    if (data) {
      this.tokenInformationServices.setToken(data)
      console.log('Datos iniciales recibidos en SPA:', data);
    } else {
      console.error('No se encontraron datos iniciales.');
    }
  }


  requestBackend(data: any) {
    window.parent.postMessage({ type: 'REQUEST_BACKEND', data: data }, 'http://localhost:50817');
  }
}
