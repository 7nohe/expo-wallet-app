import { Ticket } from "../store/ticket/types";

export const getTickets = (): Promise<Ticket[]> => {
  const promise = new Promise<Ticket[]>(resolve => {
    setTimeout(() => {
      resolve([
        {
          index: 10,
          name: "MyTicket 2020",
          balance: 2000
        },
        {
          index: 20,
          name: "MyTicket 2019",
          balance: 5000
        }
      ]);
    }, 100000);
  });

  return promise;
};
