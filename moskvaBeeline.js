require("chromedriver");
const wd = require("selenium-webdriver");
const {Builder, Key, By, until} = wd;
const assert = require("assert");

//let costInputs = await driver.findElement(By.xpath("input[@inputmode = 'numeric']"));
//let costSort = await driver.findElement(By.xpath("div[contains(@class,'InlineSet_doubleSpacing')] / div[.//span[text()='Цене']]"));
//let name = await driver.findElements(By.xpath("div[contains(@class,'ProductCard_headerMobile')]"));
//let cost = await driver.findElement(By.xpath("div[contains(@class,'component styles')]//div[contains(text(),'₽')]"));
//let buttonBuy = await driver.findElements(By.xpath("button[contains(@class,'BuyButtonLayout_button')]"));
//await buttonBuy.click();
//let cross = await driver.findElement(By.xpath("svg[contains(@class,'modify-link-after')]"));
//await cross.click();
//let textarea = await driver.findElement(By.xpath("div[contains(@class,'shop-basket-item-service-note')]"));
//let away = await driver.findElement(By.xpath("span[@data-ng-click='restoreItem(item)']"))





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
        let tel = await driver.findElement(By.xpath("//a[contains(@class,'DevicesMenu_component') and contains(@href,'telefony')]"));
        await tel.click();
        let title = await driver.getTitle();
        assert.equal(title, "Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва");
    });

    it("Показать всех производителей", async()=>{
        let maker = await driver.findElement(By.xpath("//div[contains(@class,'FiltersWidget_container')] / div[.//span[text()='Производитель']]"));
        let showAll = await maker.findElement(By.xpath("div[./span[text()='Показать все']]"));
        await showAll.click();
        await driver.sleep(1000);
    });  
    
    it("Показать телефоны Nokia", async()=>{  //Meizu среди производителей отсутствует
        let nokiaCheckbox = await driver.findElement(By.xpath("//input[@type='checkbox' and contains(@id,'nokia')]"));
        await nokiaCheckbox.click();
        await driver.sleep(5000);
        let title = await driver.findElement(By.xpath("//h1")).getText();
        assert.equal(title, "Смартфоны производитель Nokia");
    });     

    after(() => {
        driver.quit();

    });
});

