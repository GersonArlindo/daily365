import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInformationService {
  public uid: any
  public name: any
  public rol_id: any
  public rol_name: any
  public tenant_id: any
  public email: any
  public password: any
  public sales_rep_id: any
  public rep_id: any
  public id_flowspot: any
  public isUserInstaller_Id: any[] = []

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  setToken(token: string) {
    const payload = this.decodeToken(token);
    this.uid = payload?.uid || null;
    this.name = payload?.name || null;
    this.rol_id = payload?.rol_id || null;
    this.rol_name = payload?.rol_name || null;
    this.tenant_id = payload?.tenant_id || null;
    this.email = payload?.email || null;
    this.password = payload?.password || null;
    this.sales_rep_id = payload?.sales_rep_id || null;
    this.rep_id = payload?.rep_id || null;
    this.id_flowspot = payload?.id_flowspot || null;
    this.isUserInstaller_Id = payload?.isUserInstaller_Id || null;
    console.log(payload)
  }

  private decodeToken(token: string): any {
    try {
      let payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }
}
