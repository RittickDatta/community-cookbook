import { createContext } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({children}: {children: React.ReactNode}) => {
    // Filters are set in the FilterBar component, read in the view all recipe to filter data
    const filters = new Map();

    return (<FilterContext.Provider value={filters}>
        {children}
    </FilterContext.Provider>)
}