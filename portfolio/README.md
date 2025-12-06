README.md

Progetto: Portfolio Personale

Scopo del Progetto
Questo repository contiene il codice per il mio sito web portfolio personale. Lo scopo è presentare il mio percorso professionale come ingegnere biomedico specializzato in machine learning e bioinformatica, mettendo in evidenza i miei progetti più significativi e il mio prossimo percorso di dottorato.

Il design si ispira a un approccio minimalista e professionale, con un'esperienza di navigazione intuitiva a pagina singola e un focus sulla chiarezza dei contenuti, come da questo riferimento.

Tecnologie Utilizzate

Il progetto è una Single-Page Application (SPA) creata con React e i suoi pacchetti standard. Per il design e l'organizzazione, si è puntato su una soluzione pulita e scalabile.

    Linguaggi: HTML, CSS, JavaScript (ES6+)

    Framework/Librerie: React.js

    Stilizzazione: CSS puro (con media queries per la responsività)

    Gestione Pacchetti: npm

Stato del Progetto

Il progetto è attualmente in fase di sviluppo. Le sezioni principali sono state create, ma richiedono ancora una completa personalizzazione e l'aggiunta dei contenuti finali.

Componenti Sviluppati:

    Navbar.js: Componente della barra di navigazione.

        Stato: Funzionale e responsivo. I link sono impostati per il "smooth scrolling".

    Home.js: La sezione iniziale del sito.

        Stato: Funzionale. Richiede la sostituzione dei placeholder con i tuoi dati personali.

    About.js: La sezione "Chi sono".

        Stato: Funzionale. Il layout è pronto e responsivo. C'è un problema noto dove l'immagine non viene nascosta correttamente su schermi piccoli (da rivedere la specificità del CSS). Richiede la sostituzione dei placeholder con il tuo testo e la tua immagine.

    Projects.js: La sezione dedicata ai progetti.

        Stato: Sviluppo iniziale completato. Il layout per una singola "card" di progetto è pronto e responsivo. L'alternanza delle card è gestita automaticamente.

Cosa Manca (Prossimi Passi)

    Completamento della Sezione Progetti:

        Duplicare il blocco project-card per ogni progetto.

        Aggiungere contenuti (titoli, descrizioni, tecnologie) e immagini per ogni progetto.

    Creazione della Sezione Contatti:

        Creare un nuovo componente Contact.js.

        Aggiungere un modulo di contatto o i link ai tuoi profili (LinkedIn, email, GitHub, ecc.).

    Animazioni:

        Aggiungere animazioni di ingresso per gli elementi (es. fade-in, slide-in) per migliorare l'esperienza utente.

    Immagini e Icone:

        Aggiungere tutte le immagini dei progetti e le icone sociali/link nella cartella public/assets/images.

    Personalizzazione Finale:

        Sostituire tutti i testi placeholder e i link con le tue informazioni personali.

    Ottimizzazione e Deploy:

        Comprimere le immagini per ottimizzare i tempi di caricamento.

        Eseguire il build del progetto con npm run build.

        Deployare il sito su una piattaforma di hosting (es. Netlify, Vercel, GitHub Pages).

Avviare il Progetto in Locale

Per avviare l'applicazione in locale, assicurati di avere Node.js e npm installati.

    Clonare il repository:
    git clone https://aws.amazon.com/it/what-is/repo/

    Entrare nella cartella del progetto:
    cd [nome della cartella]

    Installare le dipendenze:
    npm install

    Avviare il server di sviluppo:
    npm start

Il tuo sito sarà visibile su http://localhost:3000.

La repo riguarda un blog personale da utilizzare come mio portfolio in cui pubblicare i miei lavori come ricercatore in ingegneria biomedica, ed aumentare le possiiblità di  essere assunto da una FAANG. Non mi interessano effetti particolari ma che sia veloce, minimal e bello. Al momento non mi ricordo a che punto ero con lo sviluppo in quanto è un paio di mesi che non lo prendo in mano. Potresti analizzare le componenti principali dello stato attuale, identificando cosa manca da implementare per avere una prima  versione funzionante, da rifinire in seguito. Se mi ricordassi anche come visualizzare il sito su VSCode o sul browser mi faresti una mano 


