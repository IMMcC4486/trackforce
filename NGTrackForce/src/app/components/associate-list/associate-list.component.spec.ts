import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssociateListComponent} from './associate-list.component';
import {AssociateService} from '../../services/associate-service/associate.service';
import {ClientService} from '../../services/client-service/client.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {AssociateSearchByTextFilter} from '../../pipes/associate-search-by-text-filter/associate-search-by-text-filter.pipes';
import {NavbarComponent} from '../navbar/navbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from '../home/home.component';
import {ChartsModule} from 'ng2-charts';
import {AuthenticationService} from '../../services/authentication-service/authentication.service';
import {RequestService} from '../../services/request-service/request.service';
import {User} from '../../models/user.model';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


describe('AssociateListComponent', () => {
  let component: AssociateListComponent;
  let fixture: ComponentFixture<AssociateListComponent>;
  const testAuthService: AuthenticationService = new AuthenticationService(null, null, null);

  // setup service mocks
   beforeAll(() => {
    let user: User;
    user.token = "mockToken";
    user.username = "mockUser";
    user.role = 1;
    spyOn(testAuthService, 'getUser').and.returnValue(user);  // needed by navbar
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AssociateListComponent,
        AssociateSearchByTextFilter,
        NavbarComponent,
        HomeComponent,
        NavbarComponent
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule,
        ChartsModule
      ],
      providers: [
        AssociateService,
        ClientService,
        RequestService,
        {provide: AuthenticationService, useValue: testAuthService}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(AssociateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD
  it('getAllAssociates should return all associates', () => {
    expect(component.associates).toBeGreaterThanOrEqual(0);
    expect(component.associates.toString).toContain("Cameron");
    expect(component.associates.toString).toContain("Skaggs");
  });

  it('getClientNames should return the names of all the clients', () => {
    expect(component.clients.toString).toContain("Charter Communications");
    expect(component.clients.toString).toContain("Choice Hotels");
    expect(component.clients.toString).not.toContain("A Fake Client");
  });

  it('sort() should sort the list into numerical order', () => {
    //expect(component.associates.pop).toBeLessThan(component.associates.pop);
  });

  it('updateAssociates() should result in updated associates', () => {
    // Unsure how to programmatically check this
  })
=======
>>>>>>> dev1804-2
});
