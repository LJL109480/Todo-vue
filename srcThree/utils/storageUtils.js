/**
 * Created by Administrator on 2018/11/11.
 */
export default{
  saveTodos(todo){
    localStorage.setItem('todos_key', JSON.stringify(todo))
  },
  readTodos(){
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
  }
}
