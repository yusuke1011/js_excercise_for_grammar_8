(() => {
    //DOM
    const output = document.getElementById('output');
    const addInput = document.getElementById('addInput');
    const addTask = document.getElementById('addTask');
    const deleteIndex = document.getElementById('deleteIndex');
    const deleteTask = document.getElementById('deleteTask');
    const message = document.getElementById('message');
    
    const todos = [];

    //配列に入力されたタスクを追加する
    const createTodo = (_addInput) => {
        if(_addInput){
            //配列に追加
            todos.push(_addInput);
            //メッセージを更新
            message.innerText = "正常に追加されました";
        }
        else{
            //メッセージを更新
            message.innerText = '値が不正です'
        }
        
    };

    //配列から指定されたタスクを削除する
    const deleteTodo = (_deleteIndex) => {
        if((_deleteIndex > 0) && (_deleteIndex <= todos.length)){
            //配列を削除
            todos.splice(_deleteIndex - 1, 1);
            //メッセージを更新
            message.innerText = '正常に削除されました';
        }
        else{
            //メッセージを更新
            message.innerText = '値が不正です'
        }
    };

    //配列に保存されているタスクを表示する
    const showTodo = () => {
        output.innerText = '';
        todos.forEach((element, num) => {
            output.innerText += num + 1 + '：' + element + '\n';
        });
        if(!todos.length){
            output.innerText = 'タスクはありません';
        }
    };

    //ページ更新時にタスク表示
    showTodo();

    //追加ボタン押下時
    addTask.addEventListener('click', () => {
        createTodo(addInput.value);
        showTodo();
    });

    //削除ボタン押下時
    deleteTask.addEventListener('click', () => {
        deleteTodo(parseInt(deleteIndex.value, 10));
        showTodo();
    });
})();