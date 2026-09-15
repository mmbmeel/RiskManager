/*
==============================================================
 RISK MANAGER
 Avaliação Prática - Gestão de Projetos de TI
==============================================================

OBJETIVO

Implementar a lógica JavaScript responsável pela análise
qualitativa dos riscos informados na aplicação.

O HTML e o CSS já foram fornecidos pelo professor.

ATENÇÃO:

- Não altere os IDs existentes no HTML.
- Não é necessário alterar o arquivo CSS.
- Toda a lógica deverá ser implementada neste arquivo.
- É permitido utilizar ferramentas de Inteligência Artificial.
- O aluno deverá compreender, explicar e ser capaz de modificar
  o código entregue.

==============================================================
 REGRA DE NEGÓCIO
==============================================================

A pontuação de um risco deverá ser calculada utilizando:

        PONTUAÇÃO = PROBABILIDADE × IMPACTO


Os valores possíveis de probabilidade são:

1 - Muito Baixa
2 - Baixa
3 - Média
4 - Alta
5 - Muito Alta


Os valores possíveis de impacto são:

1 - Muito Baixo
2 - Baixo
3 - Médio
4 - Alto
5 - Muito Alto


CLASSIFICAÇÃO:

1 até 4
→ BAIXO

5 até 9
→ MODERADO

10 até 16
→ ALTO

17 até 25
→ CRÍTICO


Além da classificação, deverá ser considerado se o risco
representa uma:

⚠️ AMEAÇA

ou

🚀 OPORTUNIDADE

==============================================================
 TODO 1 - CAPTURAR O EVENTO DO BOTÃO
==============================================================

Localize no HTML o botão:

    btnAnalisar

Crie um evento para que, quando o usuário clicar no botão,
a análise do risco seja executada.

DICA:

Você poderá utilizar:

    document.getElementById(...)

e um evento de clique.

*/


// TODO 1 - Implemente aqui
document.getElementById("btnAnalisar").addEventListener("click", analisarRisco);

function analisarRisco() {
    const risco = document.getElementById("risco").value;
    const tipo = document.getElementById("tipo").value;
    const probabilidade = document.getElementById("probabilidade").value;
    const impacto = document.getElementById("impacto").value;

    if (risco === "" || tipo === "" || probabilidade === "" || impacto === "") {
        document.getElementById("mensagem").textContent =
            "Preencha todos os campos para realizar a análise.";
        return;
    }

    const pontuacao = Number(probabilidade) * Number(impacto);

    let classificacao;
    let classe;

    if (pontuacao <= 4) {
        classificacao = "BAIXO";
        classe = "baixo";
    } else if (pontuacao <= 9) {
        classificacao = "MODERADO";
        classe = "moderado";
    } else if (pontuacao <= 16) {
        classificacao = "ALTO";
        classe = "alto";
    } else {
        classificacao = "CRÍTICO";
        classe = "critico";
    }

    let recomendacao;

    if (tipo === "ameaca") {
        if (classificacao === "BAIXO") {
            recomendacao = "Acompanhar o risco.";
        } else if (classificacao === "MODERADO") {
            recomendacao = "Monitorar e avaliar ações preventivas.";
        } else if (classificacao === "ALTO") {
            recomendacao = "Planejar uma resposta para redução do risco.";
        } else {
            recomendacao = "Priorizar imediatamente o tratamento deste risco.";
        }
    } else {
        if (classificacao === "BAIXO") {
            recomendacao = "Registrar e acompanhar a oportunidade.";
        } else if (classificacao === "MODERADO") {
            recomendacao = "Avaliar a viabilidade de aproveitamento.";
        } else if (classificacao === "ALTO") {
            recomendacao = "Planejar ações para potencializar a oportunidade.";
        } else {
            recomendacao = "Priorizar ações para explorar a oportunidade.";
        }
    }

    document.getElementById("pontuacao").textContent = pontuacao;
    document.getElementById("classificacao").textContent = classificacao;

    document.getElementById("mensagem").innerHTML = `
        <strong>Risco:</strong> ${risco}<br>
        <strong>Tipo:</strong> ${tipo === "ameaca" ? "Ameaça" : "Oportunidade"}<br>
        <strong>Pontuação:</strong> ${pontuacao}<br>
        <strong>Classificação:</strong> ${classificacao}<br>
        <strong>Recomendação:</strong> ${recomendacao}
    `;
}

