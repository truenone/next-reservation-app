import { Avatar, Card, Group, LoadingOverlay, Text, rem } from "@mantine/core";
import { useEffect, useState } from "react";

interface IDiscordUser {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    premium_type: number;
    flags: number;
    banner?: string | null; // Optional banner URL
    accent_color?: number | null; // Optional accent color
    global_name: string;
    avatar_decoration_data?: any; // Potentially complex data structure
    banner_color?: string | null; // Optional banner color
}


export function DiscordProfile() {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<IDiscordUser | null>();

    getDiscordUser({ setUser, setLoading })

    return (
        <Card className='shadow-xl' style={{ minHeight: rem(120) }} withBorder>
            <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                    <img src='/discord-logo.png' width={75} height={75} />
                    <Text fw={500}>Discord</Text>
                </Group>
            </Card.Section>
            <Card withBorder shadow='xl' mt={'md'} className='hover:bg-zinc-800 transition-all hover:scale-[1.01]'>
                <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                <div className='flex flex-row gap-5 items-center min-h-12'>
                    {loading ? null : <Avatar src={`https://cdn.discordapp.com/avatars/940655992662818826/${user?.avatar}.png?size=2048`} />}
                    <div>{user?.username}</div>
                </div>
            </Card>
        </Card>
    )
}


function getDiscordUser({ setUser, setLoading }: any) {
    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('https://discord.com/api/v9/users/940655992662818826', {
                headers: {
                    "Authorization": `${process.env.NEXT_PUBLIC_DC_TOKEN}`
                }
            })
            const user_data = await res.json();
            console.log(user_data)
            setUser(user_data);
            setLoading(false);
        }

        fetchUser()
    }, [])
}