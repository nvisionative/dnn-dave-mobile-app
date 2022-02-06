import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { throwError } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {


    constructor(
      private alertController: AlertController
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + user?.accessToken ) });
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        request = request.clone({ url: request.url });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // do nothing for now
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                const status =  error.status;
                const reason = error && error.message ? error.message : '';

                if ([401].indexOf(status) !== -1) {
                    // If 401 Unauthorized response returned from API, auto logout
                }

                // this.presentAlert(status, reason);
                return throwError(error);
            })
        );
    }

  async presentAlert(status, reason) {
      const alert = await this.alertController.create({
          header: status + ' Error',
          message: reason,
          buttons: ['OK']
      });

      await alert.present();
  }
}