/*
==============================================================
 TODO 2 - CRIAR UMA FUNÇÃO PARA ANALISAR O RISCO
==============================================================

Crie uma função responsável pela análise.

Sugestão de nome:

    analisarRisco()

Essa função deverá concentrar o processo principal da aplicação.

Dentro dela serão realizadas as próximas etapas.

*/


// TODO 2 - Implemente aqui



/*
==============================================================
 TODO 3 - OBTER OS DADOS DO FORMULÁRIO
==============================================================

Obtenha os valores informados nos seguintes elementos HTML:

    risco
    tipo
    probabilidade
    impacto


IMPORTANTE:

Os valores de probabilidade e impacto serão utilizados
em uma operação matemática.

Portanto, verifique se será necessário convertê-los
para valores numéricos.

Você poderá utilizar variáveis para armazenar os dados.

*/


// TODO 3 - A implementação poderá fazer parte da função
// analisarRisco().



/*
==============================================================
 TODO 4 - VALIDAR OS DADOS
==============================================================

Antes de realizar qualquer cálculo, verifique se TODOS
os campos foram preenchidos.

Caso algum campo esteja vazio:

1. Não realize o cálculo.

2. Apresente no elemento:

       mensagem

   uma mensagem solicitando que o usuário preencha
   todos os campos.

3. Interrompa a execução da análise.

*/


// TODO 4 - Implemente a validação



/*
==============================================================
 TODO 5 - CALCULAR A PONTUAÇÃO
==============================================================

Calcule a pontuação utilizando:

    pontuação = probabilidade × impacto


Exemplo:

Probabilidade = 4
Impacto = 5

Pontuação:

    4 × 5 = 20


Armazene o resultado em uma variável.

*/


// TODO 5 - Implemente o cálculo



/*
==============================================================
 TODO 6 - CLASSIFICAR O RISCO
==============================================================

Utilize uma estrutura condicional para classificar
a pontuação encontrada.


REGRAS:

1 até 4
    BAIXO

5 até 9
    MODERADO

10 até 16
    ALTO

17 até 25
    CRÍTICO


Além do nome da classificação, será necessário guardar
a classe CSS correspondente.

Exemplo conceitual:

Classificação: BAIXO
Classe CSS: baixo


As classes disponíveis no CSS são:

    baixo
    moderado
    alto
    critico


IMPORTANTE:

A decisão sobre qual estrutura condicional utilizar
faz parte da atividade.

*/


// TODO 6 - Implemente a classificação



/*
==============================================================
 TODO 7 - GERAR UMA RECOMENDAÇÃO
==============================================================

O programa deverá apresentar uma recomendação de acordo
com DUAS informações:

    TIPO DO RISCO
          +
    CLASSIFICAÇÃO


--------------------------------------------------------------
 SE O RISCO FOR UMA AMEAÇA
--------------------------------------------------------------

BAIXO:

"Acompanhar o risco."


MODERADO:

"Monitorar e avaliar ações preventivas."


ALTO:

"Planejar uma resposta para redução do risco."


CRÍTICO:

"Priorizar imediatamente o tratamento deste risco."


--------------------------------------------------------------
 SE O RISCO FOR UMA OPORTUNIDADE
--------------------------------------------------------------

BAIXO:

"Registrar e acompanhar a oportunidade."


MODERADO:

"Avaliar a viabilidade de aproveitamento."


ALTO:

"Planejar ações para potencializar a oportunidade."


CRÍTICO:

"Priorizar ações para explorar a oportunidade."


Crie a lógica necessária para selecionar a recomendação
adequada.

*/


// TODO 7 - Implemente a recomendação



/*
==============================================================
 TODO 8 - APRESENTAR A PONTUAÇÃO
==============================================================

Apresente a pontuação calculada no elemento HTML:

    pontuacao


Exemplo:

    20

*/


// TODO 8 - Atualize o elemento "pontuacao"



