# 🎉 **Amigo Secreto** 🎉

Bem-vindo ao **Amigo Secreto**! Este projeto foi desenvolvido como parte do **Challenge Amigo Secreto** do programa de estudos da **Oracle One**. O objetivo é praticar lógica de programação, criando uma aplicação simples de **Amigo Secreto**, onde os usuários podem adicionar nomes, sortear amigos secretos e reiniciar o sorteio.

## 🚀 Funcionalidades

- ➕ **Adicionar amigos** à lista.
- 🎲 **Sortear um amigo secreto** de forma aleatória.
- 💡 **Exibir o resultado** do sorteio de forma clara.
- 🔄 **Reiniciar o sorteio** e adicionar novos amigos.
- ⚠️ **Validação de entradas** para garantir que nomes duplicados ou vazios não sejam inseridos.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Para estruturar a página e criar a interface.
- **CSS**: Para estilizar a página e deixar a interface bonita.
- **JavaScript**: Para implementar a lógica interativa (adicionar amigos, sorteio, etc.).

## 📂 Estrutura de Arquivos

- `index.html`: O arquivo principal da aplicação com a estrutura HTML.
- `style.css`: O arquivo de estilização que deixa a página bonita.
- `app.js`: O arquivo JavaScript que contém toda a lógica da aplicação.
- **`/assets/`**: Pasta que contém as imagens utilizadas no HTML, como o ícone de sorteio e a imagem representativa do amigo secreto.

## 🌐 Acesse o Projeto

Você pode acessar o projeto online através do seguinte link:

[Amigo Secreto - Projeto Vercel](https://one-oracle-next-education-nlqkykppe-oliveira028s-projects.vercel.app/)

## 💻 Como Usar

1. Abra o arquivo `index.html` no seu navegador.
2. Na seção de entrada, digite o nome de um amigo no campo de texto e clique no botão **"Adicionar"**.
3. A lista de amigos será atualizada automaticamente.
4. Clique no botão **"Sortear amigo"** para escolher aleatoriamente um amigo secreto.
5. Se desejar, clique no botão **"Novo Sorteio"** para reiniciar a lista e sortear novamente.

## 🧩 Desafios Enfrentados

Durante o desenvolvimento deste projeto, os maiores desafios foram relacionados à **tratativa de dados**. Como a aplicação permite que os usuários adicionem nomes à lista de amigos, foi fundamental garantir que as inserções fossem feitas de forma correta. Alguns dos desafios específicos incluíram:

- 🔍 **Validação de Dados**: Garantir que o nome inserido não fosse vazio ou repetido. Isso exigiu o uso de condições para validar as entradas e alertar os usuários quando necessário.
  
- ✨ **Formatação de Nomes**: Outro desafio foi garantir que os nomes dos amigos fossem formatados corretamente, com a primeira letra maiúscula e as demais minúsculas, mesmo que o usuário digitasse em letras minúsculas ou com espaços extras.

- 🗃️ **Manipulação de Dados**: Trabalhar com o armazenamento e exibição da lista de amigos de forma eficiente, garantindo que a lista fosse atualizada corretamente sempre que um novo nome fosse adicionado ou removido.

Esses desafios foram resolvidos por meio do uso de validações simples, funções de formatação de strings e estruturação cuidadosa do código para garantir que a experiência do usuário fosse intuitiva e sem erros.

## 📸 Exemplos de Funcionamento

### 1. **Erro de Campo de Nome Vazio ao Tentar Sortear**
Caso o usuário tente sortear um amigo sem ter adicionado amigos à lista ou deixe o campo de nome vazio, o sistema exibirá um erro.

![Erro de campo de nome vazio ao tentar sortear](img_README/Erro%20de%20campo%20de%20nome%20vazio%20ao%20tentar%20sortear.png)

### 2. **Erro de Campo de Nome Vazio**
Se o campo de nome for deixado vazio ao tentar adicionar um amigo à lista, o sistema alerta o usuário.

![Erro de campo de nome vazio](img_README/Erro%20de%20campo%20de%20nome%20vazio.png)

### 3. **Resultado do Sorteio**
Após realizar o sorteio, o resultado do amigo secreto será exibido.

![Resultado do Sorteio](img_README/Resultado%20do%20Sorteio.png)

### 4. **Tratativa de Letras no Resultado**
Os nomes adicionados são formatados corretamente, com a primeira letra de cada palavra em maiúscula.

![Tratativa de letras no resultado](img_README/Tratativa%20de%20letras%20resultado.png)

### 5. **Tratativa de Letras na Inserção**
Os nomes inseridos pelos usuários também são tratados, com a primeira letra em maiúscula, mesmo que o usuário digite em minúsculas.

![Tratativa de letras](img_README/Tratativa%20de%20letras.png)

## 🤝 Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b nova-funcionalidade`).
3. Faça as modificações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório (`git push origin nova-funcionalidade`).
5. Abra um pull request.

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
