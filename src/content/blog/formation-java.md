---
title: "Formation JAVA"
pubDate: 2026-05-23
author: "Jurol"
image: "image1.png"
tags: ["tech", "hardware"]
slug: formation-java
---

# Formation JAVA

## Compiler Les Fichiers

Compiler les fichiers vers le répertoire build

```
javac -d build *.java
```

Exécuter un fichier du dossier build via le classPath

```
java -cp build ExerciceRunner
```

## POO En Vrac

### Override de hashCode et equals

Le hasCode sert d'indentifiant dans les hashMaps

```java
@Override
public boolean equals(Object obj) {
    Star other = (Star) obj;
    return this.magnitude == other.magnitude;
}

@Override
public int hashCode() {
    return Objects.hash(magnitude);
}
```