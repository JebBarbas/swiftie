# Swifie

Package made by a swiftie developer, use the Taylor Swift's album fonts in your projects, includes font files and css files to import them easily.

## Instalation

```
npm i swiftie
```

## Quick Start

If you're using a library or framework like React, import this fonts is as easy as import
the css file with the name of the album of the font that you want:

```tsx
// For folklore font
import "swiftie/folklore.css"

// For Lover font
import "swiftie/lover.css"

const App = () => {
    return (
        <>
            <div className="font-folklore">
                folklore
            </div>

            <div className="font-lover">
                Lover &lt;3
            </div>
        <>
    )
} 
```

See that the classes `font-*` are included when you import a font family, this is to make easier 
the use of the fonts.

## All Fonts

In the next table you can see more information about the files, classes and font-family names
of all the fonts.

To use a font, import the file using the `File Name`, and then reference the `Font Family Name`
in a css class, OR use the `class` in a class attribute to automatically apply it.

| Album        | File Name        | Font Family Name | class               |
|--------------|------------------|------------------|---------------------|
| Taylor Swift | taylor-swift.css | "Taylor Swift"   | "font-taylor-swift" |
| Fearless     | fearless.css     | "Fearless"       | "font-fearless"     |
| Speak Now    | speak-now.css    | "Speak Now"      | "font-speak-now"    |
| RED          | red.css          | "Red"            | "font-red"          |
| 1989         | 1989.css         | "1989"           | "font-1989"         |
| reputation   | reputation.css   | "Reputation"     | "font-reputation"   |
| Lover        | lover.css        | "Lover"          | "font-lover"        |
| folklore     | folklore.css     | "Folklore"       | "font-folklore"     |
| evermore     | evermore.css     | "Evermore"       | "font-evermore"     |
| Fearless TV  | fearless-tv.css  | "Fearless TV"    | "font-fearless-tv"  |
| RED TV       | red-tv.css       | "Red TV"         | "font-red-tv"       |
| Midnights    | midnights.css    | "Midnights"      | "font-midnights"    |