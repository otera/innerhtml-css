import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.scss"]
})
export class HeadComponent implements OnInit {
  private routerSubscription: Subscription;
  title: string = "";

  constructor(private router: Router) {
    this.routerSubscription = router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.titleSet(val.url);
      }
    });
  }

  titleSet(value: string) {
    this.title = `Test<br class="br-sp">(Test)`;
  }

  ngOnInit() {}
}
