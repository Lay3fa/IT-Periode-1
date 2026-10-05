# Portfolio Website

Een persoonlijke portfolio-website gebouwd met HTML, CSS en JavaScript.

## Structuur

```
portfolio/
├── index.html          # Hoofdpagina
├── css/
│   └── style.css       # Stijlen
├── js/
│   └── script.js       # Functionaliteit
└── images/             # Afbeeldingen
```

## Functies

- Responsive design
- Smooth scrolling navigatie
- Projectoverzicht
- Contactformulier
- Modern en schoon ontwerp

## Gebruik

1. Open `index.html` in een webbrowser
2. Pas de inhoud aan in `index.html`
3. Stijl aanpassen in `css/style.css`
4. Functionaliteit uitbreiden in `js/script.js`

## Aanpassingen

### Kleuren
Pas de kleuren aan in `css/style.css`:
- Primaire kleur: `#333`
- Achtergrond: `#f4f4f4`

### Inhoud

#### Over mij sectie aanpassen
Open `index.html` en zoek de sectie met id="over". Pas de tekst aan:

```html
<section id="over" class="about">
    <h2>Over mij</h2>
    <p>Ik ben [jouw naam], een [wat je doet] met interesse in [interesses]. 
    Momenteel studeer ik [opleiding] en heb ik ervaring met [vaardigheden].</p>
</section>
```

#### Projecten toevoegen
Elk project heeft deze structuur in `index.html`:

```html
<div class="project-card">
    <h3>Naam van je project</h3>
    <p>Korte beschrijving wat je hebt gemaakt en welke technologieën je hebt gebruikt.</p>
</div>
```

Om een nieuw project toe te voegen, kopieer één `project-card` blok en wijzig de inhoud.

#### Afbeeldingen toevoegen
1. Sla je afbeeldingen op in de `images/` map
2. Voeg een afbeelding toe aan een project-card:

```html
<div class="project-card">
    <img src="images/jouw-afbeelding.jpg" alt="Beschrijving afbeelding" style="width:100%; border-radius:8px;">
    <h3>Naam project</h3>
    <p>Beschrijving</p>
</div>
```

#### Contactgegevens aanpassen
In de contact-sectie kun je een e-mailadres of telefoonnummer toevoegen:

```html
<section id="contact" class="contact">
    <h2>Contact</h2>
    <p>E-mail: jouw@email.com</p>
    <p>Telefoon: 06-12345678</p>
    <form>
        <!-- formulier blijft hetzelfde -->
    </form>
</section>
```

## Browser Ondersteuning

- Chrome (laatste versie)
- Firefox (laatste versie)
- Safari (laatste versie)
- Edge (laatste versie)