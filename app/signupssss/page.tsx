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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {  Signup } from '@/actions/user'
export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome to AI-notes</CardTitle>
          <CardDescription>Create a new account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="email@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="********" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="cursor-pointer">
            Cancel
          </Button>
          <Button
          formAction={Signup}
            className="cursor-pointer"
            
          >
            Create Account
          </Button>
        </CardFooter>
        <span className="flex items-center justify-center">
          Already have an account??{" "}
          <span className="underline pl-2 cursor-pointer">
            <Link href="/login">Login</Link>
          </span>
        </span>
      </Card>
    </div>
  );
}
