[English version of this readme is available in the file readme.en.md](./readme.en.md)

# Playwright-testauksen aloitus 🎭

Tässä tehtävässä tavoitteena on asentaa Playwright-testauskirjasto ja tutustua testien suorittamiseen ja kehittämiseen Playwrightin avulla. Playwright on tehokas testauskirjasto, joka mahdollistaa monipuolisten ja luotettavien selainpohjaisten testien kirjoittamisen. Se tukee useita selaimia ja tarjoaa laajan valikoiman ominaisuuksia, jotka helpottavat testien kehittämistä ja suorittamista.

Tehtävän tueksi tarvitset Playwrightin omaa dokumentaatiota ja opetusvideoita, jotta saat kaiken irti työkalusta ja sen ominaisuuksista. Tehtävän eri osissa on vinkkejä ja ohjeita testien kehittämiseen ja suorittamiseen, mutta ensisijaisena lähteenä toimii Playwrightin virallinen dokumentaatio.

Dokumentaation lisäksi suosittelemme vahvasti katsomaan videon [Introduction to Playwright for End-to-End Testing with Debbie O'Brien (JS Drops, youtube.com)](https://youtu.be/lCb9JoZFpHI), jossa käydään perusteellisesti läpi Playwrightin käyttöä ja siihen liittyviä työkaluja.

> [!TIP]
> Tämän ja tulevien tehtävien komennot on tarkoitettu suoritettavaksi tehtävärepositorion juurihakemistossa, eli samassa hakemistossa, jossa tämä tiedosto sijaitsee. Voit siirtyä oikeaan hakemistoon komentorivillä esimerkiksi [MDN-palvelun ohjeiden avulla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#navigation_on_the_command_line).


## Tehtävän ja testauksen lähtökohdat

Tämän tehtävän suorittamiseksi tarvitset [Node.js-ympäristön](https://nodejs.org/) ja [Visual Studio Code -koodieditorin](https://code.visualstudio.com/). Node.js on JavaScript-ajoympäristö, joka mahdollistaa JavaScriptin suorittamisen "palvelinpuolella", eli tässä tapauksessa omalla koneellasi. Playwright on rakennettu Node.js:n päälle, joten sen asentaminen on välttämätöntä Playwright-testien kehittämiseksi ja suorittamiseksi. [Voit ladata ja asentaa Node.js:n omalle koneellesi nodejs.org-sivustolta](https://nodejs.org/). Suosittelemme aina viimeisintä LTS-versiota (LTS = Long Term Support).

Mikäli haluat käyttää valmiiksi konfiguroitua kehitysympäristöä, voit hyödyntää tämän repositorion [development container -konfiguraatiota](./devcontainer.md), joka tarjoaa valmiin ympäristön eristettynä omasta käyttöjärjestelmästäsi. Kehityskontti voi olla kannattava vaihtoehto, jos haluat välttää asennusongelmat ja saada nopeasti käyttöön testausympäristön, joka on eristetty omasta koneestasi. Lue lisää [tästä dokumentista](./devcontainer.md).

Voit varmistaa Node.js:n asennuksen ja sen toimivuuden komentorivillä seuraavalla komennolla:

```bash
node --version  # kirjoitushetkellä Node.js:n uusin LTS-versio on 24
```

Playwright-testejä voidaan kirjoittaa useilla eri koodieditoreilla ja eri ohjelmointikielillä, kuten JavaScriptillä ja TypeScriptillä. Tällä kurssilla suosittelemme TypeScriptin käyttöä, koska se yhdessä VS Coden kanssa helpottaa testien kirjoittamista ja virheiden paikantamista. Myös Playwrightin dokumentaation esimerkit on kirjoitettu TypeScriptillä.

Jos TypeScript ei ole sinulle entuudestaan tuttu, voit lukea lisää siitä [TypeScriptin virallisilta verkkosivuilta](https://www.typescriptlang.org/). TypeScript on JavaScriptin laajennos ja näissä tehtävissä et tule tavitsemaan yhtään perus-JavaScriptistä poikkeavaa ominaisuutta, joten TypeScriptin käyttämisen ei pitäisi aiheuttaa ylimääräistä vaivaa. TypeScriptiä ei tarvitse myöskään erikseen asentaa, vaan tuki sille tulee Playwright-asennuksen mukana.

Suosittelemme asentamaan lisäksi VS Code:en [Playwright Test for VS Code -laajennuksen (ms-playwright.playwright)](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright), joka tarjoaa Playwright-testeille tukea Visual Studio Codessa. [Laajennuksen ohjeissa](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) kerrotaan kattavasti sen ominaisuuksista ja suosittelemme lukemaan myös ohjeet. Voit etsiä ja asentaa laajennuksen suoraan [VS Coden extensions-näkymässä](https://code.visualstudio.com/docs/editor/extension-marketplace).


## Osa 1: Playwrightin asentaminen ja projektin luonti

Tarkat ohjeet Playwrightin asentamiseksi ja konfiguroimiseksi löydät Playwrightin dokumentaatiosta: [Playwright Getting Started](https://playwright.dev/docs/intro). Dokumentaatiossa esitetään tavat asennuksen suorittamiseksi sekä komentoriviltä että VS Code -laajennuksen avulla. Voit valita itsellesi sopivimman tavan.

Playwrightin asennuksen ja käyttämisen tueksi on olemassa lukuisia laadukkaita videoita. Esimerkiksi [Getting Started with Playwright and VS Code (youtube.com)](https://youtu.be/Xz6lhEzgI5I) voi olla asennuksessa hyödyksi.


**Asennus komentorivillä**

Kun koneellesi on asennettuna Node.js sekä sen mukana tuleva npm-komento, voit asentaa Playwrightin komentoriviltä niitä käyttäen. Suorita komento `npm init playwright@latest` tämän tehtävän juurihakemistossa. Komento luo uuden Playwright-projektin ja asentaa kaikki tarvittavat riippuvuudet automaattisesti:

```bash
npm init playwright@latest
```

Seuraa komentorivillä annettuja ohjeita ja valitse itsellesi mieluisat asetukset. Jos olet epävarma eri valinnoista, asennusohjelman ehdottamat oletusasetukset toimivat tässä hyvin.

> [!NOTE]
> Varmista, että `npm init`-komento suoritetaan tehtävän juurihakemistossa, eli samassa hakemistossa, jossa tämä readme-tiedosto sijaitsee. Tarvittaessa siirry oikeaan hakemistoon esimerkiksi [MDN-palvelun ohjeiden avulla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#navigation_on_the_command_line).


**Asennus VS Code -laajennuksen avulla**

Vaihtoehtoisesti voit käyttää VS Code -laajennuksen "install playwright"-ominaisuutta. Playwrightin VS Code -laajennos on dokumentoitu hyvin ja löydät parhaat ohjeet [laajennoksen omasta dokumentaatiosta](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright#install-playwright).


**Asennuksen toimivuuden varmistaminen**

Onnistuneen asennuksen jälkeen tehtävähakemistossasi pitäisi löytyä uudet tiedostot, kuten `package.json` ja `playwright.config.ts`. Package.json sisältää projektisi riippuvuudet ja asetukset, kun taas `playwright.config.ts` sisältää Playwrightin konfiguraation. Playwright luo myös valmiiksi esimerkkitestejä, joiden nimet ja sijainti voivat hieman vaihdella riippuen asennustyökalusta ja valitsemistasi asetuksista.

Varmista lopuksi asennuksen toimiminen tarkastamalla Playwrightin versio komennolla:

```bash
npx playwright --version
```

### Playwrightin selainten asennus

Playwright tukee useita selaimia, kuten Chromium, Firefox ja WebKit. Selaimet ja niiden käyttäminen on dokumentoitu tarkemmin Playwrightin dokumentaatioon https://playwright.dev/docs/browsers. Playwright ei oletuksena käytä käyttöjärjestelmääsi asentamiasi selaimia, vaan se asentaa ja käyttää omia versioitaan selaimista. Tällä tavoin testit ovat eristettyjä ja toistettavissa riippumatta käyttöjärjestelmästä ja asennetuista selaimista. Testattavan sovelluksen toimivuus voidaan myös varmistaa suorittamalla samat testit samanaikaisesti useilla eri selaimilla.

Mikäli et asentanut selaimia vielä edellisessä vaiheessa, voit asentaa selaimet valitsemalla jonkin seuraavista komennoista tai muokkaamalla niitä tarpeidesi mukaan:

```bash
# asentaa kaikki selaimet (Chromium, Firefox ja WebKit)
npx playwright install

# asentaa vain Chromium-selaimen:
npx playwright install chromium

# asentaa lisäksi riippuvuudet (development container -ympäristöjä varten):
# https://playwright.dev/docs/browsers#install-system-dependencies
npx playwright install chromium --with-deps
```

Lisätietoja selainten asennuksesta ja konfiguroinnista löydät Playwrightin dokumentaatiosta [https://playwright.dev/docs/browsers](https://playwright.dev/docs/browsers). Playwright asentaa selaimet tietokoneellesi erilliseen hakemistoon, josta voit halutessasi [poistaa ne seuraamalla Playwrightin ohjeita](https://playwright.dev/docs/browsers#uninstall-browsers).

> [!NOTE]
> Tämän kurssin ratkaisut tarkastetaan automaattisesti Chromium-selaimella, mutta suosittelemme käyttämään omissa testeissä muitakin selaimia.


## Osa 2: testien suorittaminen

Hyödynnä tässä osassa Playwrightin dokumentaation sivua [Running and debugging tests (playwright.dev)](https://playwright.dev/docs/running-tests).

Suorita testit komentorivillä tehtävärepositorion juuressa seuraavalla komennolla:

```bash
# testaa kaikilla selaimilla:
npx playwright test

# tai vain tietyllä selaimella:
npx playwright test --project=chromium
```

Kuten huomaat, testit suoritetaan oletuksena ns. "headless"-tilassa, eli ilman näkyvää selainikkunaa. Testit suoritetaan tyypillisesti niin nopeasti, ettei selaimen katseleminen testien aikana ole mielekästä.

Playwrightin suoritusasetuksia voidaan muuttaa antamalla `npx playwright`-komennolle erilaisia argumentteja. Esimerkiksi, jos haluat suorittaa testit "headed"-tilassa, eli näkyvällä selainikkunalla, voit käyttää seuraavaa komentoa:

```bash
npx playwright test --headed --reporter="list,html"
```

Yllä komennossa annettu `--reporter`-argumentti määrittää, että eri testitapausten nimet ja niiden tulokset näytetään listamuodossa komentorivillä ja sen lisäksi tuloksista muodostetaan HTML-muotoinen raportti.

Mikäli haluat valita itse suoritettavat testit yksitellen ja seurata niiden suoritusta graafisesti, voit käynnistää Playwright-työkalun komennolla:

```bash
npx playwright test --ui
```

Viimeisimmän testisuorituksen raportin saa näkyviin omaan selaimeen komennolla:

```bash
npx playwright show-report
```

Playwright-testejä voidaan suorittaa ja niiden tuloksia tarkastella monella eri tavalla. Playwrightin UI sekä VS Code -laajennoksen tarjoamat ominaisuudet ovat myös osin päällekkäisiä, joten voit jatkossa valita itsellesi sopivimman tavan testien kehittämiseen ja suorittamiseen hyödyntäen joko komentoriviä tai graafisia käyttöliittymiä.


## Tehtävän palauttaminen

Kun olet asentanut Playwrightin ja suorittanut Playwrightin esimerkkitestit onnistuneesti, voit palauttaa tämän tehtävän GitHubiin. Tehtävän suorittamisen merkiksi suorita seuraava komento ja tallenna sen tekemät tulosteet tiedostoon [`results.txt`](./results.txt):

```bash
# kopioi tämän komennon tulosteet tiedostoon results.txt
npx playwright test --reporter='list,html' --project=chromium

# voit myös halutessasi ohjata komennon tulosteet suoraan tiedostoon
npx playwright test --reporter='list,html' --project=chromium > results.txt
```

Lisää projektiisi luodut uudet tiedostot sekä muokkaamiisi tiedostoihin tehdyt muutokset versionhallintaan käyttäen `git status`, `git add` ja `git commit` -komentoja. Lopuksi voit lähettää muutokset GitHubiin `git push`-komennolla.

Tehtävän palauttaminen käynnistää GitHubissa automaattisen tarkastuksen, jonka tulokset ilmestyvät actions-välilehdelle. Tarkastuksen tulokset näyttävät, onko testit suoritettu onnistuneesti ja ovatko ne läpäisseet kaikki testitapaukset. Voit myös tarkastella tarkemmin testien tuloksia ja mahdollisia virheilmoituksia GitHubin actions-välilehdeltä. Löydät lisätietoja GitHub actions -työnkuluista [GitHubin omasta dokumentaatiosta](https://docs.github.com/en/actions).


## Materiaalista

Tämän tehtävän on kehittänyt Teemu Havulinna ja se on lisensoitu [Creative Commons BY-NC-SA -lisenssillä](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Tehtävän luonnissa on hyödynnetty kielimalleja ja tekoälytyökaluja, kuten GitHub Copilot ja ChatGPT.
