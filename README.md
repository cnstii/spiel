# 🟦 Blockspiel

Ein Block-Puzzle im Stil von *Block Blast*, das direkt im Browser läuft – und dessen gemeinsame Web-Oberfläche für Android und iOS vorbereitet ist.

**▶️ Im Browser spielen:** https://cnstii.github.io/spiel/

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

## Android- und iOS-App vorbereiten

Das Repo enthält jetzt eine Capacitor-Konfiguration, die dieselbe Spieloberfläche in eine native Android-/iOS-Hülle bündelt. Es sind **noch keine signierten Store-Builds** und noch keine Android-/iOS-Projektordner erstellt.

Voraussetzungen: Node.js 20 oder neuer; für Android Android Studio/Android SDK; für iOS ein Mac mit Xcode oder ein Cloud-Mac-Builddienst.

```bash
npm install
npm run cap:add:android
npm run cap:add:ios
```

Danach synchronisiert `npm run cap:sync` die Webdatei in die nativen Projekte. Android wird als signiertes Android App Bundle (`.aab`) für Google Play gebaut. iOS muss mit einem Apple-Entwicklerzertifikat und Provisioning Profile als signiertes Archiv über Xcode bzw. einen Cloud-Mac erstellt werden.

**Wichtig:** Für Store-Einreichungen braucht es eigene Signierschlüssel/Zertifikate und Store-Listing-Angaben. Passwörter, private Schlüssel und Zertifikate niemals in den Chat oder in dieses Repository committen. Die iOS-App kann ohne Zugriff auf Xcode/Cloud-Mac nicht gebaut oder eingereicht werden.

## Web-Version lokal spielen

`index.html` direkt im Browser öffnen; keine Installation nötig.
