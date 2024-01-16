import React from 'react';
import {TodoListItem} from "./TodoListItem";
import {TodoType} from "../../types/TodoType";
import {SimpleGrid} from "@mantine/core";

const data: TodoType[] = [
    {
        id: 1,
        title: 'Zrobić zakupy',
        content: 'Masło, Herbata, Ryż',
        done: false
    },
    {
        id: 2,
        title: 'Wyprowadzić psa',
        content: 'Spacer w parku',
        done: false
    },
    {
        id: 3,
        title: 'Zrobić zadanie domowe',
        content: 'Zadanie z matematyki',
        done: false
    },
    {
        id: 4,
        title: 'Zaliczyć MES',
        content: 'Kolokwium z MES',
        done: true
    },
    {
        id: 5,
        title: 'Wykonać trening',
        content: 'Podnoszenie ciężarów',
        done: false
    },
    {
        id: 6,
        title: 'Oddać projekt',
        content: 'Inżynieria Internetu',
        done: true
    }
]

export const TodoList = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map(item => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}