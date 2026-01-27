import { LoginPage } from "../pages/LoginPage";
import { test, expect} from "@playwright/test";
import { TestConfig } from "../testdata/test.config.ts";
import { RandomeDataUtil } from "../utils/randomDataGenerator.ts";



test.beforeEach(async ({page})=>
{
  await page.goto('/login');
});
/*test.afterEach(async ({page})=>
{
  await page.close();
});
*/
test.describe("@Master - Admin Login Tests", ()=>
{
  const testConfig = new TestConfig();

  test("Admin can login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    
    await loginPage.login(testConfig.adminEmail, testConfig.adminPassword);
  });
});
