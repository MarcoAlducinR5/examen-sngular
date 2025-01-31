"use client"

import { AppUI } from "@/Components/AppUI";
import { TodoProvider } from "@/Context";
import React from "react";

export default function Home() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
