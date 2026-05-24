---
title: "Algorithme de tracé de segment de Bresenham"
pubDate: 2026-04-16
author: "Julien Rolland"
image: "image7.png"
tags: ["code", "graphics"]
slug: bresenham-line-generation
---

## Introduction

[Source: Wikipedia](https://fr.wikipedia.org/wiki/Algorithme_de_trac%C3%A9_de_segment_de_Bresenham)

L’algorithme de tracé de segment de Bresenham est un algorithme développé par Jack E. Bresenham en 1962, alors qu’il travaillait dans un laboratoire informatique d’IBM et cherchait à piloter un traceur attaché à une console texte. Cet algorithme a été présenté à la convention de l’ACM en 1963, puis publié en 1965 dans la revue IBM Systems Journal.

L’algorithme détermine quels sont les points d’un plan discret qui doivent être tracés afin de former une approximation de segment de droite entre deux points donnés. Cet algorithme est souvent utilisé pour dessiner des segments de droites sur l’écran d’un ordinateur ou une image calculée pour l’impression. Il est considéré comme l’un des premiers algorithmes découverts dans le domaine de la synthèse d'image.

## Mise En Pratique

[Source: tutorialspoint](https://www.tutorialspoint.com/computer_graphics/line_generation_algorithm.htm)

### Pseudocode

```pseudo
ALGORITHME Bresenham(x0, y0, x1, y1)

    Step 1 Plot the point
    x <- x0
    y <- y0
    AFFICHER (x, y)

    Step 3 − first value for the decision
    dx <- x1 - x0
    dy <- y1 - y0
    p0 <- 2dy − dx

    TANT QUE x < x1 FAIRE
        x <- x + 1

        SI p < 0
            p <- p + 2 * dy
        SINON
            y <- y + 1
            p <- p + 2 * (dy - dx)
        FIN SI

        AFFICHER(x, y)
    FIN TANT QUE

FIN
```

## Implémentation en C

```c
#include <stdio.h>
#include <stdlib.h>

void putPixel(int x, int y) {
    printf("(%d, %d)\n", x, y);
}

void bresenham(int x0, int y0, int x1, int y1) {
    int dx = abs(x1 - x0);
    int dy = abs(y1 - y0);

    int sx = (x0 < x1) ? 1 : -1; 
    int sy = (y0 < y1) ? 1 : -1; 

    int err = dx - dy;

    while (1) {
        putPixel(x0, y0);

        if (x0 == x1 && y0 == y1)
            break;

        int e2 = 2 * err;

        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }

        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }
}

int main() {
    int x0 = 0, y0 = 0;
    int x1 = 6, y1 = 4;

    bresenham(x0, y0, x1, y1);

    return 0;
}
```

## Conclusion

L'algorithme de Bresenham reste un pilier fondamental de l'infographie. Son efficacité et sa simplicité en font un choix privilégié pour le tracé de lignes dans de nombreuses applications, des jeux vidéo aux systèmes embarqués.

Bien que des algorithmes plus récents comme l'algorithme de Wu existent pour l'anti-aliasing, Bresenham demeure irremplaçable pour sa rapidité et sa précision sur grille entière.