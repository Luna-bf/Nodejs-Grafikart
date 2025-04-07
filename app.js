import fs from 'node:fs'

/*Ici je demande à la variable content de lire le fichier 'demo.txt'*/
const content = fs.readFileSync('demo.txt', {encoding: 'utf-8'}); /*De base, la console affiche le contenu sous format buffer,
                                                                  je lui demande donc de l'encoder en format utf-8*/

console.log(content); /*Je fais un console.log de la variable content pour afficher son contenu dans la console*/