import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  navHeaders = [
    {name: 'Company', active: false},
    {name: 'Investor', active: false},
    {name: 'Person', active: false},
    {name: 'Sector', active: false},
    {name: 'Industry', active: false},
    {name: 'Sub-industry', active: false},
    {name: 'Region', active: false}
  ];

  tags = [
    {active: false, name: 'Profile', class: 'color-pink'},
    {active: false, name: 'Comparables', class: 'color-yellow'},
    {active: false, name: 'Strategic gaps', class: 'color-green'},
    {active: false, name: 'Potential acquires', class: 'color-red'},
    {active: false, name: 'Fast path', class: 'color-blue'},
  ];

  tagData = [
    {show: false, active: false, title: 'What are the most strategic gaps for a company across its portfolio ?', tag: this.tags[2]},
    // tslint:disable-next-line:max-line-length
    {show: false, active: false, title: 'What are the most strategic gaps for a company for a company based on benchmarking vs closest competitors ?', tag: this.tags[2]},
    {show: false, active: false, title: 'Who can potentially acquire the company ?', tag: this.tags[3]},
    {show: false, active: false, title: 'List of industry segments that a company operats in ?', tag: this.tags[0]},
    {show: false, active: false, title: 'List of public comparables for a company ?', tag: this.tags[1]},
    {show: false, active: false, title: 'What is the fast path to a company ?', tag: this.tags[4]},
  ];
  switchHead;
  switchTag;
  switchTagData;
  constructor() { }

  ngOnInit() {
  }

  toogleActive(head) {
    this.resetHeader();
    this.switchHead = this.navHeaders.find((x) => {
      return x.name === head.name;
    });
    this.switchHead.active = true;
    console.log(this.switchHead);
  }

  toogleTag(tag) {
    this.resetTags();
    this.switchTag = this.tags.find((x) => {
      return x.name === tag.name;
    });
    this.switchTag.active = true;

    this.switchTagData = this.tagData.filter((x) => {
      return x.tag.name === tag.name;
    });
    console.log(this.switchTagData);
    this.switchTagData.forEach(data => {
      data.show = false;
    });
    console.log(this.switchTag);
  }

  resetHeader() {
    this.navHeaders = [
      {name: 'Company', active: false},
      {name: 'Investor', active: false},
      {name: 'Person', active: false},
      {name: 'Sector', active: false},
      {name: 'Industry', active: false},
      {name: 'Sub-industry', active: false},
      {name: 'Region', active: false}
    ];
  }

  resetTags() {
    this.tags = [
      {active: false, name: 'Profile', class: 'color-pink'},
      {active: false, name: 'Comparables', class: 'color-yellow'},
      {active: false, name: 'Strategic gaps', class: 'color-green'},
      {active: false, name: 'Potential acquires', class: 'color-red'},
      {active: false, name: 'Fast path', class: 'color-blue'},
    ];

    this.tagData = [
      {show: true, active: false, title: 'What are the most strategic gaps for a company across its portfolio ?', tag: this.tags[2]},
      // tslint:disable-next-line:max-line-length
      {show: true, active: false, title: 'What are the most strategic gaps for a company for a company based on benchmarking vs closest competitors ?', tag: this.tags[2]},
      {show: true, active: false, title: 'Who can potentially acquire the company ?', tag: this.tags[3]},
      {show: true, active: false, title: 'List of industry segments that a company operats in ?', tag: this.tags[0]},
      {show: true, active: false, title: 'List of public comparables for a company ?', tag: this.tags[1]},
      {show: true, active: false, title: 'What is the fast path to a company ?', tag: this.tags[4]},
    ];
  }

}
