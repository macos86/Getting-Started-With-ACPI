# Supportare la guida

**Nota**: Questa comunità usa una guida non ufficialmente gestita da Acidanthera. Per favore non segnalare issue riguardo a questa guida ad Acidanthera.

Vuoi aiutare supportando la guida? Bene ci sono molte modi in cui puoi aiutare!

[[toc]]

Nota: Per chi vuole contribuire economicamente, veramente lo apprezziamo ma siamo un'organizzazione non-profit. Lo facciamo per insegnare, non per fare soldi. Se hai alcuni soldi rimasti, ti raccomandiamo altamente di donarli in carità. [Crohn's and Colitis Canada](https://crohnsandcolitis.donorportal.ca/Donation/DonationDetails.aspx?L=en-CA&G=159&F=1097&T=GENER) è ciò che raccomandiamo se non ne hai nessuno in mente.

## Contribuire via Issue

Contribuire via Issue è piuttosto semplice ma qui ecco alcune regole:

* La zona issue è dedicata solo ai problemi della guida, **nessun issue del proprio hackintosh**. Non è un posto dove discutere i problemi di installazione.
* Se è per un errore di trascrizione oppure un chiarimento, per favore indica in quale pagina sia. Lo apprezzeremmo per non andare noi a esplorare in quale pagina possa essere.

Puoi trovare il bugtracker qui: [Bugtracker](https://github.com/dortania/bugtracker)

## Contribuire via PR

Alcune linee guida quando contribuisci tramite PR:

* Usa il tuo cervello (per favore).
* Dimostra le tue affermazioni.
* Le Pull Request possono essere rifiutate se non corrispondono o hanno informazioni inaccurate. Generalmente motiveremo perché viene rifiutata o perché viene richiesta una revisione.
  * Apprezziamo le fonti per qualsiasi grande proposta, per rendere più semplice la verifica della attendibilità delle tue affermazioni
* Le immagini devono essere scaricate localmente nella repository dentro la cartella `../images/`
* La tua PR deve aver superato un markdown lint e aver sistemato tutti i problemi.
* In generale, evitare quando possibile di usare strumenti "non-Acidanthera". Generalmente vogliamo evitare di usare qualsiasi strumento di terze parti - tranne quando è impossibile, quindi aggiungi il link a questo.
  * Tool esplicitamente banditi:
    * UniBeast, MultiBeast e KextBeast
      * Più informazioni possono essere trovate qui: [Tonymacx86-stance (EN)](https://github.com/khronokernel/Tonymcx86-stance)
    * TransMac
      * Famoso per creare dischi USB rotti
    * Installer Niresh
      * Vorremmo evitare la pirateria in queste guide

### Come contribuire

Il miglior modo di testare i tuoi commit ed essere sicuro che siano formattati correttamente è di scaricare Node.js dopo usare il comando `npm install` per installare le dipendenze. Quando scrivi `npm run dev`, imposterà un server web locale in cui puoi connetterti per vedere le modifiche fatte. `npm test` troverà ogni errore riguardo alla formattazione e anche nello spellcheck. Se vuoi fare il `markdownlint` per sistemare automaticamente gli errori di lint, usa `npm run fix-lint`.

Semplici step:

* [Esegui un fork della repo](https://github.com/dortania/OpenCore-Install-Guide/fork/)
* Installa i tool richiesti:
  * [Node.js](https://nodejs.org/)
* Esegui le tue modifiche.
* Compila il sito:
  * `npm install` (Per installare tutti i plugin richiesti)
  * `npm run dev` (Crea un'anteprima del sito)
    * La puoi trovare su `http://localhost:8080`
* Controlla il lint e lo spellcheck:
  * `npm test`
  * `npm run lint` and `npm run spellcheck` (per avviare i test individualmente)
  * `npm run fix-lint` (Per risolvere ogni tipo di errore)
  * Per sistemare parole non riconosciute dallo spellcheck di default, per favore aggiungile al [dictionary.txt](./dictionary/dictionary.txt) e avvia `npm run sort-dict`

### Suggerimenti

Alcuni tool per fare in modo che contribuire sia più facile:

* [Visual Studio Code](https://code.visualstudio.com)
* [Typora](https://typora.io) per avere le modifiche al markdown in tempo reale.
* [TextMate](https://macromates.com) per fare facilmente un massivo find/replace.
* [Github Desktop](https://desktop.github.com) per avere una GUI più user friendly.
