import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('error');
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('error1');
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getStudent(id: string): Observable<any> {
    const url = `${apiUrl}/student/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getFaculty(id: string): Observable<any> {
    const url = `${apiUrl}/faculty/${id}`;
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  ValidateStudent(uname: string, upwd: string): Observable<any> {
    const url = `${apiUrl}/student/${uname}/${upwd}`;
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  ValidateFaculty(uname: string, upwd: string): Observable<any> {
    const url = `${apiUrl}/faculty/${uname}/${upwd}`;
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }

  postStudent(data): Observable<any> {
    const url = `${apiUrl}/student`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  postFaculty(data): Observable<any> {
    const url = `${apiUrl}/faculty`;
    return this.http.post(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }

  updateStudent(id: string, data): Observable<any> {
    const url = `${apiUrl}/student/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateFaculty(id: string, data): Observable<any> {
    const url = `${apiUrl}/faculty/${id}`;
    return this.http.put(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }

  deleteStudent(id: string): Observable<{}> {
    const url = `${apiUrl}/student/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteFaculty(id: string): Observable<{}> {
    const url = `${apiUrl}/faculty/${id}`;
    return this.http.delete(url, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }


  postCourse(data): Observable<any> {
    const url = `${apiUrl}/course`;
    return this.http.post(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }
  getCourse(id: string): Observable<any> {
    const url = `${apiUrl}/course/${id}`;
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getCourses(): Observable<any> {
    const url = `${apiUrl}/course`;
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getFacultyCourse(fid: string): Observable<any> {
    const url = `${apiUrl}/facultycourse/${fid}`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getFacultyCourses(): Observable<any> {
    const url = `${apiUrl}/facultycourse`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }

  getStudentCourse(fcid: string): Observable<any> {
    const url = `${apiUrl}/studentcourse/${fcid}`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getStudentCourseExists(fcid: string,sid:string): Observable<any> {
    const url = `${apiUrl}/studentcourse/${fcid}/${sid}`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getFacultyCourseQuestions(fcid: string): Observable<any> {
    const url = `${apiUrl}/facultycoursequestions/${fcid}`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getFacultyQuestionsLevel(fcid:string,fc: string,fct:string): Observable<any> {
    const url = `${apiUrl}/facultycoursequestions/${fcid}/${fc}/${fct}`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getDescriptive(fcid:string): Observable<any> {
    const url = `${apiUrl}/descriptivequestions/${fcid}`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getMultiple(fcid:string): Observable<any> {
    const url = `${apiUrl}/multiplequestions/${fcid}`;
    console.log(url);
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  postFacultyCourse(data): Observable<any> {
    const url = `${apiUrl}/facultycourse`;
    return this.http.post(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }
  postStudentCourse(data): Observable<any> {
    const url = `${apiUrl}/studentcourse`;
    return this.http.post(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }
  postFacultyCourseQuestions(data): Observable<any> {
    const url = `${apiUrl}/facultycoursequestions`;
    return this.http.post(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }
  postDescriptiveQuestions(data): Observable<any> {
    const url = `${apiUrl}/descriptivequestions`;
    return this.http.post(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }
  postMultipleQuestions(data): Observable<any> {
    const url = `${apiUrl}/multiplequestions`;
    return this.http.post(url, data, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }
}
