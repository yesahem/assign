"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {  login, Signup } from '@/actions/user'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome Back </CardTitle>
          <CardDescription>Login to access your notes</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="email@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" placeholder="********" />
              </div>
            </div>
            <Button
            className="cursor-pointer"
            formAction={Signup}
            onClick={() => {
              alert("LoggedIn");
            }}
          >
            Signup
          </Button>
          <Button variant="outline" className="cursor-pointer" formAction={login}>
            Login
          </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          
          
        </CardFooter>
        <span className="flex items-center justify-center">
          Don&apos;t have an account??{" "}
          <span className="underline pl-2 cursor-pointer">
            <Link href="/signup">Signup</Link>
          </span>
        </span>
      </Card>
    </div>
  );
}
