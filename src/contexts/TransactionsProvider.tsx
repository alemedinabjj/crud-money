import { createContext, useContext, useEffect, useState } from "react";

interface ITransaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionContextData {
  transactions: ITransaction[];
  // createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

const TransactionContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function getTransactionsList() {
    const response = await fetch("http://localhost:3001/transactions");
    const data = await response.json();

    setTransactions(data);

    console.log(data);
  }

  useEffect(() => {
    getTransactionsList();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
