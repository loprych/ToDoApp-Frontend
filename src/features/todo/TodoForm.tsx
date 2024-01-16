import {TodoFormValues} from "../../types/TodoFormValues";
import {useTodoForm} from "./hooks/useTodoForm";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";

export const TodoForm = () => {
    const form = useTodoForm();
    const handleSubmit = (vals: TodoFormValues) => {
        console.log(vals);
    }
    return (
        //cieniowanie i padding wokol komponentu
        <Paper shadow="xs" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Title"
                        placeholder="Task title"
                        {...form.getInputProps("title")}
                    />

                    <Textarea withAsterisk label="Description"  //pole tekstowe
                              placeholder="Task description" {...form.getInputProps("content")}/>
                    <Checkbox label="Mark as done" {...form.getInputProps('done', {type: 'checkbox'})}/>

                    <Group justify="flex-end" mt={"md"}>
                        <Button type="submit" variant="light">Add</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    )

}