import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

const PaginationContext = createContext();

const initialState = {
    page: 1,
    limit: 20
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return { ...state, page: state.page + 1 };
        case 'PREV_PAGE':
            return { ...state, page: state.page > 1 ? state.page - 1 : 1 };
        default:
            return state;
    }
};

const PaginationProvider = ({ children }) => {
    const storedPage = parseInt(localStorage.getItem('paginationPage'), 10);
    const storedLimit = parseInt(localStorage.getItem('paginationLimit'), 10);

    const [state, dispatch] = useReducer(reducer, {
        page: storedPage || initialState.page,
        limit: storedLimit || initialState.limit
    });

    useEffect(() => {
        localStorage.setItem('paginationPage', state.page);
        localStorage.setItem('paginationLimit', state.limit);
    }, [state.page, state.limit]);

    return (
        <PaginationContext.Provider value={{ state, dispatch }}>
            {children}
        </PaginationContext.Provider>
    );
};

PaginationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { PaginationContext, PaginationProvider };




