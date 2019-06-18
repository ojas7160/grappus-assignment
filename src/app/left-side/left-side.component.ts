import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  navHeaders = [
    {name: 'Company', active: true},
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

  sectorData1 = [
    {show: false, active: false, icon: 'fa icon-color fa-building mr-10 mt-5', title: 'Enterprise infrastructure',
      sectorTags: [
        {name: 'Enterprise Networking'},
        {name: 'Enterprise Servers & Systems'},
        {name: 'Enterprise Storage'},
        {name: 'Application development & Integration'},
        {name: 'Cyber security'},
        {name: 'Enterprise IT Operations Management'}
      ]
    },
    {show: false, active: false, icon: 'fa icon-color fa-wrench mr-10 mt-5', title: 'Industrial Tech', sectorTags: [
      {name: '3D Printing'},
      {name: 'Auto Tech'},
      {name: 'Drones'},
      {name: 'Management Tech'},
      {name: 'Robotics'},
      {name: 'Utilities Tech'},
      {name: 'IoT - Industrial'},
      {name: 'IoT - Auto'},
      {name: 'IoT - Utilities'}
    ]},
    {show: false, active: false, icon: 'fa icon-color fa-stopwatch mr-10 mt-5', title: 'AI & analytics', sectorTags: [
      {name: 'Artificial Intelligence'},
      {name: 'Data Management & Analytics'}
    ]},
    {show: false, active: false, icon: 'fa icon-color fa-flag mr-10 mt-5', title: 'Rail & E-commerce tech', sectorTags: [
      {name: 'Retail Tech'},
      {name: 'E-commerce Tech'}
    ]},
    {show: false, active: false, icon: 'fa icon-color fa-plane mr-10 mt-5', title: 'Travel and hospitality', sectorTags: [
      {name: 'Travel Tech'},
      {name: 'Transport Tech'},
      {name: 'Hospitality Tech'}
    ]}
  ];

  sectorData2 = [
    {show: false, active: false, icon: 'fa icon-color fa-tv mr-10 mt-5', title: 'Enterprise software', sectorTags: [
      {name: 'AdTech'},
      {name: 'AR/VR'},
      {name: 'BlockChain'},
      {name: 'Digital Marketing'},
      {name: 'Financial Management Tech'},
      {name: 'Human Capital Management Tech'},
      {name: 'Sales & CRM Software'},
      {name: 'Supply Chain Management'}
    ]},
    {show: false, active: false, icon: 'fa icon-color fa-industry mr-10 mt-5', title: 'FinTech', sectorTags: [
      {name: 'Alternative Lending & Financing'},
      {name: 'Banking Tech'},
      {name: 'Capital Markets Tech'},
      {name: 'Financial Data &amp; Analytics'},
      {name: 'Insurance Tech - Auto'},
      {name: 'Insurance Tech - Life & Health'},
      {name: 'Insurance Tech - Property & Casuality'},
      {name: 'Payment & Transfer'},
      {name: 'RegTech'},
      {name: 'WealthTech'}
    ]},
    {show: false, active: false, icon: 'fa icon-color fa-globe mr-10 mt-5', title: 'Internet of Things', sectorTags: [
      {name: 'IoT - Device & Platforms'},
      {name: 'IoT - Auto'},
      {name: 'IoT - Commercial Buildings'},
      {name: 'IoT - Customer'},
      {name: 'IoT - Industrial'},
      {name: 'IoT - Smart Cities'},
      {name: 'IoT - Utilities'}
    ]},
    {show: false, active: false, icon: 'fa icon-color fa-box-open mr-10 mt-5', title: 'Other verticals', sectorTags: [
      {name: 'Education Tech'},
      {name: 'Legal Tech'},
      {name: 'Ag Tech'}
    ]}
  ];

  switchHead;
  switchTag;
  switchSector;
  switchTagData;
  activeTab = 'Company';
  constructor() { }

  ngOnInit() {
  }

  toogleActive(head) {
    this.resetHeader();
    this.switchHead = this.navHeaders.find((x) => {
      return x.name === head.name;
    });
    this.switchHead.active = true;
    this.activeTab = this.switchHead.name
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

  toogleSector(sector){
    this.resetSector();

    this.switchSector = this.sectorData1.find((x) => {
      return x.title === sector.title;
    });
    if(!this.switchSector){
      this.switchSector = this.sectorData2.find((x) => {
        return x.title === sector.title;
      });
    }
    this.switchSector.show = true;
    this.switchSector.active = false;
    console.log(this.switchSector);
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

  resetSector() {
    this.sectorData1 = [
      {show: false, active: true, icon: 'fa icon-color fa-building mr-10 mt-5', title: 'Enterprise infrastructure',
        sectorTags: [
          {name: 'Enterprise Networking'},
          {name: 'Enterprise Servers & Systems'},
          {name: 'Enterprise Storage'},
          {name: 'Application development & Integration'},
          {name: 'Cyber security'},
          {name: 'Enterprise IT Operations Management'}
        ]
      },
      {show: false, active: true, icon: 'fa icon-color fa-wrench mr-10 mt-5', title: 'Industrial Tech', sectorTags: [
        {name: '3D Printing'},
        {name: 'Auto Tech'},
        {name: 'Drones'},
        {name: 'Management Tech'},
        {name: 'Robotics'},
        {name: 'Utilities Tech'},
        {name: 'IoT - Industrial'},
        {name: 'IoT - Auto'},
        {name: 'IoT - Utilities'}
      ]},
      {show: false, active: true, icon: 'fa icon-color fa-stopwatch mr-10 mt-5', title: 'AI & analytics', sectorTags: [
        {name: 'Artificial Intelligence'},
        {name: 'Data Management & Analytics'}
      ]},
      {show: false, active: true, icon: 'fa icon-color fa-flag mr-10 mt-5', title: 'Rail & E-commerce tech', sectorTags: [
        {name: 'Retail Tech'},
        {name: 'E-commerce Tech'}
      ]},
      {show: false, active: true, icon: 'fa icon-color fa-plane mr-10 mt-5', title: 'Travel and hospitality', sectorTags: [
        {name: 'Travel Tech'},
        {name: 'Transport Tech'},
        {name: 'Hospitality Tech'}
      ]}
    ];
  
    this.sectorData2 = [
      {show: false, active: true, icon: 'fa icon-color fa-tv mr-10 mt-5', title: 'Enterprise software', sectorTags: [
        {name: 'AdTech'},
        {name: 'AR/VR'},
        {name: 'BlockChain'},
        {name: 'Digital Marketing'},
        {name: 'Financial Management Tech'},
        {name: 'Human Capital Management Tech'},
        {name: 'Sales & CRM Software'},
        {name: 'Supply Chain Management'}
      ]},
      {show: false, active: true, icon: 'fa icon-color fa-industry mr-10 mt-5', title: 'FinTech', sectorTags: [
        {name: 'Alternative Lending & Financing'},
        {name: 'Banking Tech'},
        {name: 'Capital Markets Tech'},
        {name: 'Financial Data &amp; Analytics'},
        {name: 'Insurance Tech - Auto'},
        {name: 'Insurance Tech - Life & Health'},
        {name: 'Insurance Tech - Property & Casuality'},
        {name: 'Payment & Transfer'},
        {name: 'RegTech'},
        {name: 'WealthTech'}
      ]},
      {show: false, active: true, icon: 'fa icon-color fa-globe mr-10 mt-5', title: 'Internet of Things', sectorTags: [
        {name: 'IoT - Device & Platforms'},
        {name: 'IoT - Auto'},
        {name: 'IoT - Commercial Buildings'},
        {name: 'IoT - Customer'},
        {name: 'IoT - Industrial'},
        {name: 'IoT - Smart Cities'},
        {name: 'IoT - Utilities'}
      ]},
      {show: false, active: true, icon: 'fa icon-color fa-box-open mr-10 mt-5', title: 'Other verticals', sectorTags: [
        {name: 'Education Tech'},
        {name: 'Legal Tech'},
        {name: 'Ag Tech'}
      ]}
    ];
  }

}
