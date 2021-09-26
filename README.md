# ng2-nested-search

A simple custom pipe for filtering arrays in your Angular 2 projects (works with Angular 4 and Angular 5 too) and get the count of filtered items.
It supports nested search and you may search the array of items on specific properties.

## Nested Search

![Screen Recording 2021-09-06 at 12 36 50 PM](https://user-images.githubusercontent.com/12426903/134805453-7bdec7ba-7100-45af-9113-e2c0d2884535.gif)

## Search on specific properties

![Screen Recording 2021-09-06 at 12 39 44 PM](https://user-images.githubusercontent.com/12426903/134805490-526f1476-a759-4468-810b-76d9e811d6dc.gif)

# How to use

### import FilterPipeModule to your module (here I'm lazy loading)

```
import { NgModule } from '@angular/core';
import { ViewCharacters } from './view-characters';
import { FilterPipeModule } from 'ng2-nested-search';

@NgModule({
  declarations: [
    ViewCharacters
  ],
  imports: [
    FilterPipeModule
  ],
})
export class ViewCharactersModule {}
```

### For enabling nested search, set isNestedSearch to true in the filterMetadata as shown below

```
    searchName : string = "";
    searchFamily : string = "";
    filterMetadata = { count: 0, isNestedSearch : true };

    characters = [
    {
        name : "Daenerys",
        family : "Targaryen",
        gender : "Female"
    },
    {
        name : "Jaime",
        family : "Lannister",
        gender : "Male"
    },
    {
        name : "Sansa",
        family : "Stark",
        gender : "Female"
    },
    {
        name : "Arya",
        family : "Stark",
        gender : "Female"
    },
    {
        name : "Theon",
        family : "Greyjoy",
        gender : "Male"
    }
]

```

### in HTML

```
  <div style="text-align: center;">
    <div style="display : inline-block; width : 48%">
      <input style="width: 100%; padding: 13px; border-radius: 4px; border: 1px solid #ccc;" placeholder="Search By Family" [(ngModel)]="searchFamily"/>
    </div>
    <div style="display : inline-block; width : 48%">
      <input style="width: 100%; padding: 13px; border-radius: 4px; border: 1px solid #ccc;" placeholder="Search By Name" [(ngModel)]="searchName"/>
    </div>
  </div>

  <div style="padding : 8px 4px 0px 4px;">
    <span>Total items filtered : </span>
    <span [innerHTML]="filterMetadata.count"></span>
  </div>

  <div class="ttct-request" style="border: 1px solid #ccc;padding: 8px;margin: 8px;border-radius: 4px;" *ngFor="let character of characters | ng2NestedSearch: { 'name' : searchName, 'family' : searchFamily} : filterMetadata">
    <div>
      <span style="color: #888;">Name : </span>
      <span [innerHTML]="character.name"></span>
    </div>
    <div>
      <span style="color: #888;">Family : </span>
      <span [innerHTML]="character.family"></span>
    </div>
    <div>
      <span style="color: #888;">Gender : </span>
      <span [innerHTML]="character.gender"></span>
    </div>
  </div>
```

### You may also use a single search box to filter on specific properties only, initialize the searchText and filterMetadata in your page.ts as follows 

```
searchText : string = "";
filterMetadata = { count: 0 };

```

### add the ng2-nested-search component in your page.html as follows (only filtering on name and family in the example)

```
  <div style="text-align: center;">
    <div style="display : inline-block; width : 100%">
      <input style="width: 100%; padding: 13px; border-radius: 4px; border: 1px solid #ccc;" placeholder="Search" [(ngModel)]="searchText"/>
    </div>
  </div>

  <div style="padding : 8px 4px 0px 4px;">
    <span>Total items filtered : </span>
    <span [innerHTML]="filterMetadata.count"></span>
  </div>

  <div class="ttct-request" style="border: 1px solid #ccc;padding: 8px;margin: 8px;border-radius: 4px;" *ngFor="let character of characters | ng2NestedSearch: { 'name' : searchText, 'family' : searchText} : filterMetadata">
    <div>
      <span style="color: #888;">Name : </span>
      <span [innerHTML]="character.name"></span>
    </div>
    <div>
      <span style="color: #888;">Family : </span>
      <span [innerHTML]="character.family"></span>
    </div>
    <div>
      <span style="color: #888;">Gender : </span>
      <span [innerHTML]="character.gender"></span>
    </div>
  </div>
```

### You can display the filtered elements count as follows
```
<div>
    <span>Total items filtered : </span>
    <span [innerHTML]="filterMetadata.count"></span>
</div>
```

## Contact
gmail : melwin.vincent.90@gmail.com
