# DecorarComArt - Decoração & Cortinas

Projeto criado para a gestão e vitrine online da loja de decorações, cortinas e persianas, com painel administrativo e sistema financeiro integrados.

## 🚀 Tecnologias Utilizadas
- **Frontend:** React + Vite
- **Estilização:** CSS Vanilla (com design elegante e claro)
- **Ícones:** Lucide React
- **Banco de Dados:** LocalStorage (Navegador) do administrador/cliente
- **Hospedagem:** Vercel (CI/CD automático via GitHub)

## 🌐 Deploy e Repositório
- **Repositório GitHub:** `https://github.com/pbaduaneira-lang/decorarcomart.git`
- **Deploy:** A cada push na branch `main`, a Vercel compila e atualiza o site automaticamente em produção.

## 🔐 Acesso Administrativo
O site possui um painel administrativo oculto. Para acessá-lo, clique no botão "Administrador" (ícone de usuário) na página inicial.
- **E-mail:** `decorarcomart@gmail.com`
- **Senha:** `Maju1234`
*(As credenciais estão fixadas por segurança no arquivo `src/utils/storage.js` na função `loginAdmin`, evitando cadastros não autorizados).*

## 📦 Banco de Dados Local (LocalStorage)
O projeto não utiliza backend externo, todos os dados são salvos no navegador do administrador utilizando chaves específicas.

## 🛠 Funcionalidades Implementadas
### Vitrine Pública (Cliente)
- Exibição de produtos (Cortinas, Persianas, Papel de Parede, Decoração).
- Botão do WhatsApp para orçamentos e instalação.

### Painel Administrativo (Admin)
- **Modo Loja:** CRUD completo.
- **Modo Financeiro:** Dashboard de fluxo de caixa.

---
*Documentação gerada por Antigravity (Gravi).*
