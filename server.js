var express = require('express');
var axios = require('axios');
var cheerio = require('cheerio');
var { Builder, By, Capabilities } = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var pathName = './chromedriver.exe';
var service = new chrome.ServiceBuilder(pathName).build();
chrome.setDefaultService(service);

var app = express();

const baseUrl = 'http://anmtv.xpg.com.br/';
//http://anmtv.xpg.com.br/page/3/
//http://anmtv.xpg.com.br/conexao-asia/page/3/

var PORT = 9990;

app.get('/home/:page', function(req, res) {
    // http://anmtv.xpg.com.br/page/1/
    const page = req.params.page;
    const url = page === '1'? baseUrl : `${baseUrl}page/${page}/`;
    axios.get(url)
        .then((response) => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html); 
                const dataScraping = {
                    populares: [],
                    noticias: []
                };
                $('#populares-noticias article').each((i, elem) => {
                    dataScraping.populares.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                $('#noticias article').each((i, elem) => {
                    dataScraping.noticias.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                res.status(200).send(dataScraping);
                console.log('populares' , dataScraping);
            }
        }, (error) => {
            console.log(error)
            res.status(404).send('Erro');
        } );

});

app.get('/conexaoasia/:page', function(req, res) {
    // http://anmtv.xpg.com.br/conexao-asia/page/1/
    const page = req.params.page;
    const url = `${baseUrl}conexao-asia/page/${page}/`;
    
    axios.get(url)
        .then((response) => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html); 
                const noticias = [];
                $('#noticias article').each((i, elem) => {
                    noticias.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                res.status(200).send(noticias);
                console.log('noticias' , noticias);
            }
        }, (error) => {
            console.log(error)
            res.status(404).send('Erro');
        } );

});

app.get('/livetoon/:page', function(req, res) {
    // http://anmtv.xpg.com.br/livetoon/page/1/
    const page = req.params.page;
    const url = `${baseUrl}livetoon/page/${page}/`;
    
    axios.get(url)
        .then((response) => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html); 
                const noticias = [];
                $('#noticias article').each((i, elem) => {
                    noticias.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                res.status(200).send(noticias);
                console.log('noticias' , noticias);
            }
        }, (error) => {
            console.log(error)
            res.status(404).send('Erro');
        } );

});

app.get('/filmes-e-series/:page', function(req, res) {
    // http://anmtv.xpg.com.br/filmes-e-series/page/1/
    const page = req.params.page;
    const url = `${baseUrl}filmes-e-series/page/${page}/`;
    
    axios.get(url)
        .then((response) => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html); 
                const noticias = [];
                $('#noticias article').each((i, elem) => {
                    noticias.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                res.status(200).send(noticias);
                console.log('noticias' , noticias);
            }
        }, (error) => {
            console.log(error)
            res.status(404).send('Erro');
        } );

});

app.get('/games/:page', function(req, res) {
    // http://anmtv.xpg.com.br/games/page/1/
    const page = req.params.page;
    const url = `${baseUrl}games/page/${page}/`;
    
    axios.get(url)
        .then((response) => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html); 
                const noticias = [];
                $('#noticias article').each((i, elem) => {
                    noticias.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                res.status(200).send(noticias);
                console.log('noticias' , noticias);
            }
        }, (error) => {
            console.log(error)
            res.status(404).send('Erro');
        } );

});

app.get('/especiais/:page', function(req, res) {
    // http://anmtv.xpg.com.br/especiais/page/1/
    const page = req.params.page;
    const url = `${baseUrl}especiais/page/${page}/`;
    
    axios.get(url)
        .then((response) => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html); 
                const noticias = [];
                $('#noticias article').each((i, elem) => {
                    noticias.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                res.status(200).send(noticias);
                console.log('noticias' , noticias);
            }
        }, (error) => {
            console.log(error)
            res.status(404).send('Erro');
        } );

});

app.get('/noticia/:nome', function(req, res) {
    // http://anmtv.xpg.com.br/nomeNoticia/
    const nome = req.params.nome;
    const url = `${baseUrl}${nome}/`;
    
    const noticia = {
        ultimas: [],
        categorynames: [],
        titleNew: '',
        autoria: '',
        conteudo: [],
        relacionados: []
    };

    axios.get(url)
        .then((response) => {
            if(response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html); 
                
                $('#noticias article').each((i, elem) => {
                    noticia.ultimas.push({
                        id: i,
                        href: $(elem).find('a').attr('href'),
                        title: $(elem).find('h2').text(),
                        category: $(elem).find('.titulo-categoria-noticia').text(),
                        img: $(elem).find('img').attr('src')
                    });
                });
                $('#breadcrumbs .titulo-secao a').each((i, elem) => {
                    noticia.categorynames.push($(elem).text());
                });
                noticia.titleNew = $('#titulo-news').text();
                noticia.autoria = $('#autoria').text();
                $('#conteudo').children().each((i, elem) => {
                    let id = '', tipo = '', valor = '';
                    id = $(elem).attr('id');

                    if(id !== undefined && id.indexOf('attachment') !== -1){
                        tipo = 'imagem';
                        valor = {
                            src: $(elem).find('img').attr('src'),
                            caption: $(elem).find('p').text()
                        };
                    }else if($(elem).hasClass('youtube')){
                        tipo = 'video';
                        valor = $(elem).find('iframe').attr('src');
                    }else{
                        tipo = 'texto';
                        valor = $(elem).text();
                    }
                    if(!$(elem).hasClass('editar'))
                        noticia.conteudo.push({tipo: tipo, valor: valor});
                });
                
                $('#relacionada ul li a').each((i, elem) => {
                    let href = $(elem).attr('href');
                    let noticiaUri = href.substring(href.lastIndexOf('.br/')+4, href.length - 1);
                    noticia.relacionados.push({
                        uri: noticiaUri,
                        texto: $(elem).text()
                    });
                })

                console.log('CURTIDAS' ,noticia.curtidas)
                res.status(200).send(noticia);
            }
        }, (error) => {
            console.log(error)
            res.status(404).send('Erro');
        } );
});

app.get('/curtidas/:nome', function(req, res) {
    // http://anmtv.xpg.com.br/nomeNoticia/
    const nome = req.params.nome;
    const url = `${baseUrl}${nome}/`;
    
    const curtidas = {valor: '', texto: '', noticia: nome};

    async function example() {
        //.forBrowser('chrome')
        let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();

        try {

        await driver.get(url);
 
        curtidas.texto = await driver.findElement(By.className('at4-title')).getText();

        await new Promise(res => setTimeout(res, 2000));

        let curtidasElement = await driver.findElement(By.className('at4-count'))
                .findElements(By.css('span'));

        curtidas.valor = await curtidasElement[1].getText();
        
        console.log('DEPOIS DE PEGAR O VALOR',curtidas);

        } finally {
          await driver.close();
        }

        res.status(200).send(curtidas);
    }

    example();

});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});