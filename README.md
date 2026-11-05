# 🟦 Blockspiel

Ein Block-Puzzle im Stil von *Block Blast*, das direkt im Browser läuft – auf dem Handy und am PC.

**▶️ Jetzt spielen:** https://cnstii.github.io/spiel/

## So wird gespielt

- Unten liegen immer **3 Teile**. Zieh sie mit dem Finger oder der Maus auf das **8×8-Feld**.
- Ist eine **Reihe oder Spalte voll**, verschwindet sie.
- Wenn alle 3 Teile gesetzt sind, kommen 3 neue.
- Passt keins der Teile mehr aufs Feld, ist das Spiel vorbei.

## Punkte

| Aktion | Punkte |
|---|---|
| Teil setzen | 1 Punkt pro Block |
| Reihen/Spalten entfernen | 10 × (Anzahl)² – also 10, 40, 90 … |
| Combo (innerhalb von 3 Zügen wieder etwas entfernt) | Multiplikator x2, x3, … |
| Feld komplett leer | +300 Bonus |

Dein Rekord wird im Browser gespeichert.

## Steuerung per Tastatur

- `1`, `2`, `3` – Teil auswählen
- Pfeiltasten – Teil bewegen
- `Enter` – Teil setzen
- `Esc` – abbrechen

## Technik

Eine einzige Datei (`index.html`) mit HTML, CSS und JavaScript – keine Installation nötig.
Zum lokalen Spielen einfach `index.html` im Browser öffnen.
