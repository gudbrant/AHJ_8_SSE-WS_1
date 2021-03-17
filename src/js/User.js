export default class User {
  constructor(url) {
    this.url = url;
    this.contentTypeHeader = { 'Content-Type': 'application/json' };
  }

  load() {
    return fetch(this.url);
  }

  add(contact) {
    return fetch(this.url, {
      body: JSON.stringify(contact),
      method: 'POST',
      headers: this.contentTypeHeader,
    });
  }

  remove(nameUser) {
    return fetch(`${this.url}/${nameUser}`, {
      method: 'DELETE',
    });
  }
}
