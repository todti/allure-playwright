const {test} = require("@playwright/test");
const allure = require("allure-js-commons");

test.beforeAll(async () => {
    await allure.attachment('test key outside step beforeAll 123', 'test value', 'application/json');
    await allure.step('i am beforeAll', async () => {
        await allure.attachment('test key beforeAll', 'test value', 'application/json');
        await allure.step('i am beforeAll step 2', async () => {
            await allure.attachment('test key beforeAll step2 jasdjdjds', 'test value', 'application/json');
        })
    });
});

test("sample test", async () => {
    await allure.links(...[{url: "https://example.org"}]);
    await allure.owner("John Doe");
    await allure.issue("JIRA-2", "https://example.org");
    await allure.step("step 1", async () => {
        await allure.attachment('attach in step 1', 'test value', 'application/json');
    });
    await allure.step("step 2", async () => {
        await allure.attachment('attach in step 2', 'test value', 'application/json');
    });


    await allure.attachment('i am just attachment in test', 'test value', 'application/json');
});
test.afterAll(async () => {
    await allure.attachment('test key afterall outside step', 'test value', 'application/json');
    await allure.step('i am afterAll', async () => {
        await allure.attachment('test key afterall', 'test value', 'application/json');
    });
});
