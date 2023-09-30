# Especificação do Projeto

Os pontos mais relevantes do projeto foram idealizados, com base no levantamento de perfis dos principais usuários em um trabalho de coleta de dados feito pelos membros da equipe. Os parâmetros e dados coletados foram consolidados na forma de perfis e histórias de usuários.

## Perfis de Usuários

| <img src="" title="Gabriel Carvalho" align="left"> | <h2 align="right"><b>Gabriel Carvalho</b></h2></br></br></br> <p align="left">Idade: 38 anos <br/><br/> Ocupação: Empresário (Proprietário de uma rede de supermercados). <br/><br/> Hobbies: Futebol e basquete. <br/><br/> História: Nasceu em uma família humilde e, portanto, sempre valorizou a importância de um prato de comida na mesa.</p> |
| --- | --- |
| Motivação: Garantir que todos tenham acesso a alimentos nutritivos e, consequentemente, não enfrentem dificuldades para se alimentarem, por meio da doação de produtos para locais de apoio e distribuição para famílias carentes. | Necessidade: Encontrar organizações interessadas em contribuir e distribuir, de modo eficiente e eficaz, alimentos que estariam próximos do vencimento; |
| <img src="" title="Ana Silva" align="left"> | <h2 align="right"><b>Ana Silva</b></h2></br></br></br> <p align="left">Idade: 29 anos <br/><br/> Ocupação: Assistente Social. <br/><br/> Hobbies: Leitura e jardinagem. <br/><br/> História: Cresceu em uma comunidade carente e testemunhou os desafios que as famílias enfrentavam para atender às necessidades básicas de cada um dos membros. Formada em Serviço Social, optou por dedicar-se a causas sociais e tornou-se representante de uma ONG voltada para o combate à insegurança alimentar no Brasil.</p> |
| Motivação: Tendo um sistema consolidado que atenda as demandas alimentares de famílias carentes, iria poder fazer a ponte entre usuários do Serviço Social e potenciais doadores com segurança e certeza da qualidade e diversificação de produtos essenciais para os mais necessitados. | Necessidade: <ul> <li>Encontrar apoio financeiro para sustentar os programas da organização, como doação e distribuição de alimentos; </li> <li> Localizar voluntários dedicados ao aumento do alcance do papel desempenhado pela ONG, visando atingir um maior número de pessoas em situação de vulnerabilidade alimentar</li> </ul>  |

<!-- [Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Nome </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">...</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>...</td>
</tr>
</tbody>
</table> -->


## Histórias de Usuários

<!-- [Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.] -->

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|Proprietário de Supermercado| Doar alimentos que seriam descartados| Contribuir para a sociedade e evitar o desperdício.|
| Agente social|Coletar alimentos|Repassar alimentos à população em situação de rua.|
|Dirigente de ONG|Acesso a alimentos a baixo custo|Dar continuidade ao seu projeto que visa acabar com a fome em uma região.|
|Diretor de Mercado|Doar/vender alimentos próximos ao vencimento|Transmitir uma imagem positiva do estabelecimento para os consumidores.

## Requisitos do Projeto

<!-- [Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.] -->

### Requisitos Funcionais

<!-- [Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais] -->

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | O site deve permitir que os estabelecimentos do ramo alimentício encontre meios para doar | Alta   |
|  RF- 02  |  O site deverá permitir que entidades do Terceiro Setor colete os alimentos | Alta   |
|RF- 03|O site deverá permitir visualizar informações de contato do mantenedor do site|Média|
|RF- 04|O site deverá possuir um sistema de controle de qualidade|Alta|
|RF- 05|O site deverá possuir botões de suas redes sociais|Baixa|
|RF- 06|O site deverá possuir meios de comunicação entre as partes|Alta|
|RF- 07|O site deverá contemplar um mapa com os estabelecimentos mais próximos|Média|

**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

<!-- [Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais] -->

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |Será feito o deploy do site em host acessível|Alta|
|RNF-02|O site será criado de modo responsivo, obedecendo  à regra do mobile first|Alta|
|RNF-03|O site deverá ser compatível com as mais novas versoẽs de navegadores de internet|Alta|
|RNF-04|O site deverá estar disponível por, no mínimo, 23 horas por dia|Alta|
|RNF-05|O site deverá retornar consultas em até 1 segundo|Média|
|RNF-06|O site deverá manter o tempo de resposta constante até a 100ª requisição por segundo|Média|

**Prioridade: Alta / Média / Baixa.
