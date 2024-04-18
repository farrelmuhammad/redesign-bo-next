import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export interface MenuViewState {
    sidebarVisible: boolean;
}

export interface MenuState {
    view: MenuViewState;
    selectedMenu: string | null;
}

const initialState: MenuState = {
    view: {
        sidebarVisible: false,
    },
    selectedMenu: null,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setViewToggleSidebar(state: MenuState) {
            state.view.sidebarVisible = !state.view.sidebarVisible;
        },
    },
});

export const {
    setViewToggleSidebar,
} = menuSlice.actions;

// export const selectAnnouncementList = (state: RootState) => state.menu.announcementList;
// export const selectTransactionList = (state: RootState) => state.menu.transactionList;
// export const selectHistoryDetail = (state: RootState) => state.menu.historyDetail;
export const selectViewState = (state: RootState) => state.menu.view;
// export const selectSelectedMenu = (state: RootState) => state.menu.selectedMenu;

export default menuSlice.reducer;