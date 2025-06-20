# Social Teachers PWA

Uma rede social moderna para professores, desenvolvida com Vue.js 3, TypeScript, Firebase e design responsivo em tema escuro.

## 🚀 Características

- **PWA (Progressive Web App)** - Funciona offline e pode ser instalado como app
- **Autenticação Firebase** - Login com email/senha e Google OAuth
- **Design Moderno** - Tema escuro com gradientes roxo/preto e animações suaves
- **Responsivo** - Funciona perfeitamente em desktop e mobile
- **TypeScript** - Código tipado para maior segurança e produtividade
- **Modular** - Arquitetura organizada por módulos para fácil expansão

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Vue.js 3 + TypeScript + Vite
- **Autenticação**: Firebase Auth
- **Base de Dados**: Firestore
- **Storage**: Firebase Storage
- **Roteamento**: Vue Router 4
- **Estilização**: CSS customizado com variáveis CSS
- **PWA**: Vite PWA Plugin

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Firebase
- Git

## ⚙️ Configuração

### 1. Clone o repositório

\`\`\`bash
git clone <url-do-repositorio>
cd pwa-social-teachers
\`\`\`

### 2. Instale as dependências

\`\`\`bash
npm install
\`\`\`

### 3. Configure o Firebase

1. Acesse o [Console do Firebase](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative a Autenticação (Email/Senha e Google)
4. Crie um banco Firestore
5. Configure o Firebase Storage
6. Copie as configurações do projeto

### 4. Configure as variáveis de ambiente

Edite o arquivo \`src/core/firebase/config.ts\` e substitua pelas suas configurações:

\`\`\`typescript
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "seu-app-id"
}
\`\`\`

### 5. Execute o projeto

\`\`\`bash
npm run dev
\`\`\`

O projeto estará disponível em \`http://localhost:3000\`

## 🏗️ Build para Produção

\`\`\`bash
npm run build
\`\`\`

Os arquivos de produção serão gerados na pasta \`dist/\`

## 📱 Funcionalidades Implementadas

### ✅ Versão 1.0 (Atual)

- **Autenticação**
  - Login com email e senha
  - Login com Google OAuth
  - Cadastro de novos usuários
  - Logout seguro
  - Persistência de sessão

- **Perfil do Usuário**
  - Visualização de perfil
  - Edição de informações pessoais e profissionais
  - Upload de foto de perfil
  - Configuração de redes sociais

- **Dashboard Administrativo**
  - Métricas do sistema
  - Gestão de usuários
  - Status do sistema
  - Atividade recente

- **Interface**
  - Design responsivo
  - Tema escuro moderno
  - Animações e transições suaves
  - Gradientes e efeitos visuais

### 🔄 Próximas Versões (Planejadas)

- **Feed estilo Twitter**
  - Posts de até 250 caracteres
  - Sistema de curtidas
  - Sistema de seguir usuários

- **Criação de Conteúdo**
  - Planos de curso
  - Planos de aula
  - Listas de exercícios
  - Geração de imagens com IA

- **Funcionalidades Sociais**
  - Mensagens privadas
  - Grupos de discussão
  - Compartilhamento de recursos

## 📁 Estrutura do Projeto

\`\`\`
src/
├── assets/           # Estilos globais e recursos
├── components/       # Componentes reutilizáveis
├── core/            # Configurações centrais
│   ├── firebase/    # Configuração do Firebase
│   └── router/      # Configuração de rotas
├── modules/         # Módulos da aplicação
│   ├── auth/        # Módulo de autenticação
│   └── profile/     # Módulo de perfil
├── types/           # Definições TypeScript
├── views/           # Páginas da aplicação
├── App.vue          # Componente principal
└── main.ts          # Ponto de entrada
\`\`\`

## 🔐 Segurança

- Autenticação via Firebase Auth
- Validação de dados no frontend e backend
- Controle de acesso baseado em roles (professor/admin)
- Sanitização de inputs
- HTTPS obrigatório em produção

## 📱 PWA Features

- Instalável como app nativo
- Funciona offline (cache básico)
- Ícones e splash screen personalizados
- Notificações push (planejado)

## 🎨 Design System

### Cores Principais
- **Roxo Primário**: \`#8B5CF6\`
- **Roxo Escuro**: \`#7C3AED\`
- **Roxo Claro**: \`#A78BFA\`
- **Preto**: \`#000000\`
- **Cinza Escuro**: \`#111827\`

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

### Componentes
- Botões com hover effects
- Cards com glass effect
- Inputs com validação visual
- Animações suaves (0.3s ease-in-out)

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify

1. Conecte seu repositório
2. Configure o comando de build: \`npm run build\`
3. Pasta de publicação: \`dist\`

### Firebase Hosting

\`\`\`bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
\`\`\`

## 🧪 Testes

Para executar os testes (quando implementados):

\`\`\`bash
npm run test
\`\`\`

## 📝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/nova-feature\`)
3. Commit suas mudanças (\`git commit -m 'Adiciona nova feature'\`)
4. Push para a branch (\`git push origin feature/nova-feature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Desenvolvedor Principal**: [Seu Nome]
- **Design**: [Nome do Designer]
- **Product Owner**: [Nome do PO]

## 📞 Suporte

Para suporte técnico ou dúvidas:
- Email: suporte@socialteachers.com
- Issues: [GitHub Issues](link-para-issues)
- Documentação: [Wiki do Projeto](link-para-wiki)

## 🔄 Changelog

### v1.0.0 (2025-06-20)
- ✅ Autenticação Firebase completa
- ✅ Sistema de perfis
- ✅ Dashboard administrativo
- ✅ Design responsivo
- ✅ PWA configurado

---

**Social Teachers** - Conectando educadores, transformando a educação. 🎓✨

