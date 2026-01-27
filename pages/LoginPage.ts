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
    this.emailInput = this.page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.loginButton = this.page.getByRole('button', { name: 'Login' })
    this.rememberMeCheckbox = this.page.getByRole('checkbox', { name: 'Remember me' })
    this.forgotPasswordLink = this.page.getByRole('link', { name: 'Forgot Password?' })
  }

  //action methods

  //Navigate to Login Page
  async navigateToLoginPage() {
    await this.page.goto('/login');
  }

  //Login Method
    async login(email:string, password:string) {
    this.emailInput.fill(email);
    this.passwordInput.fill(password);
    this.loginButton.click();
  }
}
////test