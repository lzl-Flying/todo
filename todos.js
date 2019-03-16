    var uid = 0;
    var filTodo = {
        all: function(todos) {
            return todos
        },
        active: function(todos) {     //筛选 未被选中的item -->[]
            return todos.filter(function (todo) {
                return !todo.completed
            })
        },
        checked: function (todos) {   //筛选 选中item -->[]
            return todos.filter(function (todo) {
                return todo.completed
            })
        },
    }

    var app = new Vue({
        el: '#app',
        data : {
            message: 'todo',
            iftodos:'目前还没有要展示的项',
            newTodo: '',
            todos: [],
            state: 'all'
        },

        computed: {
            // completedata () {
            //     switch (this.state) {
            //         case 'all':
            //             return filTodo.all(this.todos)
            //         case 'active': 
            //             return filTodo.active(this.todos)
            //         case 'checked': 
            //             return filTodo.completed(this.todos)
            //     }
            // }  

            filterTodos: function () {
                return filTodo[this.state](this.todos)
            },

            ifEntire: function (value) {
                this.todos.forEach(function(todo,index) {
                    todo.completed = value;
                });
            }
        },

        methods: {
            addTodo: function () {
                var value = this.newTodo && this.newTodo.trim();
                if (!value) {
                    return
                }
                this.todos.push({
                    title: value,
                    id: uid += 1,
                    completed: false,
                })
                this.newTodo = ''
            },

            removeTodo: function (todo) {
                this.todos.splice(this.todos.indexOf(todo), 1);
            },

            handleclick: function (state) {
                this.state = state;
            },

            dele: function () {
                this.todos = filTodo.active(this.todos);
            },
            
        }
    })

