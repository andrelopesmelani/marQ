import React, { ReactNode, Children, ReactElement, useState } from "react";
import Pagination from "./Pagination";
import "./styles.scss";
import Loading from "../Loading";

interface TableProps {
  data: any[];
  children: ReactNode;
  itemsPerPage: number;
  loading: boolean;
}

const Table: React.FC<TableProps> = ({ data, children, itemsPerPage = 10, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setCurrentItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const lastItem = currentPage * currentItemsPerPage;
  const firstItem = lastItem - currentItemsPerPage;
  const currentTableData = data.slice(firstItem, lastItem);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="tableContainer">
            <table className="table">
              <thead>
                <tr>
                  {Children.map(children, (child) => (
                    <th>{(child as ReactElement).props.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((row, index) => (
                  <tr key={index}>
                    {Children.map(children, (child) => (
                      <td>{(child as ReactElement).props.children(row)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {data.length === 0 && (
            <div className="emptyMessage">Não possui nenhum item.</div>
          )}
        </>
      )}

      <Pagination
        totalItems={data.length}
        itemsPerPage={currentItemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </>
  );
};

export default Table;
