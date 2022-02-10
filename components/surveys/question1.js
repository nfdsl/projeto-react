
import 'survey-react/survey.css';
import * as Survey from 'survey-react';

Survey.JsonObject.metaData.addProperty("question", {name: "score:number"});
Survey.JsonObject.metaData.addProperty("itemvalue", {name: "score:number"});

var json = {
    locale: "pt-br",
    showProgressBar: "bottom",
    title: 'PADRÕES DE FERRAMENTA AVALIATIVA DO CEO',
    pages: [

        {
            title: 'Formação Profissional',
            questions: [
                {
                    name: "pergunta 1",
                    type: "radiogroup",
                    title: "Qual a sua formação no CEO?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Gerente",
                            score: 0
                        },
                        {
                            value:"Cirurgião Dentista que atua nas especialidades do CEO",
                            score: 0
                        }
                    ]
                },

                {
                    type: "radiogroup",
                    name: "pergunta 2",
                    title: "Você tem formação em saúde coletiva/gestão pública?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 1
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                    visibleIf: "{pergunta 1}='Gerente'"
                },
                {
                    type: "checkbox",
                    name: "pergunta 3",
                    title: "Em qual(is) especialidade(s) você atua no CEO? ",
                    isRequired: false,
                    hasOther: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Cirurgia Oral",
                            score: 0
                        },
                        {
                            value:"Endodontia",
                            score: 0
                        },
                        {
                            value:"Pacientes com necessidades especiais",
                            score: 0
                        },
                        {
                            value:"Periodontia",
                            score: 0
                        },
                        {
                            value:"Estomatologia",
                            score: 0
                        },
                        {
                            value:"Outra",
                            score: 0
                        },
                        {
                            value:"Não se aplica",
                            score: 0
                        }                                                
                    ],
                    visibleIf: "{pergunta 1}='Cirurgião dentista que atua nas especialidades do CEO'"
                },
                {
                    type: "radiogroup",
                    name: "pergunta 4",
                    title: "Você tem pós graduação na especialidade de atuação?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 1
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
            ]
        },
        {
            title: " Perfil do Respondente",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 5",
                    title: "Qual o seu sexo?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Masculino",
                            score: 0
                        },
                        {
                            value:"Feminino",
                            score: 0
                        },
                        {
                            value:"Prefere não informar",
                            score: 0
                        }
                    ]
                },
                {
                    name: "pergunta 6",
                    type: "text",
                    inputType: "date",
                    title: "Idade",
                    isRequired: true,
                    autoComplete: "bdate",
                    score: 0
                },
            ]
        },
        {
            title: "Qualificação e Reconhecimento Profissional",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 7",
                    title: "Há um plano de carreira para profissionais do CEO?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 1
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 8",
                    title: "O municicípio promoveu ações de educação permanente nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 1
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    name: "pergunta 9",
                    type: "radiogroup",
                    title: "As ações de educação permanente contemplam as demandas e necessidades de equipe?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Contemplam muito",
                            score: 4
                        },
                        {
                            value:"Contemplam",
                            score: 3
                        },
                        {
                            value:"Contemplam razoavelmente",
                            score: 2
                        },
                        {
                            value:"Contemplam pouco",
                            score: 1
                        },
                        {
                            value:"Não contemplam",
                            score: 0
                        }
                    ],
                    visibleIf: "{pergunta 8}='Sim'",
                },
                {
                    type: "radiogroup",
                    name: "pergunta 10",
                    title: "A equipe profissional utilizou o Telessaúde(teleeducação) nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 1
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
            ]
        },
        {
            title: "Caracterização do CEO",
            questions: [
                {
                    name: "pergunta 11",
                    type: "radiogroup",
                    title: "Qual o tipo de CEO?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Tipo do CEO I ",
                            score: 0
                        },
                        {
                            value:"Tipo do CEO II",
                            score: 0
                        },
                        {
                            value:"Tipo do CEO III",
                            score: 0
                        },
                    ]
                },
                {
                    type: "radiogroup",
                    name: "pergunta 12",
                    title: "Além das especialidades mínimas, esse CEO oferta outras especialidades? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 1
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    name: "pergunta 13",
                    type: "radiogroup",
                    title: "O CEO possui gerente?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Sim, profissional atua exclusivamente como Gerente do CEO.",
                            score: 2
                        },
                        {
                            value:"Sim, profissional acumula a atividade clínica e de Gerente no CEO.",
                            score: 1
                        },
                        {
                            value:"Não há Gerente",
                            score: 0
                        },
                    ]
                },
            ]
        },
        {
            title: "Ambiência de trabalho",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 14",
                    title: "Como estão as condições físicas de trabalho: iluminação, ventilação (circulação de ar), conservação de pisos, paredes e teto, instalações elétricas, portas, janelas, vidros e extintor, de acordo com a regulamentação sanitária (instalações físicas, equipamentos e procedimentos) e ainda abastecimento de água, disposição dos resíduos líquidos e sólidos, etc.?",
                    colCount: 1,
                    choices: [
                        {
                            value:"Muito bom (cumpre Todas)",
                            score: 4
                        },
                        {
                            value:"Bom (não cumpre 1)",
                            score: 3
                        },
                        {
                            value:"Regular (não cumpre 2)",
                            score: 2
                        },
                        {
                            value:"Ruim  (não cumpre 3)",
                            score: 1
                        },
                        {
                            value:"Muito ruim (não cumpre 4 ou +)",
                            score: 0
                        }
                    ]
                },
                {
                    name: "pergunta 15",
                    type: "radiogroup",
                    title: "O consultório odontológico passou por serviços de manutenção das instalações físicas e dos equipamentos odontológicos de forma regular e sistemática nos últimos 6 meses?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Sim, apenas para instalações físicas.",
                            score: 1
                        },
                        {
                            value:"Sim, apenas para equipamentos.",
                            score: 1
                        },
                        {
                            value:"Ambos",
                            score: 2
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ]
                },
            ]
        },
        {
            title: "Disponibilidade de Insumos, Instrumentais e Equipamentos",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 16",
                    title: "O CEO suspendeu algum atendimento por falta de insumos ou instrumentais nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 17",
                    title: "O CEO suspendeu algum atendimento por não ter equipamento(s) funcionando adequadamente nos últimos 6 meses?  ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 18",
                    title: "Houve disponibilidade de Equipamentos de Proteção Individual (EPI) de forma regular e suficiente nos últimos 6 meses?  ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
            ]
        },
        {
            title: "Disponibilidade de Recursos Tecnológicos",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 19",
                    title: "Houve computador em condições de uso para os dentistas nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 20",
                    title: "A Unidade forneceu acesso à internet nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 21",
                    title: "Existe prontuário eletrônico em uso nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 22",
                    title: "Está integrado a rede de dados em saúde?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        },
                        {
                            value:"Não se aplica",
                            score: 0
                        }                        
                    ],
                    colCount: 0,
                    visibleIf: "{pergunta 21}='Sim'",
                },
            ]
        },
        {
            title: "Demanda e Organização da Agenda",
            questions: [
                {
                    name: "pergunta 23",
                    type: "radiogroup",
                    title: "O acesso às especialidades mínimas (Cirurgia, Endodontia, Periodontia, Estomatologia e Atendimento a Pacientes com necessidades especiais) do CEO se deu por qual tipo de demanda nos últimos 6 meses? ",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        {
                            value:"Apenas Espontânea ",
                            score: 0
                        },
                        {
                            value:"Apenas Referenciada ",
                            score: 2
                        },
                        {
                            value:"Mista (Espontânea e Referenciada) ",
                            score: 1
                        }                          
                    ]
                },
                {
                    type: "radiogroup",
                    name: "pergunta 24",
                    title: "A marcação da consulta inicial do usuário no CEO foi feita pela Unidade Básica de Saúde (diretamente com o CEO ou por central de regulação) nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 25",
                    title: "O CEO fez a gestão da lista de  espera de usuários nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 26",
                    title: "O CEO realizou ações para diminuir o absenteísmo dos usuários nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
            ]
        },
        {
            title: "O CEO e a Rede de Atenção",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 27",
                    title: "A Equipe do CEO realizou matriciamento ou ações de apoio para as Equipes de Saúde Bucal da Atenção Primária na resolução de casos considerados complexos nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 28",
                    title: "A equipe profissional utilizou o Telessaúde como suporte às ações do cuidado (ex. teleconsulta, teleatendimento) nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 29",
                    title: "O CEO recebeu o usuário referenciado da Unidade Básica de Saúde com documento de referência nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 30",
                    title: "Qual tipo de documento?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Escrito",
                            score: 1
                        },
                        {
                            value:"Eletrônico",
                            score: 2
                        },
                        {
                            value:"Não se aplica",
                            score: 0
                        },                       
                    ],
                    colCount: 1,
                    visibleIf: "{pergunta 29}='Sim'"
                },
                {
                    type: "radiogroup",
                    name: "pergunta 31",
                    title: "Existem protocolos clínicos pactuados que orientem o encaminhamento de pacientes da Atenção Primária aos CEO?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 32",
                    title: "Foi realizada a contrarreferência para as Equipes de Saúde Bucal da Atenção Primária nos últimos 6 meses?  ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 33",
                    title: "Qual tipo de documento?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Escrito",
                            score: 1
                        },
                        {
                            value:"Eletrônico",
                            score: 2
                        },
                        {
                            value:"Não se aplica",
                            score: 0
                        }
                    ],
                    colCount: 1,
                    visibleIf: "{pergunta 32}='Sim'"
                },
                {
                    type: "radiogroup",
                    name: "pergunta 34",
                    title: "A equipe do CEO entrou em contato com equipe hospitalar para ações conjuntas (troca de informações, apoio etc) nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 35",
                    title: "Houve garantia de referenciamento para atendimento hospitalar nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
            ]
        },
        {
            title: "Planejamento Monitoramento e a Avaliação",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 36",
                    title: "A equipe do CEO realizou ações de planejamento nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 37",
                    title: "Com que frequência a equipe do CEO realizou ações de avaliação e/ou monitoramento das metas do cumprimento de indicadores nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Mensal",
                            score: 4
                        },
                        {
                            value:"Bimestral",
                            score: 3
                        },
                        {
                            value:"Trimestral",
                            score: 2
                        },
                        {
                            value:"Outra",
                            score: 1
                        },
                        {
                            value:"Não realizou",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 38",
                    title: "Os resultados do Monitoramento e Avaliação dos indicadores de produção do CEO são discutidos e considerados no planejamento?? ",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sempre",
                            score: 4
                        },
                        {
                            value:"Na maioria das vezes",
                            score: 3
                        },
                        {
                            value:"Ás vezes",
                            score: 2
                        },
                        {
                            value:"Raramente",
                            score: 1
                        },
                        {
                            value:"Nunca",
                            score: 0
                        }                        
                    ],
                    colCount: 1,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 39",
                    title: "Com que frequência a equipe do CEO realizou autoavaliação do serviço nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Mensal",
                            score: 4
                        },
                        {
                            value:"Bimestral",
                            score: 3
                        },
                        {
                            value:"Trimestral",
                            score: 2
                        },
                        {
                            value:"Outra",
                            score: 1
                        },
                        {
                            value:"Não realizou",
                            score: 0
                        }
                    ],
                    colCount: 1,
                    
                },
            ]
        },
        {
            title: 'Avaliação Geral do CEO',
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 40",
                    title: "Classifique a relevância deste estabelecimento de saúde e seus serviços na rede atenção em Saúde Bucal no SUS",
                    choices: [
                        {
                            value:"Muito Relevante",
                            score: 4
                        },
                        {
                            value:"Relevante",
                            score: 3
                        },
                        {
                            value:"Indiferente",
                            score: 2
                        },
                        {
                            value:"Pouco Relevante",
                            score: 1
                        },
                        {
                            value:"Nenhuma Relevância",
                            score: 0
                        }                        
                    ],
                    colCount: 1,
                    isRequired: true
                },
            ]
        },
        {
            title: "Participação, Controle Social",
            questions: [
                {
                    type: "radiogroup",
                    name: "pergunta 41",
                    title: "O CEO realizou ou teve mecanismo de avaliação de satisfação do usuário nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },

                {
                    type: "radiogroup",
                    name: "pergunta 42",
                    title: "O CEO disponibilizou canais de comunicação com os usuários de forma permanente nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        {
                            value:"Sim",
                            score: 0
                        },
                        {
                            value:"Não",
                            score: 0
                        }
                    ],
                    colCount: 0,
                },

            ]
        },
    ]
};




export default json