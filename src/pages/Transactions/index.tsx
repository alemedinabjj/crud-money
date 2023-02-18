import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import * as S from "./styles";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useTransactions } from "../../contexts/TransactionsProvider";

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransacionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.type === "income"
                      ? `R$ ${transaction.price}`
                      : `- R$ ${transaction.price}`}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {formatDistance(new Date(transaction.createdAt), new Date(), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </S.TransacionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
