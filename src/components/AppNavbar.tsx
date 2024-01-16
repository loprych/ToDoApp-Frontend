import {IconListCheck, IconPencilPlus} from "@tabler/icons-react";
import {NavLink} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export const AppNavbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavLink onClick={() => navigate('/todo/new')} label="Add task"
                     leftSection={<IconPencilPlus size="1rem" stroke={1.5}/>}/>
            <NavLink onClick={() => navigate('/todo')} label="List tasks"
                     leftSection={<IconListCheck size="1rem" stroke={1.5}/>}/>
        </div>
    )
}