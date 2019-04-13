import { Component, OnInit } from '@angular/core';

import { FaqService } from './faq.service';
import { IFaqmodel } from './Ifaqmodel';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  
  FAQsList: IFaqmodel[] = [
    {
      "Id": 1,
      "myTitle": "How do I apply?",
      "myContent": "You apply for this post from our official website."
  },
  {
      "Id": 2,
      "myTitle": "Why can't I sign in?",
      "myContent": "We have problem in serve maintanance for some period of time. Please sign in after some time"
    },
    {
      "Id": 3,
      "myTitle": "What are entry requirements?",
      "myContent": "Eligible criteria for the given posts."
    },
    {
      "Id": 4,
      "myTitle": "How do I get reference?",
      "myContent": "Get referenced by adding the multiple language support portal."
    },
    {
      "Id": 5,
      "myTitle": "How long does it take to download?",
      "myContent": "It take upto 30 miniutes for download."
    },
    {
      "Id": 6,
      "myTitle": "How much it costs?",
      "myContent": "As per the product functionality."
    },
    {
      "Id": 7,
      "myTitle": "Problem playing videos",
      "myContent": "We will resolve this issue."
    },
    {
      "Id": 8,
      "myTitle": "Search and Trend",
      "myContent": "Search is used for search user related product search and trend defined current trend in market."
    },
    {
      "Id": 9,
      "myTitle": "How can we help you?",
      "myContent": ""
    },
    {
      "Id": 10,
      "myTitle": "What should I include in my personal statement?",
      "myContent": "Your personal details."
    }
  ];
  constructor(private faqServe: FaqService) {
    
   }

  ngOnInit(): void {
    // this.faqServe.getFaqList().subscribe(
    //     questions =>this.FAQsList = questions
    // );
  }
}
