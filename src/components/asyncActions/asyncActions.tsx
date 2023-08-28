// import ApiBlog from '../../service/ApiBlog';

// const api = new ApiBlog();

// export const fetchSessionId = () => async (dispatch: AppDispatch) => {
//   let temp: any;
//   try {
//     temp = true;

//     dispatch(rawTicketAction.SET_LOADING(temp));
//     const { searchId } = await api.getSearchId();

//     dispatch(rawTicketAction.FETCH_SEARCH_ID(searchId));

//     temp = false;
//     dispatch(rawTicketAction.SET_LOADING(temp));
//     // dispatch({ type: 'rawTickets/SET_LOADING', action: { payload: false } });
//   } catch (err) {
//     temp = false;
//     dispatch(rawTicketAction.SET_LOADING(temp));
//     // dispatch({ type: 'rawTickets/SET_LOADING', action: { payload: false } });

//     temp = true;
//     dispatch(rawTicketAction.SET_ERROR(temp));
//     // dispatch({ type: 'rawTickets/SET_ERROR', action: { payload: true } });
//   }
// };

// export const fetchTickets = (searchId: string) => async (dispatch: any) => {
//   const maxTryingCount = 30;
//   let stop = false;
//   let tryingCount = 1;
//   let temp: any;

//   while (!stop && tryingCount <= maxTryingCount) {
//     temp = true;
//     dispatch(rawTicketAction.SET_LOADING(temp));
//     // dispatch({ type: 'rawTickets/SET_LOADING', action: { payload: true } });

//     try {
//       const result = await api.getTicket(searchId);
//       dispatch(rawTicketAction.FETCH_TICKETS(result.tickets));
//       stop = result.stop;

//       temp = false;
//       dispatch(rawTicketAction.SET_ERROR(temp));
//       // dispatch({ type: 'rawTickets/SET_ERROR', action: { payload: false } });
//     } catch (err) {
//       temp = true;
//       dispatch(rawTicketAction.SET_ERROR(temp));
//       // dispatch({ type: 'rawTickets/SET_ERROR', action: { payload: true } });
//     }
//     tryingCount++;
//   }
//   temp = false;
//   dispatch(rawTicketAction.SET_LOADING(temp));
//   // dispatch({ type: 'rawTickets/SET_LOADING', action: { payload: false } });
// };
