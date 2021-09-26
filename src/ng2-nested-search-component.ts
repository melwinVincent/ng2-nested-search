import { NgModule, ModuleWithProviders } from '@angular/core';
import { FilterPipe } from './components/ng2-nested-search-component';

@NgModule({
    imports: [
    ],
    declarations: [
        FilterPipe
    ],
    exports: [
        FilterPipe
    ]
})
export class FilterPipeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FilterPipeModule,
        };
    }
}