import ACTION from '../actions/mobilizer';

export default (state, action) => {
  switch (action.type) {
    case `${ACTION.LIST}`:
      return {
        ...state,
        list: action.data.data,
        pagination: {
          limit: parseInt(action.data.limit),
          start: parseInt(action.data.start),
          total: parseInt(action.data.total),
          currentPage: parseInt(action.data.page),
          totalPages: Math.ceil(action.data.total / action.data.limit),
        },
        query: { name: action.data.name, phone: action.data.phone },
      };

    case `${ACTION.MOBILIZER_TX}`:
      return { ...state, transactionHistory: action.data };

    case `${ACTION.LIST_AID}`:
      return {
        ...state,
        aids: action.data.aids,
      };

    case `${ACTION.SET_AID}`:
      return {
        ...state,
        aid: action.data,
      };

    case `${ACTION.SET_MOBILIZER}`:
      return {
        ...state,
        mobilizer: action.data,
      };

    default:
      return state;
  }
};
