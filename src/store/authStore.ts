import { User } from "@/views/Sign/SignIn/type";
import { create } from "zustand";

interface UserStore {
  user: User;
  signIn: (newUser: User) => void;
  signOut: () => void;
}

export const userAuthStore = create<UserStore>((set) => ({
  user: { username: "", email: "" },
  signIn: (newUser: User) => set({ user: newUser }),
  signOut: () => set(() => ({ user: { username: "", email: "" } })),
}));