/*
==============================================================
 TODO 9 - APRESENTAR A CLASSIFICAÇÃO
==============================================================

Apresente a classificação encontrada no elemento:

    classificacao


Exemplos:

    BAIXO

    MODERADO

    ALTO

    CRÍTICO

*/


// TODO 9 - Atualize o elemento "classificacao"



/*
==============================================================
 TODO 10 - APRESENTAR O DIAGNÓSTICO
==============================================================

Utilize o elemento:

    mensagem

para apresentar um pequeno diagnóstico.


O diagnóstico deverá conter:

- descrição do risco;
- tipo do risco;
- pontuação;
- classificação;
- recomendação.


Exemplo de resultado esperado:


Risco:
Atraso na entrega dos servidores

Tipo:
Ameaça

Pontuação:
20

Classificação:
CRÍTICO

Recomendação:
Priorizar imediatamente o tratamento deste risco.


A forma de construir essa mensagem faz parte da atividade.

*/


// TODO 10 - Implemente a apresentação do diagnóstico



/*
==============================================================
 TODO 11 - ALTERAR VISUALMENTE O RESULTADO
==============================================================

O HTML possui o elemento:

    resultado


O CSS possui quatro classes:

    baixo
    moderado
    alto
    critico


A área de resultado deverá mudar visualmente de acordo
com a classificação encontrada.


Exemplo:

Se o resultado for CRÍTICO, a classe:

    critico

deverá ser aplicada ao elemento "resultado".


ATENÇÃO:

O usuário poderá realizar várias análises.

Por exemplo:

1ª análise → CRÍTICO

2ª análise → BAIXO


Portanto, antes de adicionar a nova classe,
remova qualquer classificação anteriormente aplicada.


DICA:

Pesquise sobre:

    classList.add()

    classList.remove()

*/


// TODO 11 - Implemente a alteração visual



/*
==============================================================
 TESTES MÍNIMOS
==============================================================

Antes de entregar, teste obrigatoriamente diferentes
combinações.


TESTE 1

Tipo:
Ameaça

Probabilidade:
1

Impacto:
2

Pontuação esperada:
2

Classificação esperada:
BAIXO


--------------------------------------------------------------

TESTE 2

Tipo:
Ameaça

Probabilidade:
3

Impacto:
3

Pontuação esperada:
9

Classificação esperada:
MODERADO


--------------------------------------------------------------

TESTE 3

Tipo:
Oportunidade

Probabilidade:
4

Impacto:
4

Pontuação esperada:
16

Classificação esperada:
ALTO


--------------------------------------------------------------

TESTE 4

Tipo:
Ameaça

Probabilidade:
5

Impacto:
5

Pontuação esperada:
25

Classificação esperada:
CRÍTICO


--------------------------------------------------------------

TESTE 5

Deixe pelo menos um campo sem preencher.

Resultado esperado:

O programa NÃO deverá realizar o cálculo e deverá
informar que existem campos não preenchidos.


==============================================================
 REQUISITOS OBRIGATÓRIOS
==============================================================

O código entregue deverá demonstrar o uso de:

[ ] Variáveis

[ ] Operadores aritméticos

[ ] Estruturas condicionais

[ ] Pelo menos uma função

[ ] Manipulação do DOM

[ ] Evento de clique

[ ] Alteração do conteúdo de elementos HTML

[ ] Alteração dinâmica de classes CSS


==============================================================
 USO DE INTELIGÊNCIA ARTIFICIAL
==============================================================

É permitido utilizar ferramentas de Inteligência Artificial
como apoio durante o desenvolvimento.

Entretanto:

O código entregue é de responsabilidade do aluno.

O aluno poderá ser solicitado a:

- explicar uma variável;
- explicar uma função;
- explicar uma estrutura condicional;
- explicar a manipulação do DOM;
- identificar onde determinada regra foi implementada;
- corrigir um erro;
- modificar uma regra do programa;
- prever o resultado de determinada entrada.

Código funcionando sem que o aluno consiga explicar
sua implementação não demonstra domínio da atividade.


==============================================================
                        BOA MISSÃO!
                 🕵️  RISK MANAGER  🚨
==============================================================
*/


/*
==============================================================
 INÍCIO DA IMPLEMENTAÇÃO
==============================================================
*/


// Desenvolva sua solução a partir daqui.