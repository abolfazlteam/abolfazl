"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Input from "../Inputs/Input";
import SearchLink from "../Navigation/SearchItemLink";
import { ChangeEvent, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import searchQueryHandler from "@/utils/search-utils";
import { ALL_PUBLISHED_DOCUMENTS } from "@/constants/content";

interface ISearchModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const SearchModal: React.FC<ISearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState<string>("");
  const { ref } = useClickOutside(onClose);

  const debouncedQuery = useDebounce(query, 500);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const searchResults = searchQueryHandler(
    ALL_PUBLISHED_DOCUMENTS,
    debouncedQuery as string,
  );

  return (
    <article
      ref={ref}
      data-testid="search-modal"
      className={`absolute left-1/2 top-[7.5rem] mx-auto w-full -translate-x-1/2 space-y-2 transition-all duration-300 ease-linear max-sm:max-w-[520px] sm:max-w-[800px] ${isOpen ? "visible z-40 gap-y-8 opacity-100" : "invisible -z-30 scale-0 opacity-0"}`}
    >
      {/* Input for search */}
      <Input
        value={query}
        onChange={handleQueryChange}
        hasSearchIcon
        placeholder="Search"
        className="bg-bgColor"
      />

      {/* list of found items */}
      <ul className="rounded-10 border border-[#ABB2BF] bg-bgColor">
        {typeof searchResults !== "string" &&
          searchResults &&
          searchResults.length > 0 &&
          searchResults?.map((item, index) => (
            <SearchLink
              key={item._id}
              onClose={onClose}
              href={`/${item.linkPrefix}/${item.slug}`}
              category={item.type}
              className={`${index === searchResults.length - 1 && "border-none"}`}
            >
              {item.title}
            </SearchLink>
          ))}
        {query &&
          typeof searchResults !== "string" &&
          searchResults &&
          searchResults.length === 0 && (
            <span className="inline-block w-full px-6 py-4 text-center text-base text-heading">
              Nothing was found! Please try something else.
            </span>
          )}

        {!query && (
          <span className="inline-block w-full px-6 py-4 text-center text-base text-heading">
            Please, type what you are looking for ...
          </span>
        )}
      </ul>
    </article>
  );
};

export default SearchModal;
