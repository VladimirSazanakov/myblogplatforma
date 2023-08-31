export default class ApiBlog {
  _apiBase = 'https://blog.kata.academy/api/';

   optionsGet = {
     method: 'GET',
     headers: {
       accept: 'aplication/json',
     },
   };

   async getResourse(url: string) {
     try {
       const response = await fetch(`${this._apiBase}${url}`, this.optionsGet);
       return (await response).json();
     } catch (err) {
       throw new Error('Could Not connection');
     }
   };

   async getArticles() {
     const url = 'articles';
     return this.getResourse(url);
   };
  }

//   async getTicket(searchID: string) {
//     const url = `tickets?searchId=${searchID}`;
//     return this.getResourse(url);
//   }
// }
