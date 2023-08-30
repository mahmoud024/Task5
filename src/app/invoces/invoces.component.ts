import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from "../interfaces/card";
import {CardsService} from "../services/cards.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-invoces',
  templateUrl: './invoces.component.html',
  styleUrls: ['./invoces.component.css']
})
export class InvocesComponent implements OnInit, OnDestroy {

  constructor(private gs: CardsService) {
  }


// Get Data
  Arraycards: Card[] = [];

  cardObservable: Subscription;

  ngOnInit() {
    this.cardObservable = this.gs.getAllCard().subscribe(data => {
      this.Arraycards = data.map(element => {
        return {
          id: element.payload.doc.id,//.substring(0, 5)
          ClientName: element.payload.doc.data()['ClientName'],
          price: element.payload.doc.data()['price'],
          InvoiceDate: element.payload.doc.data()['InvoiceDate'],
          isPaid: element.payload.doc.data()['isPaid'],
          StreetAddress: element.payload.doc.data()['StreetAddress'],
          City: element.payload.doc.data()['City'],
          PostCode: element.payload.doc.data()['PostCode'],
          Country: element.payload.doc.data()['Country'],
          ClientEmail: element.payload.doc.data()['ClientEmail'],
          ClientStreetAddress: element.payload.doc.data()['ClientStreetAddress'],
          ClientPostCode: element.payload.doc.data()['ClientPostCode'],
          ClientCountry: element.payload.doc.data()['ClientCountry'],
          ClientCity: element.payload.doc.data()['ClientCity'],
          PaymentTerm: element.payload.doc.data()['PaymentTerm'],
          ProjectDescription: element.payload.doc.data()['ProjectDescription'],
          ItemName: element.payload.doc.data()['ItemName'],
          Qty: element.payload.doc.data()['Qty'],
          Total: element.payload.doc.data()['Total'],
        }
      })
    })
  }

  ngOnDestroy(): void {
    this.cardObservable.unsubscribe();
  }


}
