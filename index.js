const puppeteer=require('puppeteer');

//Web Scrapper Using puppeteer:

(async()=>{
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto("https://jsonplaceholder.typicode.com/");
    await page.screenshot({path:"jsonplaceholderweb.jpg"});

    //Grabbing the Content from Page:
    const grabParagraph=await page.evaluate(()=>{
        const pgTag=document.querySelector(".classname or htmltag or id");
        return pgTag.innerText;//Or You can Use innerHTML as well
    })
    //Displaying the grabbed Paragraph:
    console.log(grabParagraph);




    //Grabbing multiple paragraphs:
    const grabParas=await page.evaluate(()=>{
        const parastags=document.querySelectorAll('.classname here or id or tag');
        let paras=[]
        parastags.forEach((tag)=>{
            paras.push(tag.innerText);
        })
        return paras;
    })
    console.log(paras);//Displaying Paras


    //Clicking on a attribute using puppeteer:
    await page.click('a[href="/loginpage"]');

    //Typing in a inputTag using ID:
    await page.type("#idname","put the text to type here");

    await browser.close();
})();


