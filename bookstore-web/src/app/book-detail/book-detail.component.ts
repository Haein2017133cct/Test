import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
//added router to import with activated route for delete
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

book: any = {};// added router for delete fuction
constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id) {
  this.http.delete('/book/'+id)
    .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      }
    );
}

}
