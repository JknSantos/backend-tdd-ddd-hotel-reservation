# Sistema Backend

## Assuntos abordados

- TDD - Test Driven Development

- DDD - Domain Driven Design

- Clean Architecture

## Principais Tecnologias e Ferramentas Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

****

Fala galera, blz?

Preparei esse documento para te auxiliar na compreensão de alguns assuntos que abordaremos ao longo do curso. A ideia desse projeto é introduzir o desenvolvimento de aplicações escaláveis, complexas e bem estruturadas, repleto de conceitos que podem parecer um pouco complicados à primeira vista, mas com paciência e dedicação, tenho certeza de que você vai dominá-los. Vamos lá!

<details>
<summary style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem">Design vs Arquitetura de Softwares</summary>

Sim, esse é um conceito que confunde muito quando estamos analisando e construindo um software. Quando pensamos na arquitetura? Quando pensamos no design? É importante entender como pensar de forma isolada em cada parte do software pode nos trazer clareza sobre o problema que estamos resolvendo.

O **Design do Software** se refere à concepção de como os diferentes módulos e componentes de um sistema vão interagir para atender aos requisitos funcionais e não funcionais. Envolve decisões sobre a estrutura geral do sistema, começa antes de escrever a primeira linha de código à escolha de padrões de projeto e organização de classes e interfaces. O papel do design do software é fornecer todo o planejamento necessário para que o projeto inicie.

Imagine que você está construindo uma casa. O design do software é como a planta da casa, o plano geral que mostra onde ficarão os quartos, a cozinha e o banheiro. Nenhum bloco é colocado antes desse planejamento.

Por outro lado, **Arquitetura do Software** lida com a estrutura de alto nível do sistema. Isso inclui a definição das camadas, módulos e componentes principais, bem como a forma como eles se comunicam entre si. Envolve a escolha de tecnologias e frameworks, além da organização das dependências.

Trazendo a mesma analogia da casa, a arquitetura é a estrutura da casa, como as fundações, as paredes e o telhado.

Essa comparação entre design e arquitetura de software é importante para o projeto que vamos construir, pois vamos abordar dois conceitos: **DDD (Domain Driven Design)**, que lida com o design do software e na analogia da casa, representa toda organização dela, inclusive, definindo onde cada móvel e decoração deve estar para que tudo funcione bem juntos e **Clean Architecture**, lida com a arquitetura do software, seguindo a analogia, é como você projeta a casa para que, se precisar mudar o interior, as fundações e a estrutura não sejam afetadas.
</details>

<details>
<summary style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem">TDD - Test Driven Development</summary>

Test Driven Development que chamamos de TDD (Desenvolvimento Orientado a Testes, em português), consiste na prática de desenvolver um software testável de forma automática, garantindo a confiabilidade da aplicação em relação as suas funcionalidades. Cada parte do código tem um teste que verifica se está fazendo o que deveria. Isso evita que você introduza erros sem perceber e facilita a manutenção do código no futuro. A prática de desenvolver um software guiado por testes, significa que o teste deve ser criado antes da funcionalidade existir, o teste por sua vez, deve falhar e após a implementação da funcionalidade, ele deve passar para garantir que o mínimo esperado da funcionalidade esteja implementada corretamente. Apesar de existir esse fluxo, não necessariamente você deve seguir a risca para que esteja usando a prática do TDD. Caso a implementação da funcionalidade já exista ou seja criada antes do teste, não muda a ideia de criar softwares testáveis.

Quando uma casa está sendo construída, antes de levantar uma parede (assentar os blocos), é necessário traçar a direção e o nível de cada fileira de bloco, assim como definir a altura que a parede deve ter e só depois começar a assentar os blocos, garantindo que a parede estará reta, nivelada e na altura desejada. Esse fluxo pode ser considerado um TDD usando a analogia da construção de uma casa.

Quando estamos falando de testes automatizados, alguns conceitos são importantes compreendermos. Vejamos a seguir:

