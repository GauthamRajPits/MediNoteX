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
 readonly otpInput1: Locator;
 readonly otpInput2: Locator;
 readonly otpInput3: Locator;
 readonly otpInput4: Locator;
 readonly verifyOtpButton: Locator;
 readonly EnterCodeManuallyButton: Locator;


 //constructor
  constructor(page: Page) 
  {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me' })
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password?' })
    this.otpInput1 = page.locator('div.code-inputs').locator('input').nth(0);
    this.otpInput2 = page.locator('div.code-inputs').locator('input').nth(1);
    this.otpInput3 = page.locator('div.code-inputs').locator('input').nth(2);
    this.otpInput4 = page.locator('div.code-inputs').locator('input').nth(3);
    this.verifyOtpButton = page.getByRole('button', { name: 'Verify OTP' });
    this.EnterCodeManuallyButton = page.getByRole('button', { name: 'Enter code manually' });
  }


  //action methods

  //Navigate to Login Page
  async navigateToLoginPage() {
    await this.page.goto('/login');
  }

  //Login Action
    async login(email:string, password:string) {
    
    await this.emailInput.fill(email);
   
    await this.passwordInput.fill(password);
    
    await this.loginButton.click();
    
  }

  //OTP Verification
  async verifyOtp()
  {
      const testConfig = new TestConfig();
      await this.EnterCodeManuallyButton.click();

      await this.otpInput1.fill(testConfig.defaultOTP.charAt(0));
      await this.otpInput2.fill(testConfig.defaultOTP.charAt(1));
      await this.otpInput3.fill(testConfig.defaultOTP.charAt(2));
      await this.otpInput4.fill(testConfig.defaultOTP.charAt(3));

      await this.verifyOtpButton.click();
      
  }
}
