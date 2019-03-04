class TodoService {
  getItems() {
    return fetch('http://localhost:3020/todos')
      .then((res) => {
        return res.json()
      });
  }

  createItem(item) {
    return fetch('http://localhost:3020/todos', {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json()
      });
  }

  changeItem(item) {
    return fetch(`http://localhost:3020/todos/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json()
      });
  }
}

export default new TodoService();