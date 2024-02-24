'use client'
import { Card, Grid, Group, LoadingOverlay, rem } from '@mantine/core'
import React from 'react'
import { DiscordProfile } from '../DiscordProfile'

export default function HeroSection() {
    return (
        <div className={'shadow-xl h-screen w-full m-10'}>
            <Grid grow gutter={'xl'} className='p-10'>
                <Grid.Col span={4} ><Examples /></Grid.Col>
                <Grid.Col span={4}><Examples /></Grid.Col>
                <Grid.Col span={4}><Examples /></Grid.Col>
                <Grid.Col span={4}><Examples /></Grid.Col>
                <Grid.Col span={4}><DiscordProfile /></Grid.Col>
            </Grid>
        </div>
    )
}


export function Examples() {
    return (
        <Card className='shadow-xl' style={{ minHeight: rem(120) }} withBorder>
            <LoadingOverlay visible={false} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            Örnekler
        </Card>
    )
}