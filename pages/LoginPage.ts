import { Page,expect,Locator } from "@playwright/test";
import {TestConfig} from "../testdata/test.config.ts";

export class LoginPage {
//Locators
 private page: Page;
 readonly emailInput: Locator;
 readonly passwordInput: Locator;
 readonly loginButton: Locator;
 readonly rememberMeCheckbox: Locator;
 readonly forgotPasswordLink: Locator;


 //constructor
  constructor(page: Page) 
  {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me' })
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password?' })
  }

  //action methods

  //Navigate to Login Page
  async navigateToLoginPage() {
    await this.page.goto('/login');
  }

  //Login Method
    async login(email:string, password:string) {
    //this.emailInput.click();
    await this.emailInput.fill(email);
    //await this.page.waitForTimeout(3000);
    await this.passwordInput.fill(password);
    //await this.page.waitForTimeout(3000);
    await this.loginButton.click();
    
  }
}
////test