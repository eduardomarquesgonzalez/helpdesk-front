import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');
    if (token) {
      //para clonar o campo headers e set para adicionar o Bearer+space + 'token'
      const cloneRequisition = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)});
      return next.handle(cloneRequisition);
    }else{

    }
    return next.handle(request);
  }
}

// declarar no povider em 'app.modules.ts'

export const AuthInteceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}]

