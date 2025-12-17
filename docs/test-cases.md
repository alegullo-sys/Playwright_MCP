# Documentacao de testes
## Ambiente e dados de teste
### URL do sistema

- **Ambiente de testes:** `https://automationexercise.com/`

## Massa de Dados
| Campo | Valor |
| --- | --- |
| **nome_usuario** | Alexandre Teste |
| **email_usuario** | alexandre.teste@example.com |
| **senha** | Teste@123 |
| **data_nascimento** | 15/08/1990 |
| **titulo** | Mr |
| **primeiro_nome** | Alexandre |
| **sobrenome** | Gullo |
| **empresa** | Tech Solutions |
| **endereco** | Rua das Flores, 123 |
| **endereco2** | Apto 45 |
| **pais** | Brasil |
| **estado** | Minas Gerais |
| **cidade** | Uberlândia |
| **cep** | 38400-000 |
| **telefone** | +55 34 99999-8888 |

## Casos de teste: Usuario

## CT001: Register User

## **Objetivo**

Criar um novo usuario no site automation exercise

| passo | descrição |
| --- | --- |
| 1 | Launch browser |
| 2 | Navigate to URL http://automationexercise.com |
| 3 | Verify that home page is visible successfully |
| 4 | Click on 'Signup / Login' button |
| 5 | Verify 'New User Signup!' is visible |
| 6 | Enter **nome_usuario** e **email_usuario** |
| 7 | Click 'Signup' button |
| 8 | Verify that 'ENTER ACCOUNT INFORMATION' is visible |
| 9 | Fill details: **titulo**, **nome_usuario**, **email_usuario**, **senha**, **data_nascimento** |
| 10 | Select checkbox 'Sign up for our newsletter!' |
| 11 | Select checkbox 'Receive special offers from our partners!' |
| 12 | Fill details: **primeiro_nome**, **sobrenome**, **empresa**, **endereco**, **endereco2**, **pais**, **estado**, **cidade**, **cep**, **telefone** |
| 13 | Click 'Create Account' button |
| 14 | Verify that 'ACCOUNT CREATED!' is visible |
| 15 | Click 'Continue' button |
| 16 | Verify that 'Logged in as username' is visible |
| 17 | Click 'Delete Account' button |
| 18 | Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button |

## Massa de Dados
| Campo | Valor |
| --- | --- |
| **email_usuario_correto** | alexandre@play.com |
| **senha_correta** | play |

## CT002: Login User with correct email and password

## **Objetivo**

Logar com um usuario com email e senha corretos

| passo | descrição |
| --- | --- |
| 1 | Launch browser |
| 2 | Navigate to URL http://automationexercise.com |
| 3 | Verify that home page is visible successfully |
| 4 | Click on 'Signup / Login' button |
| 5 | Verify 'Login to your account' is visible |
| 6 | Enter **email_usuario_correto** e **senha_correta** corretos |
| 7 | Click 'Login' button |
| 8 | Verify that 'Logged in as username' is visible |
| 9 | Click 'Logout' button |
| 10 | Verify 'Login to your account' is visible |