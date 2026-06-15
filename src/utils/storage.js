const STORAGE_KEY = '@estofados_products';

/**
 * Retorna todos os produtos do banco de dados local.
 */
export const getProducts = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erro ao ler produtos:', error);
    return [];
  }
};

/**
 * Salva a lista completa de produtos no banco de dados local.
 * @param {Array} products 
 */
export const saveProducts = (products) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (error) {
    console.error('Erro ao salvar produtos:', error);
  }
};

/**
 * Adiciona um novo produto ao banco de dados local.
 * @param {Object} product 
 */
export const addProduct = (product) => {
  const currentProducts = getProducts();
  const newProduct = {
    ...product,
    id: Date.now().toString(), // Gera um ID único simples
    createdAt: new Date().toISOString()
  };
  saveProducts([newProduct, ...currentProducts]);
  return newProduct;
};

export const updateProduct = (updatedProduct) => {
  const products = getProducts();
  const updatedList = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
  saveProducts(updatedList);
  return updatedProduct;
};

export const deleteProduct = (id) => {
  const products = getProducts();
  const filteredList = products.filter(p => p.id !== id);
  saveProducts(filteredList);
};

/**
 * Preenche o banco com produtos fictícios iniciais se estiver vazio.
 */
export const seedInitialData = () => {
  const currentProducts = getProducts();
  if (currentProducts.length === 0) {
    const initialProducts = [
      {
        id: '1',
        title: 'Cortina de Linho com Voil',
        description: 'Cortina sob medida de linho puro com forro em voil suíço. Elegância e controle de luminosidade perfeitos para a sua sala.',
        price: '1890.00',
        category: 'Cortinas',
        subcategory: 'Linho',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '2',
        title: 'Persiana Rolô Tela Solar',
        description: 'Persiana em tela solar com bloqueio de 95% dos raios UV. Protege os móveis e mantém a visão externa.',
        price: '450.00',
        category: 'Persianas',
        subcategory: 'Rolô',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3',
        title: 'Papel de Parede Arabesco',
        description: 'Papel de parede texturizado com detalhes em dourado metálico. Rolo de 10m de comprimento.',
        price: '320.00',
        category: 'Papel de Parede',
        subcategory: 'Clássico',
        imageUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80'
      }
    ];
    saveProducts(initialProducts);
  }
};

// --- FINANCEIRO ---
const TRANSACTIONS_KEY = '@estofados_transactions';

export const getTransactions = () => {
  try {
    const data = localStorage.getItem(TRANSACTIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const saveTransactions = (transactions) => {
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

export const addTransaction = (transaction) => {
  const transactions = getTransactions();
  const newTransaction = {
    ...transaction,
    id: Date.now().toString()
  };
  saveTransactions([newTransaction, ...transactions]);
  return newTransaction;
};

export const deleteTransaction = (id) => {
  const transactions = getTransactions();
  saveTransactions(transactions.filter(t => t.id !== id));
};

// --- AUTENTICAÇÃO ---

export const loginAdmin = (email, password) => {
  const adminEmail = 'decorarcomart@gmail.com';
  const adminPass = 'Maju1234';

  if (email === adminEmail && password === adminPass) {
    return { id: 'admin-1', email };
  } else {
    throw new Error('E-mail ou senha incorretos.');
  }
};