### Ciclo de vida do TDD

Como explicado anteriormente, consiste em seguir um fluxo onde o teste é escrito primeiro, falha, implementa a funcionalidade, o teste passa, melhora ou refatora a funcionalidade, sempre repetindo esse fluxo. Lembrando que a ordem do fluxo é importante, mas não obrigatória, desde que os testes sejam criados garantindo a confiabilidade do que foi implementado.

<div align="center">

![](https://hackmd.io/_uploads/BJze3xOG6.png)

</div>



### Coverage - Cobertura de Testes

São métricas para analisar quanto o seu código está sendo coberto (testado). Basicamente, conseguimos vizualizar quantas linhas do código foram testadas e quais não foram, além de mapear outras informações para garantir que todo o código tenha sido testado. É muito importante para definir a qualidade dos testes em alguns casos.

### Principais Tipos de Testes

**Testes unitários**

A finalidade do teste unitário é testar uma unidade. Unidade pode ser entendida como uma função, uma classe ou um método. Cada teste unitário testa um comportamento de forma isolada.

**Testes de integração**

Testa a integração entre componentes. Um bom exemplo é quando uma funcionalidade precisa persistir informações no banco de dados, o teste garante que, a conexão com banco, escrita e leitura, aconteceram.

**Testes end to end**

Também chamado de Testes de ponta a ponta, é um tipo de teste que pode ser compreendido de diversas formas, mas basicamente testa um fluxo do software do início ao fim. Isso vai depender do software que está sendo testado, mas se o software possuir interação com o usuário, esse teste deve testar o passo a passo do fluxo do usuário até o resultado final esperado.

### Pirâmide de Testes

Cada tipo de teste tem seu custo se tratando de processamento, portanto, quanto menos custoso, mais são explorados. O processamento de um teste unitário deve ser mais rápido que um teste de integração, que por sua vez, deve ser mais rápido que o teste end to end, nessa ordem.

A pirâmide de testes é como a pirâmide alimentar, onde a base é a parte mais importante. Ela nos diz que devemos ter muitos testes unitários (como blocos de construção individuais), alguns testes de integração (verificar se todas as partes se encaixam) e apenas alguns testes end to end (verificar se a casa inteira funciona).

<div align="center">

![](https://hackmd.io/_uploads/BJuz3gdGT.png)

</div>
</details>

<details>
<summary style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem">DDD - Domain Driven Design</summary>

O Domain-Driven Design (DDD), conforme concebido por Eric Evans em seu livro "Domain-Driven Design: Tackling Complexity in the Heart of Software", é uma abordagem para o desenvolvimento de software que se concentra na modelagem e na compreensão profunda do domínio de negócios ao redor do qual o software está sendo construído.

O conceito central do DDD é que o sucesso de um projeto de software está diretamente relacionado à capacidade de compreender e modelar o domínio em questão. Isso significa que os desenvolvedores devem colaborar ativamente com especialistas no domínio (geralmente os stakeholders do negócio) para capturar o conhecimento essencial e transformá-lo em um modelo que possa ser implementado no software. Aqui está um ponto muito importante a ser compreendido: a prática do DDD começa antes de escrever qualquer linha de código do software, assim como citado quando explicamos a diferença entre design e arquitetura de softwares.

Alguns dos principais elementos e conceitos do DDD incluem:

**Domínio**

É o contexto ou assunto ao redor do qual o sistema está sendo construído. Envolve a identificação e modelagem dos conceitos mais importantes e suas interações. Trazendo a analogia da casa, o domínio é a própria casa, aqui definimos o contexto geral dela, como uma casa inteligente, bem arejada e iluminada, para uma família pequena.

**Subdomínios**

São partes específicas do domínio que têm seus próprios conjuntos de regras e entidades. É útil para dividir o problema em partes gerenciáveis. Então, imagine que aqui começamos a pensar em cada cômodo da casa de forma mais detalhada, como a cozinha, o banheiro, sala, quarto, etc.

**Linguagem Ubíqua**

Estabelece uma linguagem comum entre os desenvolvedores e os especialistas no domínio (Domain Experts). Isso ajuda a evitar mal-entendidos e garante que todos estejam falando a mesma língua quando se referem a conceitos e entidades do domínio.

**Agregados** 

São agrupamentos de entidades relacionadas que são tratadas como uma única unidade. Eles são usados para garantir a consistência e a integridade das operações. A casa possui uma área de lazer, então a área de lazer representa um agregado, que possui uma cozinha com churrasqueira, salão de jogos e piscina.

**Entidades e Objetos de Valor** 

Distingue entre objetos que têm identidade (entidades) e aqueles que são definidos apenas pelos seus atributos (objetos de valor). Se o banheiro, cozinha, quarto, são representados por entidades, podemos dizer que a lâmpada de led é um objeto de valor, pois este objeto possui um valor intrínseco para a casa, independentemente de onde é usado.

**Eventos de Domínio** 

São eventos que representam uma mudança significativa no estado do sistema. Eles são usados para desacoplar partes do sistema e para registrar e reagir a mudanças no domínio. A energia elétrica da casa precisa ser paga para que o fornecimento continue, logo, o pagamento da conta de energia elétrica, pode ser um bom exemplo de eventos de domínio. Outro exemplo usando essa analogia, pode ser o sistema de controle inteligente da casa, onde podemos acender todas as lâmpadas de um cômodo através de um botão ou aplicativo.

O DDD promove a colaboração ativa entre desenvolvedores e especialistas no domínio, incentivando a criação de um modelo de software que reflita com precisão os conceitos e processos fundamentais do negócio. Isso pode resultar em software mais flexível, escalável e adaptável às necessidades em constante mudança do domínio em questão.
</details>

<details>
<summary style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem">Clean Architecture</summary>

A "Clean Architecture", ou "Arquitetura Limpa" em português, é um conceito de arquitetura de software proposto por Robert C. Martin, também conhecido como "Uncle Bob". Essa abordagem visa criar sistemas de software bem estruturados, de fácil manutenção, testáveis e independentes de detalhes de implementação. Aqui começamos a construir, de fato, a casa, baseado na modelagem do domínio desenvolvido usando o DDD.

A Clean Architecture é baseada em princípios sólidos de design de software (SOLID), como o princípio de responsabilidade única (SRP), o princípio aberto/fechado (OCP) e o princípio de inversão de dependência (DIP). Ela também enfatiza a separação de preocupações e a organização do código em camadas.

A estrutura da Clean Architecture geralmente consiste em várias camadas, com as camadas internas contendo lógica de negócios e regras de domínio, e as camadas externas lidando com detalhes de implementação e infraestrutura.

As camadas mais comuns em uma arquitetura limpa são:

**Entidades** 

Representam os conceitos de negócio do sistema e contêm as regras de negócio e a lógica essencial. Elas são independentes de qualquer infraestrutura ou detalhes de implementação.

**Casos de Uso** 

Representam os casos de uso específicos da aplicação. Eles orquestram a interação entre as entidades e as operações necessárias para atingir os objetivos desejados.

**Interfaces** 

São as interfaces de entrada e saída que conectam o sistema ao mundo exterior. Elas incluem as interfaces do usuário, APIs, bancos de dados, entre outros. Essas interfaces são adaptadores que convertem os detalhes de implementação em um formato compatível com o resto do sistema.

**Frameworks e Drivers** 

Esta camada contém todos os detalhes de implementação, como bancos de dados, frameworks, bibliotecas, etc. Ela é responsável por lidar com os detalhes técnicos e a integração com componentes externos.

**Mappers e Presenters**

Ajudam a converter dados entre diferentes formatos e representações, facilitando a comunicação entre as diferentes camadas.

<div align="center">

![](https://hackmd.io/_uploads/HkgjUO8Xa.png)

</div>

A Clean Architecture promove a independência das camadas, permitindo que elas evoluam separadamente. Além disso, ela facilita a escrita de testes automatizados, pois a lógica de negócios está isolada e pode ser testada sem depender de componentes externos.

Essa abordagem ajuda a criar sistemas mais flexíveis, escaláveis e fáceis de manter a longo prazo. Ela também facilita a troca de tecnologias e a adaptação a novos requisitos sem grandes impactos no código existente.
</details>

<details>
<summary style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem">DDD - Sistema para reservas de quartos em um hotel</summary>

Agora vamos colocar em prática a modelagem do domínio de um sistema para reservas de quartos em um hotel, aplicando os conceitos de DDD, entretanto, precisamos entender um pouco sobre um personagem muito importante nesse momento. O Domain Expert, ou o especialista do domínio.

Um Domain Expert é uma pessoa que possui um conhecimento profundo sobre um domínio específico, entendendo as complexidades, os processos e as regras de negócio desse domínio. No contexto do desenvolvimento de software, o domain expert é alguém que pode fornecer insights valiosos para criar uma solução que atenda adequadamente às necessidades e expectativas do negócio. É a pessoa que não sabe ou não expressa nada tecnicamente do software para o desenvolvedor, apenas descreve as regras e nuances da complexidade do domínio. É por esse motivo que existe a linguagem ubíqua. Aqui começa o diálogo entre o especialista do negócio e o desenvolvedor.

### Simulação de Conversa entre Desenvolvedor e Domain Expert:

**Desenvolvedor (Dev):** Bom dia, Sr. Oliveira. Agradecemos muito por sua colaboração em nos ajudar a compreender os detalhes do sistema de reservas de quartos do hotel. Para começar, poderia nos explicar como funcionam as reservas aqui?

**Domain Expert (Oliveira):** Bom dia! Claro, ficarei feliz em ajudar. Aqui no nosso hotel, temos um processo um pouco particular. Os clientes nos informam a quantidade de dias que desejam reservar, em vez de datas específicas. Além disso, as reservas são finais, ou seja, não podem ser alteradas. A única maneira de cancelar uma reserva é solicitando a um funcionário, que fará o cancelamento no sistema.

**Dev:** Entendi, Sr. Oliveira. Essa abordagem é muito clara. Isso significa que os clientes têm mais flexibilidade em relação às datas exatas de sua estadia. E para a disponibilidade dos quartos, como é gerenciada?

**Oliveira:** Exato. A disponibilidade dos quartos é controlada de acordo com a capacidade total por dia. Por exemplo, se um cliente reserva um quarto por quatro dias, isso será refletido na disponibilidade. Nosso sistema garante que a capacidade seja ajustada corretamente.

**Dev:** Entendi, isso oferece uma forma eficiente de gerenciar os recursos. Agora, em relação aos cancelamentos de reservas, como isso é tratado?

**Oliveira:** Quando um cliente deseja cancelar uma reserva, ele deve entrar em contato com um dos nossos funcionários. Eles farão o cancelamento no sistema. Lembrando que, uma vez feito o cancelamento, a reserva não pode ser recuperada.

**Dev:** Compreendido, Sr. Oliveira. Estas práticas são muito valiosas e nos ajudarão a desenvolver um sistema que atenda perfeitamente às necessidades do hotel e dos clientes. Agradeço muito por compartilhar esses detalhes.

**Oliveira:** Fico feliz em contribuir. Estou à disposição para quaisquer outras dúvidas que surgirem durante o desenvolvimento. Desejo muito sucesso no projeto!

Esta simulação de conversa entre o desenvolvedor e o domain expert oferece um exemplo prático de como um especialista no domínio pode fornecer informações cruciais para o desenvolvimento de um sistema de reservas de quartos de hotel com requisitos específicos, como a reserva baseada na quantidade de dias e a política de cancelamento.
</details>