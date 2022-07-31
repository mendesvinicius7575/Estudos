const { request, response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/', async (request, response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://covid-19.campinas.sp.gov.br/');

        const pageContent = await page.evaluate(() => {
        return{
            subtitle: document.querySelector('.numero').innerHTML
        };
    });


    await browser.close();

    response.send(
        {
            "Numero de Casos Covid, de Acordo com o Site de Campinas/SP": pageContent.subtitle
    });
});

const porta = 3000;

server.listen(3000, () => {
    console.log(`Subiu com sucesso. Acesse em http://localhost:${porta}`)
});