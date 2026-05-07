"use client"
import { create } from "zustand";

type StateT = {
  asideIsOpen: boolean;
  workerAdded: boolean;
  viewport: number;
  setAsideIsOpen: ()=>void;
  setWorkerAdded: (workerAdded: boolean)=>void;
}

export const useLayoutState = create<StateT>((set)=>({
  asideIsOpen: true,
  workerAdded: false,
  viewport: typeof window !== 'undefined' ? window.innerWidth : 1024,
  setAsideIsOpen: ()=>{
    set((prev)=>({...prev, asideIsOpen: !prev.asideIsOpen}))
  },
  setWorkerAdded: (workerAdded) => {
    set((prev) => ({ ...prev, workerAdded }));
  }
}))