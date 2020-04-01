import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

    constructor(private viewContainerRef: ViewContainerRef,
        private cfr: ComponentFactoryResolver, private router: Router) { }

    ngOnInit(): void {

    }

    async lazyLoadContact() {
        console.log('contactUs');   
        this.router.navigateByUrl('/contactUs');

        //console.log('ContactUsComponent');
        //this.viewContainerRef.clear();
        //const { ContactUsComponent } = await import('../contact-us/contact-us.component');
        //this.viewContainerRef.createComponent(
        //    this.cfr.resolveComponentFactory(ContactUsComponent)
        //);

    }
}
