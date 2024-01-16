import {useForm} from "@mantine/form";
import {TodoFormValues} from "../../../types/TodoFormValues";

export const useTodoForm = () => {
    const form = useForm<TodoFormValues>({
        initialValues: {
            id: 0,
            content: "",
            title: "",
            done: false,
        },

        validate: {
            title: (value) => {
                if (value.length < 3) {
                    return "Title must be at least 3 characters long";
                }
            },
            content: (value) => {
                if (value.length < 10) {
                    return "Content must be at least 10 characters long";
                }
            }
        },
    });

    return form;
}