import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    describe('boundary', () => {
        it('should create the app', () => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });

        it(`should have as title 'Angular Routing Assignment'`, () => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app.title).toEqual('Angular Routing Assignment');
        });

        it('should render title in a h1 tag', () => {
            const fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('Angular Routing Assignment');
        });

        it('should have a router outlet', () => {
            const fixture = TestBed.createComponent(AppComponent);
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('router-outlet')).not.toBeNull();
        });

        it('should have navigation links', () => {
            const fixture = TestBed.createComponent(AppComponent);
            const compiled = fixture.debugElement.nativeElement;
            const navLinks = compiled.querySelectorAll('nav ul li a');
            expect(navLinks.length).toEqual(2);
            expect(navLinks[0].getAttribute('routerLink')).toEqual('/');
            expect(navLinks[1].getAttribute('routerLink')).toEqual('/about');
        });
    });
});
