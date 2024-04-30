import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export interface MenuViewState {
    sidebarVisible: boolean;
    dropdownUserVisible: boolean;
    dropdownNotifications: boolean;
}

export interface MenuState {
    view: MenuViewState;
    selectedMenu: string | null;
}

const initialState: MenuState = {
    view: {
        sidebarVisible: false,
        dropdownUserVisible: false,
        dropdownNotifications: false,
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
        setViewDropdownUser(state: MenuState) {
            state.view.dropdownUserVisible = !state.view.dropdownUserVisible;
        },
        setViewDropdownNotifications(state: MenuState) {
            state.view.dropdownNotifications = !state.view.dropdownNotifications;
        },
    },
});

export const {
    setViewToggleSidebar,
    setViewDropdownUser,
    setViewDropdownNotifications
} = menuSlice.actions;

// export const selectAnnouncementList = (state: RootState) => state.menu.announcementList;
// export const selectTransactionList = (state: RootState) => state.menu.transactionList;
// export const selectHistoryDetail = (state: RootState) => state.menu.historyDetail;
export const selectViewState = (state: RootState) => state.menu.view;
// export const selectSelectedMenu = (state: RootState) => state.menu.selectedMenu;

export default menuSlice.reducer;