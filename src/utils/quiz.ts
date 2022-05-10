
interface QuizReponseProps {
  id: number;
  response: string;
  isCorrect: boolean
}
export interface QuizProps {
  id: Number;
  answer: String;
  response: Array<QuizReponseProps>
}
export const Quiz: Array<QuizProps> = [
  {
    id: 1,
    answer: `Uma das primeiras teorias evolucionistas apresentadas afirmava que o uso de determinada parte do corpo estimulava o seu desenvolvimento, enquanto seu desuso poderia levar o órgão à atrofia. Além disso, dizia que as características adquiridas durante a vida poderiam ser passadas aos descendentes.  
    
    Essa teoria evolutiva foi proposta por:
    `,
    response: [
      {
        id: 1,
        response: `Charles Darwin.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `Ernst Mayr.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Jean-Baptiste Lamarck`,
        isCorrect: true
      },
      {
        id: 4,
        response: `George Simpson`,
        isCorrect: false
      },
      {
        id: 5,
        response: `Aristóteles.`,
        isCorrect: false
      }
    ]
  }, 
  {
    id: 2,
    answer: `A seleção de bactérias resistentes a antibióticos é uma realidade que tem ocasionado o desenvolvimento de superbactérias, que são resistentes a vários tipos desse medicamento. O desenvolvimento de superbactérias é um bom exemplo do mecanismo de:    
    `,
    response: [
      {
        id: 1,
        response: `seleção natural.`,
        isCorrect: true
      },
      {
        id: 2,
        response: `deriva genética.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `seleção sexual.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `linkage.`,
        isCorrect: false
      },
      {
        id: 5,
        response: `e) pleiotropia.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 3,
    answer: `(Acafe-SC) A teoria evolucionista, proposta por Darwin, foi enriquecida a partir de novos conhecimentos científicos, dando origem à Teoria Sintética da Evolução. Segundo essa teoria, os principais fatores evolucionistas são:    
    `,
    response: [
      {
        id: 1,
        response: `seleção natural, divisão celular e lei do uso e do desuso.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `mutação genética, recombinação genética e seleção natural.`,
        isCorrect: true
      },
      {
        id: 3,
        response: `respiração celular, divisão mitótica e recombinação gênica.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `seleção artificial, divisão mitótica e crossing over.`,
        isCorrect: false
      },
      {
        id: 5,
        response: `e) transmissão das características adquiridas, mutação gênica e divisão celular.`,
        isCorrect: false
      }
    ]
  }, 
  {
    id: 4,
    answer: `(Enem-2010) Alguns anfíbios e répteis são adaptados à vida subterrânea. Nessa situação, apresentam algumas características corporais como, por exemplo, ausência de patas, corpo anelado que facilita o deslocamento no subsolo e, em alguns casos, ausências de olhos.

    Suponha que um biólogo tentasse explicar a origem das adaptações mencionadas no texto utilizando conceitos da teoria evolutiva de Lamarck. Ao adotar esse ponto de vista, ele diria que
    `,
    response: [
      {
        id: 1,
        response: `as características citadas no texto foram originadas pela seleção natural.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `a ausência de olhos teria sido causada pela falta de uso dos mesmos, segundo a lei do uso e desuso.`,
        isCorrect: true
      },
      {
        id: 3,
        response: `o corpo anelado é uma característica fortemente adaptativa, mas seria transmitida apenas à primeira geração de descendentes.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `as patas teriam sido perdidas pela falta de uso e, em seguida, essa característica foi incorporada ao patrimônio genético e então transmitida aos descendentes.`,
        isCorrect: false
      },
      {
        id: 5,
        response: `as características citadas no texto foram adquiridas por meio de mutações e depois, ao longo do tempo, foram selecionadas por serem mais adaptadas ao ambiente em que os organismos se encontram.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 5,
    answer: `(UFV-JULHO/2007) Dentre as afirmativas seguintes, assinale a que NÃO corresponde a uma evidência que apoie a Teoria de Evolução das espécies: 
    `,
    response: [
      {
        id: 1,
        response: `Estudos de anatomia comparada mostram que as semelhanças internas entre seres de espécies diferentes são resultantes de irradiação adaptativa. `,
        isCorrect: false
      },
      {
        id: 2,
        response: `Os embriões dos vertebrados apresentam os mesmos padrões básicos de desenvolvimento, decorrentes do parentesco entre eles.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Os estudos envolvendo fósseis indicam que a vida na terra sofreu alterações ao longo do tempo, além de permitirem comparações com os seres vivos atuais.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Ao longo de sua vida, os seres vivos sofrem alterações de seu material genético, em consequência das pressões seletivas do ambiente em que vivem.`,
        isCorrect: true
      }
    ]
  },
  {
    id: 6,
    answer: `(UFJF) Em relação às evidências da evolução biológica, é correto afirmar que:
    `,
    response: [
      {
        id: 1,
        response: `um órgão vestigial, como o apêndice vermiforme no homem, não é evidência da evolução, porque é uma estrutura atrofiada e sem função aparente.`,
        isCorrect: false        
      },
      {
        id: 2,
        response: `a pata dianteira de um cavalo e a asa de um morcego constituem evidência da evolução, porque são estruturas homólogas, apesar de o cavalo ter perdido os dedos, enquanto no morcego estes não só foram mantidos como alongados.`,
        isCorrect: true        
      },
      {
        id: 3,
        response: `a asa de uma ave e o élitro (asa dura) de um besouro podem ser considerados como evidência da evolução, porque são estruturas análogas, que possuem origem embriológica diferente.`,
        isCorrect: false        
      },
      {
        id: 4,
        response: `os fósseis constituem uma evidência da evolução, porque mostram que os organismos atuais são mais especializados e mais adaptados que os extintos.`,
        isCorrect: false
      },
      {
        id: 5,
        response: `a embriogênese é uma evidência da evolução, porque mostra que uma célula ovo evolui para mórula, blástula, gástrula e embrião, que, finalmente, evolui para o indivíduo adulto.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 7,
    answer: `(PUC-RS) Em evolução, as asas das aves e as asas das borboletas são exemplos de estruturas:
    `,
    response: [
      {
        id: 1,
        response: `homólogas.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `análogas.`,
        isCorrect: true
      },
      {
        id: 3,
        response: `equivalente`,
        isCorrect: false
      },
      {
        id: 4,
        response: `neotênicas.`,
        isCorrect: false
      },
      {
        id: 5,
        response: `coevoluídas.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 8,
    answer: `(UFV) Os gráficos abaixo ilustram as três formas básicas de seleção natural. A distribuição dos fenótipos da progênie, após a seleção, é representada pela linha sólida. Comparativamente, a linha pontilhada representa a geração parental pré-seleção.
    `,
    response: [
      {
        id: 1,
        response: `Em I, a seleção é estabilizadora, pois favorece os atributos médios.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `Em II, a seleção é direcional, pois, favorece um dos atributos extremos.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Em II, a freqüência dos alelos no patrimônio genético é alterada.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Em I, a seleção resulta em maior variabilidade fenotípica.`,
        isCorrect: true
      },
      {
        id: 5,
        response: `Em III, a seleção é disruptiva, pois favorece os atributos extremos.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 9,
    answer:`(UNIFESP) Leia os trechos seguintes, extraídos de um texto sobre a cor de pele na espécie humana. A pele de povos que habitaram certas áreas durante milênios adaptou-se para permitira produção de vitamina D.
À medida que os seres humanos começaram a se movimentar pelo Velho Mundo há cerca de 100 mil anos, sua pele foi se adaptando às condições ambientais das diferentes regiões. A cor da pele das populações nativas da África foi a que teve mais tempo para se adaptar porque os primeiros seres humanos surgiram ali.(Scientific American Brasil, vol.6, novembro de 2002).

Nesses dois trechos, encontram-se subjacentes ideias
    `,
    response: [
      {
        id: 1,
        response: `da Teoria Sintética da Evolução.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `darwinistas.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `neodarwinistas.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `lamarckistas.`,
        isCorrect: true
      },
      {
        id: 5,
        response: `sobre especiação.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 10,
    answer: `(UFES) Os pesquisadores Robert Simmons e Lue Scheepers questionaram a visão tradicional de como a girafa desenvolveu o pescoço comprido. Observações feitas na 
África demonstraram que as girafas que atingem alturas de 4 a 5 metros, geralmente se alimentam de folhas a 3 metros do solo. O pescoço comprido é usado como uma arma nos combates corpo a corpo pelos machos na disputa por fêmeas. As fêmeas também preferem acasalar com machos de pescoço grande. Esses pesquisadores argumentam que o pescoço da girafa ficou grande devido à seleção sexual; machos com pescoços mais compridos deixavam mais descendentes do que machos com pescoços mais curtos.
(Simmons and Scheepers, 1996. American Naturalist Vol. 148: pp. 771-786. Adaptado)
Sobre a visão tradicional de como a girafa desenvolve um pescoço comprido, é 
CORRETO afirmar que:`,
    response:[
      {
        id: 1,
        response: `na visão tradicional baseada em Darwin, a girafa adquire o pescoço comprido pela 
lei de uso e desuso. As girafas que esticam seus pescoços geram uma prole que já nasce 
com pescoço mais comprido e, cumulativamente, através das gerações, o pescoço, em 
média, aumenta de tamanho.`,
        isCorrect:false
      },
      {
        id: 2,
        response: `na visão tradicional baseada em Lamarck, a girafa adquire o pescoço comprido com 
a sobrevivência diferencial de girafas. Aquelas com pescoço comprido conseguem se 
alimentar de folhas inacessíveis às outras, e deixam, portanto, mais descendentes.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `na visão tradicional baseada em Lamarck, a girafa adquire o pescoço comprido pelalei do uso e desuso. Aquelas com pescoço comprido conseguem se alimentar de folhas inacessíveis às outras, e deixam, portanto, mais descendentes.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `na visão tradicional baseada em Darwin, a girafa adquire o pescoço comprido com a sobrevivência diferencial de girafas. Aquelas com pescoço comprido conseguem se alimentar de folhas inacessíveis às outras, e deixam, portanto, mais descendentes.
        `,
        isCorrect: true
      },
      {
        id: 5,
        response: `na visão tradicional baseada em Darwin, a girafa adquire o pescoço comprido com a sobrevivência diferencial de girafas. As girafas que esticam seus pescoços geram uma prole que já nasce com pescoço mais comprido e, cumulativamente, através das gerações, o pescoço, em média, aumenta de tamanho.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 11,
    answer: `A mutação, a migração, a deriva genética e a seleção natural têm efeitos diferentes na variação genética dentro das populações e entre as populações. Considerando populações diferentes, assinale a alternativa que apresenta o fator que tem MAIOR 
CHANCE DE DIMINUIR a variação genética entre populações.
    `,
    response: [
      {
        id: 1,
        response: `Mutação.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `Recombinação.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Deriva genética.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Migração.`,
        isCorrect: true
      },
    ]
  },
  {
    id: 12,
    answer: `Analise as seguintes informações.
Um fazendeiro usou diversas vezes um mesmo inseticida para combater as pragas de sua lavoura. Após algum tempo, observou que o remédio não possuía mais eficácia no combate aos insetos (pragas).
Baseando-se nessas informações e em seus conhecimentos, é CORRETO afirmar que
`,
    response: [
      {
        id: 1,
        response: `os insetos adaptaram-se ao meio ambiente impregnado de inseticida.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `insetos resistentes foram selecionados pelo próprio uso do inseticida.`,
        isCorrect: true
      },
      {
        id: 3,
        response: `insetos submetidos ao uso de inseticidas dependem dele para o seu desenvolvimento.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `o inseticida modificou o ambiente e provocou mutação nos insetos.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 13,
    answer: `Considerando diferentes hipóteses evolucionistas, analise as afirmações abaixo e as respectivas justificativas.
1) O GAFANHOTO É VERDE PORQUE VIVE NA GRAMA! Seguindo esse raciocínio, por viver na grama, o gafanhoto passa a produzir pigmentos verdes que o ajudam a se confundir com o ambiente, passando essa característica para os descendentes.
2) O GAFANHOTO VIVE NA GRAMA PORQUE É VERDE! Segundo esse raciocínio, por ser verde, o gafanhoto fica protegido dos predadores. Conseqüentemente, pode gerar descendentes, aos quais transfere suas características.
    
As afirmações 1 e 2 podem ser atribuídas, respectivamente, a:
    `,
    response: [
      {
        id: 1,
        response: `Lamarck e Darwin.`,
        isCorrect: true
      },
      {
        id: 2,
        response: `Hardy-Weinberg e Lamarck.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Pasteur e Redi.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Spallanzani e Hooke.`,
        isCorrect: false
      },
      {
        id: 5,
        response: `Oparin e Miller.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 14,
    answer: `A deriva genética atua, principalmente, em populações pequenas e pode ocorrer de duas formas. Uma delas acontece quando o tamanho da população é reduzido de maneira drástica de uma geração para outra. Essa forma é conhecida como:
    `,
    response:[
      {
        id: 1,
        response: `Seleção natural.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `Mutação.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Efeito gargalo.`,
        isCorrect: true
      },
      {
        id: 4,
        response: `Efeito fundador.`,
        isCorrect: false
      },
      {
        id: 5,
        response: `Simpatria.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 15,
    answer: `A deriva genética pode acontecer quando uma nova população é estabelecida a partir de poucos indivíduos. Esse caso é conhecido como:
    `,
    response:[
      {
        id: 1,
        response: `Seleção natural.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `Mutação.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Efeito gargalo.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Efeito fundador.`,
        isCorrect: true
      },
      {
        id: 5,
        response: `Simpatria.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 16,
    answer: `Dentre os fatores evolutivos, a deriva genética é um dos mais interessantes por suas características.
Analise as proposições sobre este fator evolutivo.
I. A deriva genética aumenta as frequências de mutações em uma população.
II. Para ocorrer a deriva genética é necessário o mesmo número de machos e fêmeas em uma população.
III. A deriva genética ocorre em populações pequenas.
IV. A deriva genética aumenta a variabilidade gênica de uma população.

Assinale a alternativa correta.`,
    response: [
      {
        id: 1,
        response: `Somente a afirmativa III é verdadeira.`,
        isCorrect: true
      },
      {
        id: 2,
        response: `Somente a afirmativa IV é verdadeira.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Somente as afirmativas I e IV são verdadeiras.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Somente as afirmativas II e III são verdadeiras.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 17,
    answer: `Um pequeno grupo de esquilos se separa do resto da população devido a uma grande inundação. Estes esquilos, confinados a esta nova ilha, começam uma nova população.
    Este é um exemplo de qual dos seguintes?
    `,
    response: [
      {
        id: 1,
        response: `Deriva genética.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `Especiação simpátrica.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Efeito gargalo.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Efeito fundador`,
        isCorrect: true
      }
    ]
  },
  {
    id: 18,
    answer: `Os principais fatores evolutivos que afetam o equilíbrio gênico de uma população mendeliana são: mutação, seleção natural, migração e deriva gênica. Os fatores que contribuem para o aumento da variabilidade genética de uma população são:
    `,
    response: [
      {
        id: 1,
        response: `Mutação e migração.`,
        isCorrect: true
      },
      {
        id: 2,
        response: `Migração e deriva genética.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `Deriva genética e seleção natural.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `Seleção natural e mutação.`,
        isCorrect: false
      }
    ]
  },
  {
    id: 19,
    answer: `Considere as afirmativas a seguir.
I) As mutações, sendo fonte de variabilidade genética, ocorrem continuamente com o propósito de adaptar os indivíduos ao ambiente.
II) A migração permite que se estabeleça fluxo gênico entre populações diferentes, diminuindo as diferenças genéticas entre elas e reduzindo a chance de especiação.
III) A seleção natural não altera a frequência dos genes.
IV) O estabelecimento de uma nova população, a partir de poucos indivíduos que emigram da população original, é um exemplo de princípio ou efeito do fundador.
    
Assinale a alternativa que contém todas as afirmativas CORRETAS.
    `,
    response: [
      {
        id: 1,
        response: `I e II`,
        isCorrect: false
      },
      {
        id: 2,
        response: `I e III`,
        isCorrect: false
      },
      {
        id: 3,
        response: `I e IV`,
        isCorrect: false
      },
      {
        id: 4,
        response: `II e III`,
        isCorrect: false
      },
      {
        id: 5,
        response: `II e IV`,
        isCorrect: true
      }
    ]
  },
  {
    id: 20,
    answer: `Em algumas regiões brasileiras, existem exemplares de Euphorbia heterophylla, uma planta daninha bastante prejudicial à lavoura de soja e que pode ser resistente a herbicidas. Se, após alguns anos, não existir mais o fluxo de genes entre as plantas suscetíveis e resistentes a herbicidas dessa espécie, então ocorrerá:
    `,
    response: [
      {
        id: 1,
        response: `seleção natural.`,
        isCorrect: false
      },
      {
        id: 2,
        response: `irradiação adaptativa.`,
        isCorrect: false
      },
      {
        id: 3,
        response: `isolamento geográfico.`,
        isCorrect: false
      },
      {
        id: 4,
        response: `recombinação gênica.`,
        isCorrect:false
      },
      {
        id: 5,
        response: `isolamento reprodutivo.`,
        isCorrect: true
      }
    ]
  }
]