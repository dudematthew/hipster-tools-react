"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from 'react';
import { stat } from "fs";
import { Skeleton } from "../ui/skeleton";

export default function User () {
    const { data: session, status } = useSession();
    const initials = session?.user?.name?.split(' ').map((name: string) => name[0]).join('') ?? '';

    return (
        <div className="flex gap-3 w-full items-center my-1">

            {status === 'loading' && (
                <>
                    <Skeleton className="h-10 w-10 rounded-full"></Skeleton>
                    <Skeleton className="h-3 w-[230px]"></Skeleton>
                </>
            ) || status === 'authenticated' && (
                <>
                    <Avatar>
                        <AvatarImage src={session?.user?.image ?? ''} />
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-ellipsis">{session?.user?.name ?? ''}</span>
                </>
            ) || status === 'unauthenticated' && (
                <Button variant="secondary" onClick={() => signIn('google')} className="w-full">
                    Login with Google <CircleUser className="ml-2"></CircleUser>
                </Button>
            )}

        </div>
    );
}