import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import * as S from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransacionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                {" "}
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>10/10/2021</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>10/10/2021</td>
            </tr>
          </tbody>
        </S.TransacionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
