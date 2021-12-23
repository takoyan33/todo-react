import React from 'react';

 export const CompleteTodos = (props)=> {

const { todos, onClickBack } = props;

  return(
    <div className="complete-area">
    <p clasName="title">完了のTODO</p>
    <ul>
    {todos.map((todo, index) => {
      return(
        <div key={todo} className="list-row">
          <p>{ todo } </p>
            <button onClick={()=> onClickBack(index)}>戻す</button>
      </div>
      );
})}
    </ul>
  </div>

  );
};