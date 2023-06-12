#!/bin/sh

git init 
git config user.name "Amorim-EA"
git config user.email "erick.amorim@estudante.ifms.edu.br"
git remote add origin "https://github.com/Amorim-EA/Projeto_Interdisciplinar.git"
git add .
git commit -m "Adicionado as pastas back e front, contendo todos os arquivos importantes, fazendo a separação entre o server e o client" 
git push origin master 