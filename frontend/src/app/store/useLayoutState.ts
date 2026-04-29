"use client"
import { create } from "zustand";

type StateT = {
  asideIsOpen: boolean;
  viewport: number;
  setAsideIsOpen: ()=>void;
}

export const useLayoutState = create<StateT>((set)=>({
  asideIsOpen: true,
  viewport: typeof window !== 'undefined' ? window.innerWidth : 1024,
  setAsideIsOpen: ()=>{
    set((prev)=>({...prev, asideIsOpen: !prev.asideIsOpen}))
  }
}))