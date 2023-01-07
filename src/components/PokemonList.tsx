import React, { useMemo, useState } from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  className?: string;
  list: any[];
}

const PokemonList: React.FC<PokemonListProps> = ({ className, list }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 5;

  const currentList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return list.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="deck-container">
      {" "}
      <div className={className}>
        {currentList.map((pokemon) => (
          <PokemonCard name={pokemon.name} className="poke-card" />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={list.length}
        pageSize={PageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </div>
  );
};

export default PokemonList;
