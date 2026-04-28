"use client"
import { create } from "zustand";

type StateT = {
  asideIsOpen: boolean;
  viewport: number;
  setAsideIsOpen: ()=>void;
}

export const useLayoutState = create<StateT>((set)=>({
  asideIsOpen: true,
  viewport: window.innerWidth,
  setAsideIsOpen: ()=>{
    set((prev)=>({...prev, asideIsOpen: !prev.asideIsOpen}))
  }
}))