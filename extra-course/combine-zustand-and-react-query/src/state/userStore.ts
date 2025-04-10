import { create } from "zustand";
import type { GetUsersFilters } from "../api/user";

type UserStore = {
	filters?: GetUsersFilters;
	setFilters: (filters?: GetUsersFilters) => void;
};

export const useUserStore = create<UserStore>()((set) => ({
	filters: undefined,
	setFilters: (filters) => set({ filters }),
}));
