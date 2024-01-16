import {Outlet} from "react-router-dom";
import React from "react";
import {AppNavbar} from "./AppNavbar";
import {AppShell, Burger, Group, Text} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

export const Layout = () => {
    const [opened, {toggle}] = useDisclosure();

    const backgroundColor = "rgba(171,174,182,0.8)";
    const style = {
        backgroundColor: backgroundColor,
    };

    return (
        <div style={style}>
            <AppShell
                header={{height: 60}}
                navbar={{
                    width: 300,
                    breakpoint: "sm",
                    collapsed: {mobile: !opened},
                }}
                padding="md"
            >
                <AppShell.Header style={{backgroundColor: backgroundColor}}>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                        <a href={"/"} style={{textDecoration: "none", color: "inherit"}}>
                            <Text size="xl">TODO APP</Text>
                        </a>
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar p="md">
                    <AppNavbar/>
                </AppShell.Navbar>
                <AppShell.Main style={{backgroundColor: backgroundColor}}>
                    <Outlet/>
                </AppShell.Main>
            </AppShell>
        </div>
    );
};