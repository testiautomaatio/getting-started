# Playwright-testauksen aloitus

Tämä dokumentti tarjoaa ohjeet Playwright-testien kehittämiseen ja suorittamiseen tarvittavien työkalujen asennukseen. Playwright on tehokas testauskirjasto, joka mahdollistaa monipuolisten ja luotettavien selainpohjaisten testien kirjoittamisen. Se tukee useita selaimia ja tarjoaa laajan valikoiman ominaisuuksia, jotka helpottavat testien kehittämistä ja suorittamista. Seuraavissa osioissa käydään läpi tarvittavien työkalujen asennusvaiheet, jotta voit aloittaa Playwright-testien kirjoittamisen ja ajamisen omassa kehitysympäristössäsi.

Huomaa, että tämä dokumentti ei ole kattava, joten suosittelemme tutustumaan myös Playwrightin virallisiin ohjeisiin ja katsomaan opetusvideoita, jotta saat kaiken irti työkalusta ja sen ominaisuuksista.


## Node.js:n asennus

Node.js on JavaScript-ajoympäristö, joka mahdollistaa JavaScriptin suorittamisen "palvelinpuolella", eli tässä tapauksessa omalla koneellasi. Playwright on rakennettu Node.js:n päälle, joten sen asentaminen on välttämätöntä Playwright-testien kehittämiseksi ja suorittamiseksi. Voit ladata ja asentaa Node.js:n seuraavasta linkistä: [Node.js:n lataussivu (nodejs.org)](https://nodejs.org/).


## Visual Studio Code (suositeltu)

Visual Studio Code on suosittu koodieditori, joka tukee Playwrightin kehitystä. Voit ladata ja asentaa VS Coden seuraavasta linkistä: [Visual Studio Code lataussivu](https://code.visualstudio.com/).

Suosittelemme asentamaan lisäksi [Playwright Test for VS Code -laajennuksen (ms-playwright.playwright)](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright), joka tarjoaa Playwright-testeille tukea Visual Studio Codessa. Voit etsiä ja asentaa laajennuksen suoraan VS Coden extensions-näkymässä.


## npm-paketin asennus

Playwrightin asennus voidaan tehdä helposti käyttämällä `npm init playwright@latest` -komentoa. Tämä komento luo uuden Playwright-projektin ja asentaa kaikki tarvittavat riippuvuudet automaattisesti.

```bash
npm init playwright@latest
```

Seuraa komentorivillä annettuja ohjeita, jotta voit määrittää projektisi asetukset. Tämä komento luo myös valmiin projektirakenteen, joka sisältää esimerkkitestejä ja konfiguraatiotiedostoja, mikä helpottaa Playwrightin käytön aloittamista. Vaihtoehtoisesti voit käyttää VS Code -laajennuksen ["install playwright"-ominaisuutta](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright#install-playwright).

Suosittelemme sinua käyttämään asennuksessa ohjelmointikielenä TypeScriptiä ja lisäämään projektiin automaattisesti GitHub actions -työkulun.

Lisätietoja Playwrightin asennuksesta ja konfiguroinnista löydät Playwrightin dokumentaatiosta: [Playwright Getting Started](https://playwright.dev/docs/intro).


## Playwrightin selainajurien asennus

Playwright tukee useita selaimia, kuten Chromium, Firefox ja WebKit. Voit asentaa nämä selaimet käyttämällä seuraavaa komentoa:

```bash
npx playwright install
```

Voit myös valita asennettavat selaimet erikseen. Esimerkiksi, jos haluat asentaa vain Chromiumin, voit käyttää seuraavaa komentoa:

```bash
npx playwright install chromium
```

Lisätietoja selainten asennuksesta ja konfiguroinnista löydät Playwrightin dokumentaatiosta [https://playwright.dev/docs/browsers](https://playwright.dev/docs/browsers).

Näiden työkalujen asennuksen jälkeen olet valmis kehittämään ja suorittamaan Playwright-testejä:

```bash
npx playwright test
```

Playwright suorittaa testit oletuksena "headless"-tilassa, eli ilman graafista käyttöliittymää. Jos haluat nähdä selaimen ruudullasi testien suorituksen ajan, käytä komentoa:

```bash
npx playwright test --headed
```

Mikäli haluat valita itse suoritettavat testit yksitellen ja tutkia niiden tuloksia graafisesti, voit käynnistää Playwright-työkalun komennolla:

```bash
npx playwright test --ui
```


## Materiaalista

Nämä asennusohjeet on luotu hyödyntämällä kielimalleja ja tekoälytyökaluja, kuten GitHub Copilot ja ChatGPT.