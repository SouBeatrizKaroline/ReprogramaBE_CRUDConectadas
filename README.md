# API CRUD Reprograma


> Projeto criado para vivenciarmos a criação de uma aplicação


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `<Node.Js />`.
* Você criou um banco de dados mongodb e possui uma url de conexão `<MongoDB>` e o `<MongoDB Compass>`.


## 🚀 Instalando `<API CRUD Reprograma>`

Para instalar o `<API CRUD Reprograma>`, siga estas etapas:

Faça um fork da aplicação em:
```
https://github.com/JulianePires/backend-crud-reprograma-conectadas.git
```
Depois de clonado, no terminal do seu VSCode, digite 
```
npm install
```
para instalar as dependências.

## ☕ Usando `<API CRUD Reprograma>`

Para usar `<API CRUD Reprograma>`, siga estas etapas:

Copie o conteúdo do exemplo de .env com o comando:
```
cp .env.example .env
```

Preencha as informações com os dados de acesso

Existem TODO's espalhados pela aplicação, cumpra-os na ordem:

-  TODO 1: Modificar/criar o schema para adequar à sua aplicação no arquivo de models em /src/infra/database/models
-  TODO 2: Criar os serviços da aplicação em src/services
-  TODO 3: Criar os controllers da aplicação em scr/controllers
-  TODO 4: Criar as rotas da aplicação em src/routes

Rodar a aplicação:
```
npm run dev
```

Utilizando o Thunder Client, clique em New Request e digite no url http://localhost:8080/
```
Testando os endpoints:
 * http://localhost:8080/ METHOD GET => mostra todos os objetos listados no banco de dados.
 * http://localhost:8080/:id METHOD GET => mostra um objeto específico.
 * http://localhost:8080/submit METHOD POST => cadastra um nova objeto.
 * http://localhost:8080/edit/:id METHOD PUT => altera um objeto já cadastrado.
 * http://localhost:8080/delete/:id METHOD DELETE => apaga um objeto pré-cadastrado.
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/JulianePires.png" width="100px;" alt="Foto da Pessoa no GitHub"/><br>
        <sub>
          <b>Juliane Pires</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

[⬆ Voltar ao topo](#APICRUDReprograma)<br>