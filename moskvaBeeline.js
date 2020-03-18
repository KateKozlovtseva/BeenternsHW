require("chromedriver");
const wd = require("selenium-webdriver");
const {Builder, Key, By, until} = wd;
const assert = require("assert");

//let costInputs = await driver.findElement(By.xpath("//input[@inputmode = 'numeric']"));
//let name = await driver.findElements(By.xpath("//div[contains(@class,'ProductCard_headerMobile')]"));
//let cost = await driver.findElement(By.xpath("//div[contains(@class,'component styles')]//div[contains(text(),'₽')]"));
//let textarea = await driver.findElement(By.xpath("//div[contains(@class,'shop-basket-item-service-note')]"));






describe("checkout Google", () => {
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });

    it("Открытие страницы магазина", async()=>{
        await driver.get("https://moskva.beeline.ru/shop/");
        let title = await driver.getTitle();
        assert(title, "Интернет-магазин Билайн Москва - продажа сотовых телефонов, смартфонов и аксессуаров");    
        });

    it("Перейти на страницу телефоны", async()=>{
        await driver.findElement(By.xpath("//a[contains(@class,'DevicesMenu_component') and contains(@href,'telefony')]")).click();
        let title = await driver.getTitle();
        assert.equal(title, "Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва");
    });

    it("Показать всех производителей", async()=>{
        await driver.wait(until.elementLocated(By.xpath("//div[./span[text()='Производитель']]/following-sibling::*[contains(@class,'ShowAllButton')]")), 10000).click();
        //let maker = await driver.findElement(By.xpath("//div[contains(@class,'FiltersWidget_container')] / div[.//span[text()='Производитель']]"));
        //await maker.findElement(By.xpath("div[./span[text()='Показать все']]")).click();
    });  
    
    it("Показать телефоны Nokia", async()=>{  //Meizu среди производителей отсутствует
        await driver.wait(until.elementLocated(By.xpath("//input[@type='checkbox' and contains(@id,'nokia')]")),10000).click();
        const title = await driver.findElement(By.xpath("//h1"));
        await driver.wait(until.elementTextIs(title, 'Смартфоны производитель Nokia'), 10000);
    }); 
    
    it("Отсортировать телефоны по цене", async()=>{ 
        await driver.findElement(By.xpath("//div[contains(@class,'FilterTabs_clickable')]")).click();
        const costSortactive = await driver.wait(until.elementLocated(By.xpath("//div[contains(@class,'FilterTabs_active') and contains(@class,'FilterTabs_clickable')]")),10000).getText();
        assert.equal(costSortactive,"Цене");
    });
    
   it("Купить телефон из списка", async()=>{ 
        await driver.sleep(1000);
        const buttonBuy = await driver.wait(until.elementLocated(By.xpath("(//button[contains(@class,'BuyButtonLayout_button')])[7]")),10000);
        await driver.wait(until.elementIsEnabled(buttonBuy)).click();
        const goBack = await driver.wait(until.elementLocated(By.xpath("//a[@onclick='QA.Beeline.PageHistory.GoPrevious();']")),10000).getText();
        assert.equal(goBack, "Вернуться в магазин");
    });

  it("Удалить телефон из корзины", async()=>{ 
        await driver.wait(until.elementLocated(By.xpath("//*[local-name()='svg' and contains(@class,'modify-link-after')]")),10000).click();
        const restore = await driver.wait(until.elementLocated(By.xpath("//span[@data-ng-click='restoreItem(item)']")),10000).getText();
        assert.equal(restore, "Восстановить");
    });

   it("Восстановить удаленный элемент", async()=>{ 
        await driver.findElement(By.xpath("//span[@data-ng-click='restoreItem(item)']")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[local-name()='svg' and contains(@class,'modify-link-after')]")),10000);
    });

    after(() => {
        driver.quit();

    });
});

