var questions = [
  ["Vad gör dig tillfredsställd?", "Jämlikhet", "Att vara ekonomiskt oberoende. Ännu bättre om mina vänner också är det!", "När folk behöver din hjälp för att göra det de så gärna vill","En enkel lösning till komplexa tekniska problem", "Lära känna nya främmande människor", "Rena bänkar, rent golv, när andra människor har roligt, glada gäster, prata med folk.", "Att se människor jobba tillsammans för att skapa något stort!", "När allt bara funkar", "Ordning och reda", "Ost", "Att se långtgående planer gå i lås och göra andra glada.", "Att få in det sista ordet.", "Att få sprida energi till nervösa studenter", "Få tå-flirta med kassören på STYM", "När allt flyter på, tack vare mig"],
  ["Vad gör du helst en fredagskväll?", "Kollar svt-dokumentär om samhällsproblem", "Jobbar sent, därefter drar jag ut och slirar på Stureplan tills ännu senare", " Har det roligt med kompisar, oavsett vad vi gör", "Programmera","Kollar på en film/serie från ett främmande land", "Kollar LEG och väskor i dörren. Luktar på skumma vätskor....", "Ligger på soffan och tittar på film, kanske blir det en punsch i pausen", "Käka pizzor, kollar på film och slipper skicka in en inlämning", "Myser", "Äter ost, dricker vin och planerar med gruppen", "Spelar in en taggfilm på JumpYard med gänget.", "Funderar på en rolig artikelidé.", "Dansar loss", "Synar stadgarna med lupp", "Skriver till Webmaster att hemsidan är nere"],
  ["Vilka vill du bossa över?", "Majoriteter", "Tycker \"bossa\" är ett laddat ord. Men gärna så många som möjligt.", "Helst minionerna, men nØllan duger", "Nördarna :)", "Mig själv men också andra!", "Tilltåndsenheten och kommunen", "En stor grupp av oerhört talangfulla människor!", "Mina föreläsare", "Alla >:)", "alla", "Hela sektionen, men bara ibland.", "Endast de vassaste av kreatörer.", "Hela sektionen, men bara ibland.", "Styrelsen", "3 nämnder"],
  ["Jobbar du helst på egen hand eller i grupp? (1=på egen hand, 5=i grupp)", 4, 4, 4, 3, 4, 5, 5, 4, 4, 4, 5, 3, 5, 2, 3],
  ["Hur mycket tid vill du lägga på sektionssaker? (1=lite grann, 5=jättemycket)", 2, 3, 3, 2, 2, 5, 4, 3, 1, 4, 5, 2, 5, 2, 3],
  ["Vilka av följande citat stämmer bäst på dig?", '"Jag vill bidra till en bättre värld (sektion)"', "Work hard, play hard", "Det spelar ingen roll om de skrattar med eller åt mig, det är fortfarande jag som är rolig", "”640 kB borde vara tillräckligt för vem som helst.” - Bill Gates", "Live, laugh, love ;-----)", "1) Det är inte ett konstverk, men det är ett verk. 2) Det finns omtentor men inga omfester (att jobba på LOLZ) 3) Sucks to suck ", "”Nyckeln till kreativitet är förmågan att dölja sina källor”", "Jag gillar pizza", '"Squeak" - Ek Orre', '"Jag kan säga det ni vill att jag ska säga, men jag kan inte tänka"', "Ett väl utfört arbete ger en inre tillfredsställelse och är den grund på vilken mottagningen vilar.", '"Pennan är mäktigare än integralen, men bäst är om man kan använda båda."', "“Det är många mil till måndag”", "You either die a hero or you live long enough to see yourself become the villain", "Det finns inget så irriterande som två människor som talar, när du försöker avbryta."], 
  ["Vilka av följande situationer ser du dig helst i?", '"Äta fika med alla mina kompisar"', "På lunchföreläsning i V2, där företaget i fråga bjuder på sushi. Jag har inget schemalagt på hela eftermiddagen och kan spendera tiden nätverkandes med företagsrepresentanterna.", "Alla tackar mig för det de har fått vara med om, även om jag gjorde det enbart för min egen skull", "Sektionens hemsida är nere och bara du kan fixa den!", "Omringad av massa intisar", "Står framför en full kyl och en lång barkö", "På scen… eller bakom scen!", "I en Tesla med min föreläsare som visar att bilen pruttar när man blinkar", "Gregor Samsas livsstil", "Under becca", "Utmattad och sliten, men förnöjd och omgiven av härliga människor.", "Sittandes i konsulatet, måhända på en pub, livligt diskuterande vad som är ut och vad som är in, samt huruvida hela sektionen bör få veta svaret.", "Omgiven av hundratals nyantagna", "Förföljer en kassör hem en mörk kväll...", "Att allt som ljuset rör är mitt, där ljuset rör alla sektionens kanaler"], 
  ["Vad skulle du vilja bidra till på Fysiksektionen?", "Ökat trygghet", "Mer pengar i kassan + drömjobb för alla studenterna!", "Sprida glädje och roligheter för den gemene f-teknologen", "It-support", "Bättre gemenskap", "Stämning, avslappning, socialisering, nya kontakter och vänner", "Sprida glädje och låta folk på sektionen leva ut sin mer praktiska sida!", "Att folk har en bra studietid", "Smågrejer som gör F-teknologens liv enklare", "Underlätta engagemang", "Det bästa möjliga välkomnandet till studier och studentliv.", "Tidningar av högsta kvalitet, värda ett och annat skratt.", "En fantastisk start på studielivet", "Ordning och reda!", "Att hjälpa oss prata med varandra"],
  ["Vilka tidsintervall är du vaken på?", "11-01", "24/7 under tentaperioder, annars inte. Svarar dock telefonen oavsett timme på dygnet!", "10-02", "20:00 - 09:00", "CEST 6 am till CEST 10 pm", "17:23-05:00", "0.00-24.00", "Vi vill inte svara på den här frågan och främja en bild av ohälsa bland funktionärer", "05:00-20:30", "11:00-02:45 alt 05:00-21:30", "Januari till oktober", "När solen är uppe + lite extra. Eller helt tvärtom - jag är vaken när jag vill.", "15-28 augusti", "Förr", "När jag vill"],
  ["Om Fysiksektionen fick en miljon kronor till, vad skulle du vilja göra med dem?", "Skänka en del till välgörenhet. Coola märken", 'Flippa dem och skaffa en miljon till. "You get the bag and fumble it, I get the bag and flip it and tumble it" som Quavo säger.', "Bygga en eller två attefallare och stoppa in ett biljardbord och ett pingisbord med spelrobot och ett airhockey och allt annat roligt", "Köpa en superdator", "Fysiksektionen åker till mallis!", "Nytt ljudsystem, strobelightssystem, nya kylskåp, en till bil (Volkswagen hippie van)", "Boka Globen!", "10 000 pizzor, alla får en pizza", "Köpa ett stort bonsaiträd", "Ost?? nä men lägga dom på hög för att köpa osqvik 2.0 till sektionen", "Sektionens största fest, nu i Stadshuset!", "Jag skulle skapa ett antal strålande tidningar, med test av direktvärme, bregott och Michelinrestauranger. Sen skulle jag köpa några extra Adobe licenser till sektionen.", "En gigantisk boombox", "Outsourca bokföringen", "Prenumeration på Slack Pro (1 miljon räcker dock inte)"],
  ["En ska vara...", "Snäll?", "två! Eller så många som krävs för att starta ett framgångsrikt företag.", "kapabel att hålla många bollar i luften", "bra på att googla.", "snell", "Glad, trevlig, skeptisk, fundersam, kreativ, laglydig, social", "Kreativ!", "snäll", "Goaste grabben i Kons", "opinionated, samarbetsvillig och lagomt byråkratisk", "fri från fördärv.", "Kreativ.", "Glad", "Noggrann", "tydlig"],
  ["Jag skulle inte klara mig utan...", "En kompis", "kaffe", "att få röra på mig", "min terminal.", "Tacos och pepsi", "Våra otroliga minimästare och fkm:are  (och Billys pan pizza)","Film, böcker och musik", "kursnämnder", "Godis!", "Ost! nä men min grupp, den e rätt skön", "Solbrillor", "Mina medskribenter.", "en stor kramgo bästa vän", "Min yrkanderätt", "PM för kommunikation"],
  ["Det här vill jag få ut av mitt engagemang", "Gemenskap", "ett riktigt sexigt CV + kontaktuppgifter till rekryterare", "Känslan av att bidra till det allmänna välmåendet på sektionen", "Få programmeringerfarenhet.", "Få vänner över hela världen", "Träffa människor, bidra till andras bästa, lära sig om samarbete och hur man jobbar tillsammans i grupp", "Lära känna massor av härliga människor och stå på ledarsidan för ett av sektionens största projekt", "förändring!", "Få en inblick i sektionen utan att lägga ner för mycket tid", "stark gruppsammanhållning", "Håravfall, ett par släpkurser och en stor dos sömnbrist.", "Skratt, en känsla för det skrivna ordet och en inblick i sektionens mest grävande journalistik.", "En skön känsla i magen", "Ett pyttelitet arvode från THS centralt", "Att hjälpa Fysiksektionen, och bli admin för en massa kanaler"],
  ];
var namnder = ["Jämlikhetsnämnden (JämN)", "Fysiksektionens Näringslivsnämnd (FN)", "Aktivitetsnämnden (FAN)", "Utvecklingsgruppen, F.dev", "Internationella nämnden (FINT)", "Klubbmästeriet, (fkm*)", "Fysikalen", "Studienämmnden (FSN)", "Fysikrumskommitén (FRum)", "Styret", "Föhseriet", "The Force", "Fadderiet", "Revisorerna", "Kommunikationsnämnden (Fcom) centralt"]
