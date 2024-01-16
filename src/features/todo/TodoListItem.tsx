import React, {CSSProperties, FC, memo} from 'react';
import {TodoType} from '../../types/TodoType';
import {Card, Image, Text, Button, Group} from '@mantine/core';
import {useNavigate} from "react-router-dom";

interface TodoListItemProps {
    item: TodoType;
}

export const TodoListItem: FC<TodoListItemProps> = memo(({item}) => {
    const style: CSSProperties = {
        border: '2px solid',
        borderColor: item.done ? 'rgba(60, 179, 113, 1)' : 'rgba(194, 0, 0, 1)',
    };

    const handleMarkAsDone = () => {
    };
    const handleDeleteTask = () => {
    };
    const navigate = useNavigate();
    const handleEditTask = (id: number) => {
        navigate(`/todo/${id}`);
    };

    return (
        <><Card shadow="sm" padding="sm" radius="md" style={style}>
            <Card.Section>
                <Image
                    src="https://images.pexels.com/photos/5538588/pexels-photo-5538588.jpeg?auto=compress&cs=tinysrgb&w=600"
                    h={200}
                    alt="No way!"/>
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {item.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>

            <Group>
                <Button onClick={handleMarkAsDone} style={{marginTop: '8px'}}>
                    {item.done ? "Undo" : 'Mark as done'}
                </Button>
                <Button variant="light" onClick={handleDeleteTask} style={{marginTop: '8px'}}>
                    Delete Task
                </Button>
                <Button variant="outline" onClick={() => handleEditTask(item.id)} style={{marginTop: '8px'}}>
                    Edit Task
                </Button>
            </Group>
        </Card>
        </>
    );
});