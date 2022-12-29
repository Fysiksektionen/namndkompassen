# namndkompassen
Nämndkompass (valkompass) till sektionen

I questions.js kan en skriva in alla frågor en vill använda. För varje fråga skapar du en lista av strings där första elementet är frågan och resterande element är svaren i den ordning som specificeras i listan av nämnder. Om svaren är siffror (utan citationstecken "") så kommer frågan ha svarsalternativen 1 till 5. Den slutpoäng som användare får är andelen frågor där användaren kryssat i det svar nämnden kryssade i.

I index.html finns html-koden (där kan en ändra t.ex. introtexten) och i style.css kan utseendet ändras. Vill en endast byta bakgrundsbild så kan det göras genom att ersätta val_banner.svg. I main.js sker själva bytandet av frågor samt uträknande av poäng.
