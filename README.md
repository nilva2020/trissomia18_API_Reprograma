# Trissomia_18_API_reprograma<img src="https://i.ibb.co/XJq1MtR/logo.png" alt="logo" border-radius="10px" width="40px" height="40px"></a>

___

<img src="https://bestanimations.com/media/dna/119356307dna-rna-chromosomes-double-helix-rotating-animated-gif-6.gif#.Ytn1axr8B_U.link">



 Esta API foi desenvolvida para o projeto final Todas em Tech - Dev Back-End proposto pela [{reprograma}](https://reprograma.com.br/).
___

 A proposta desta API é  para a promoção de saúde, e seu objetivo é otimizar o acesso dos pacientes aos profissionais especializados no tratamento da **Trissomia 18**, mais conhecida como a  **Sindrome de Edwards**.

##### Objetivo: 
É desenvolver tecnologia para promover, somar e impactar no bem-estar físico, psicossocial, qualidade do tratamento e o prolongamento de vida destes pacientes.
Proposta inicial desta API é cumprir um importante papel promovendo ao usuário uma lista de profissionais especializados em **Trissomia 18** em nosso território nacional.


##### Complementação futura - Health Tech

* Doadores de sangue
* Fisioterapeutas
* Fonoaudiólogos
* Psicólogos
* Laboratórios
* Fornecedores Alimentação parenteral e enteral
* Doação de insumos
* Carona voluntária
* Hospedagem 

___
##### Funcionalidades da Aplicação:
#####  Cadastro Médico <a href="https://imgbb.com/"><img src="https://i.ibb.co/hXjXYY7/medico.png" alt="medico" border="0" width="20px" height="20px"></a>

* Cadastrar novo médico ✔️
* Retornar todos os medicos ✔️
* Retornar médico por Id ✔️
* Editar parcialmente dados do cadastro médico ✔️
* Deletar médico por Id ✔️


##### Cadastro Paciente <a href="https://imgbb.com/"><img src="https://i.ibb.co/q1xNstZ/paciente.png" alt="paciente" border="0" width="20px" height="20px"></a>
*  Cadastrar novo paciente ✔️
*  Retornar todos os pacientes ✔️
*  Retornar pacientes por Id ✔️
*  Editar parcialmente dados do cadastro paciente ✔️
*  Deletar paciente por Id ✔️

___
##### Como acessar localmente esta API?
Use a **PORTA 8018**

**http://localhost:8018/** + endpoints de requisição.

___
##### Como acessar o Swagger localmente?

http://localhost:8081/my_routes_documentation/#/
___
##### Onde encontrar a documentação do Deploy?
 Click aqui 👇

* [Heroku - Swagger](https://trissomia18-api-reprograma.herokuapp.com/my_routes_documentation/#/)

* [Heroku - Deploy](https://trissomia18-api-reprograma.herokuapp.com/)

* [Swagger - Clique aqui](http://localhost:8081/my_routes_documentation/)

___
##### Endpoints para acesso local POSTMAN
OBS: Para acessar atraves do Heroku insira o codigo
`https://trissomia18-api-reprograma.herokuapp.com`+ `Endpoint`


**Medico**

 Verbs    | EndPoint    |  Descrição                  | Status
 --------:|------------:|----------------------------:|--------:
 Get      |/allmedic    | retorna todos os medicos    | 200
 Get      |/medic/:id   | retorna medico por Id       | 200
 Post     |/medic       | cadastra um novo medico     | 201
 Patch    |/medic/:id   | edita parcialmente os dados | 200
 Delete   |/medic/:id   | deleta medico por Id        | 200


**Paciente**

 Verbs    | EndPoint     |  Descrição                  | Status
 --------:|-------------:|----------------------------:|--------:
 Get      |/allpatient   | retorna todos os pacientes  | 200
 Get      |/patient/:id  | retorna paciente por Id     | 200
 Post     |/patient      | cadastra um novo paciente   | 201
 Patch    |/patient/:id  | edita parcialmente os dados | 200
 Delete   |/patient/:id  | deleta paciente por Id      | 200



##### Tecnologias utilizadas:
<p>
  <a>
    <a href="https://git-scm.com/"><img alt="Git version" src="https://img.shields.io/badge/Git/GitHub-yellow">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/NodeJS-yellow">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Node version" src="https://img.shields.io/badge/MongoDB%20Atlas-yellow">
    <a href="https://herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/Heroku-yellow">
    <br/>
    <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-yellow">
    <a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-yellow">
    <a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-yellow">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-yellow">
    <a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-yellow">
  </a> 
</p>

___

##### Evolução
<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/nilva2020/trissomia18_API_Reprograma" />
<img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/nilva2020/trissomia18_API_Reprograma" />
<img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/nilva2020/trissomia18_API_Reprograma" />

___
##### Instruções para instalação
`Iniciar`

* FORK  [neste link](<https://github.com/nilva2020/trissomia18_API_Reprograma>);

 * CLONE - terminal local de sua preferência na sua máquina digite o comando:
      `git clone <link_do_fork_do_repositorio>`;

* BRANCH - Crie uma branch para realizar suas contribuições,
digite o comando:
      `git checkout -b feature/<sua_branch>`;

`Depedências`
 *  Ativando as dependências instaladas no package.json execute do comando: `npm install`;

`Execução`
*  EXECUÇÃO DA API - Siga o passo a passo pela ordem abaixo:

1 - Acesse a raiz do projeto;

2 - Renomeie **.env.example** para **.env**

     ⚠️ ATENÇÃO!!! Estes passos são obrigatórios para que a API seja executada de forma correta;

* 2.1 - Insira na **PORT** um número sugiro usar a  8018;

* 2.2 - Insira MONGODB_URL=string de conexão com o banco de dados;
* 2.3 - Insira em **SECRET** a chave RSA.

3 -  Executar a API, insira **npm start** no terminal;

4 - Contribua com o código.

`Enviar o projeto para **GIT HUB**`

1 - Terminal insira git status;

2 - git add .;

3 - git commit -m 'mensagem';

4 - git push origin feature/<sua_branch>;

5 - Pull Request para que suas contribuições sejam adicionadas ao projeto original.

___

##### Fontes Gifs, Img & Icons: 
<p>Créditos DNA "bestanimations.com/gifs"</p>

<a href="https://www.flaticon.com/br/stickers-gratis/fada" title="fada figurinhas">Fada figurinhas criadas por Stickers - Flaticon</a>

https://emojipedia.org/
___
#####  Referências Bibliograficas <a href="https://imgbb.com/"><img src="https://i.ibb.co/6n1Yr5R/livro-de-feiticos.png" alt="livros" border="0" width="30px" height="30px"></a>
[Swagger - Documentação](https://swagger.io/docs/)

[Nodejs - Documentação](https://nodejs.org/pt-br/docs/)

[{reprograma} - Projeto Final](https://github.com/reprograma/on7-porto-s17-s18-projeto-livre)

[try & Catch](https://www.devmedia.com.br/blocos-try-catch/7339)
___

##### Orientadora  &  Monitora<a href="https://imgbb.com/"><img src="https://i.ibb.co/V9Q86PP/fada.png" alt="fada madrinha" border="0" width="50px" height="30px">

* Mayhhara Morais

* Beatriz Ramerindo

___

##### Desenvolvido por
<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/nilva2020/trissomia18_API_Reprograma" />
</a>
<p align="center" > 
  <b>Nilva Pires - Developer Back-End</b>
</p>

___
##### Quer falar comigo? Click Here

<a href="mailto:piresnilva@gmail.com" target="_blank">
<img align="left" src="https://i.ibb.co/rbWnqPH/e-mail.png" alt="e-mail" border="0" width="50px" height="30px">


<a href="https://www.linkedin.com/in/nilva-pires/" target="_blank">
  <img align="center" src="https://i.ibb.co/893NxpL/linkedin.png" alt="linkedin" border="0" width="30px" height="30px">
</a><br />