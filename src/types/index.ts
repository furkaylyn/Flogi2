export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: Date;
}

export interface Customer {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  totalDebt: number;
  totalCredit: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface Invoice {
  id: string;
  customerId: string;
  customerName: string;
  items: InvoiceItem[];
  total: number;
  date: Date;
  status: 'draft' | 'sent' | 'paid';
}

export interface InvoiceItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}