import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'
export default function ToDoList({ toDoList }) {
    return (
        <div className={style.ToDoList}>
            <div className="input-group">
                <input type="text" placeholder='Nhap cong viec...' />
                <button>ADD</button>
            </div>
            <h1 className="title">
                Dashboard
            </h1>
            <div className="card-list">
                <div className="card">
                    <h2>Viec can lam</h2>
                    {
                        toDoList.map(e => <div className={classNames('to-do-item', { done: e.done })}>
                            <div className='name'>{e.name}</div>
                            <button>\/</button>
                        </div>)
                    }
                </div>
                <div className="card">
                    <h2>Viec can lam</h2>
                </div>
            </div>

        </div>
    )
}
