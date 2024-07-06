import React from 'react'
import {Button} from '@/components/ui/button'
import { sendMail } from "@/lib/mail";
export default function Home() {
    const send = async () => {
      "use server";
      await sendMail({
        to: "",
        name: "yoyoyo",
        subject: "Test Mail",
        body: `<h1>test</h1>` ,
      });
    };
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
        <form>
          <Button formAction={send}>test</Button>
        </form>
      </main>
    );
  }