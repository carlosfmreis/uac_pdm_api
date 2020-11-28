import { Component, OnDestroy } from '@angular/core';
import { CatFactsService } from '../../services/cat-facts.service';
import { Subscription } from 'rxjs';
import { Fact } from '../../models/fact.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  facts: Fact[];
  isButtonDisabled: boolean = false;
  private factsSubscription: Subscription;

  constructor(private catFactsService: CatFactsService) {}

  ngOnDestroy(): void {
    this.factsSubscription.unsubscribe();
  }

  canShowButton(): boolean {
    return !this.facts;
  }

  onBtnLoadFactsClick(): void {
    this.isButtonDisabled = true;
    this.factsSubscription = this.catFactsService
      .getCatFacts()
      .subscribe((apiData) => {
        this.facts = apiData.all;
        this.isButtonDisabled = false;
      });
  }
}
